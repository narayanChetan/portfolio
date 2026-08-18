'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import MenuBar from '@/components/MenuBar';
import { profile, projects, skillGroups, experience } from '@/lib/data';
import { playStartup, playClick, playEnter, playError } from '@/lib/sound';

const HELP = `Available commands:
  about       - who I am
  projects    - list projects
  skills      - list skills
  experience  - work history
  contact     - go to the guestbook
  clear       - clear the screen
  help        - show this message`;

function run(cmd) {
  const c = cmd.trim().toLowerCase();
  if (c === 'help') return HELP;
  if (c === 'about') return `${profile.name}\n${profile.tagline}`;
  if (c === 'projects') return projects.map((p) => `- ${p.title} (${p.stack})`).join('\n');
  if (c === 'skills')
    return skillGroups.map((g) => `${g.label}: ${g.skills.map((s) => s.name).join(', ')}`).join('\n');
  if (c === 'experience') return experience.map((e) => `${e.period}  ${e.role} @ ${e.org}`).join('\n');
  if (c === 'contact') {
    return `Contact me:\n  GitHub: ${profile.github}\n  LinkedIn: ${profile.linkedin}\n\nYou can open those URLs in your browser or visit the Guestbook from the main menu.`;
  }
  if (c === '') return '';
  return `command not found: ${cmd}`;
}

export default function TerminalPage() {
  const [history, setHistory] = useState([
    { type: 'sys', text: 'ChetanOS Terminal v1.0 [Version 1.0.1994]' },
    { type: 'sys', text: '(c) 1994 RetroAI Systems. All rights reserved.' },
    { type: 'sys', text: 'Loading core modules...' },
    { type: 'sys', text: '[ OK ] sys_kernel_init' },
    { type: 'sys', text: '[ OK ] mem_alloc_64k' },
    { type: 'sys', text: '[ OK ] ai_neural_net_v1' },
    { type: 'sys', text: "Type 'help' to see available commands." },
  ]);
  const [input, setInput] = useState('');
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  useEffect(() => {
    // Play a short retro Mac-style startup chord when opening the terminal
    playStartup();
  }, []);

  function submit(e) {
    e.preventDefault();
    const cmd = input;
    playEnter();
    if (cmd.trim().toLowerCase() === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }
    const output = run(cmd);
    if (output.startsWith('command not found')) playError();
    setHistory((h) => [...h, { type: 'cmd', text: cmd }, { type: 'out', text: output }]);
    setInput('');
  }

  return (
    <div className="h-screen flex flex-col desktop-bg-dark">
      <MenuBar dark />
      <div className="flex-1 flex items-center justify-center p-2 md:p-8">
        <div className="w-full max-w-3xl h-full max-h-[600px] flex flex-col bevel-out-dark bg-[#0e0e0e]">
          <div className="relative h-6 flex items-center justify-center speed-lines-dark shrink-0">
            <Link href="/" onClick={() => playClick()} className="absolute left-1.5 w-3.5 h-3.5 btn-3d-dark" aria-label="Close" />
            <span className="relative bg-[#1c1b1b] px-2 font-grotesk font-bold text-[13px] text-[#e5e2e1] flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">terminal</span>
              Terminal
            </span>
          </div>
          <div className="flex-1 overflow-y-auto p-4 font-mono text-[13px] text-[#e5e2e1] leading-6">
            {history.map((h, i) => (
              <div key={i} className={h.type === 'sys' ? 'text-[#c4c7c7]' : h.type === 'cmd' ? 'text-[#3d5afe]' : 'whitespace-pre-wrap'}>
                {h.type === 'cmd' ? `sysadmin@chetanOS:~$ ${h.text}` : h.text}
              </div>
            ))}
            <form onSubmit={submit} className="flex items-center gap-1">
              <span className="text-[#3d5afe]">sysadmin@chetanOS:~$</span>
              <input
                autoFocus
                value={input}
                onFocus={() => playClick()}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent outline-none text-[#e5e2e1]"
              />
              <span className="w-2 h-4 bg-[#e5e2e1] blink" />
            </form>
            <div ref={bottomRef} />
          </div>
        </div>
      </div>
    </div>
  );
}
