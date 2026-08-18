'use client';

import { useState } from 'react';
import MenuBar from '@/components/MenuBar';
import Sidebar from '@/components/Sidebar';
import Window from '@/components/Window';
import { projects } from '@/lib/data';

export default function ProjectsPage() {
  const [toast, setToast] = useState('');

  function handleRepoClick(e, link) {
    if (!link || link === '#') {
      e.preventDefault();
      setToast('Repo link not added yet — edit lib/data.js to set it.');
      setTimeout(() => setToast(''), 2500);
    }
  }

  return (
    <div className="h-screen flex flex-col desktop-bg-platinum">
      <MenuBar />
      <div className="flex-1 flex min-h-0">
        <Sidebar />
        <main className="flex-1 flex flex-col p-2 md:p-6 min-h-0 relative">
          <Window title="My Projects" footerLeft={`${projects.length} items`} footerRight="grid">
            <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {projects.map((p) => (
                <div key={p.title} className="bevel-out bg-[#f4f3f3] p-4 flex flex-col">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="font-grotesk font-bold text-[18px] text-[#00006c]">{p.title}</h3>
                    <span className="material-symbols-outlined text-[#00006c]">{p.icon}</span>
                  </div>
                  <div className="font-mono text-[12px] text-[#666] mb-3">{p.stack}</div>
                  <ul className="font-body text-[14px] leading-5 list-disc pl-4 space-y-1 flex-1">
                    {p.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                  <a
                    href={p.link}
                    target={p.link && p.link !== '#' ? '_blank' : undefined}
                    rel="noreferrer"
                    onClick={(e) => handleRepoClick(e, p.link)}
                    className="btn-3d self-start mt-3 px-3 py-1 font-mono text-[12px] font-bold"
                  >
                    {'<>'} Repo Link
                  </a>
                </div>
              ))}
            </div>
          </Window>
          {toast && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 btn-3d px-4 py-2 font-grotesk text-[13px] font-bold">
              {toast}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
