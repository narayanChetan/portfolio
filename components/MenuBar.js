'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { profile } from '@/lib/data';
import { useSound } from '@/components/SoundProvider';
import { playClickAlt } from '@/lib/sound';

const menuDefs = {
  File: ['New Finder Window', 'Open...', 'Close Window', 'Print...'],
  Edit: ['Undo', 'Cut', 'Copy', 'Paste'],
  View: ['as Icons', 'as List', 'Clean Up'],
  Special: ['Empty Trash', 'Restart', 'Shut Down'],
};

export default function MenuBar({ dark = false }) {
  const [openMenu, setOpenMenu] = useState(null);
  const [showAbout, setShowAbout] = useState(false);
  const [showShutdown, setShowShutdown] = useState(false);
  const { muted, toggleMuted } = useSound();
  const wrapRef = useRef(null);

  useEffect(() => {
    function onClick(e) {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpenMenu(null);
    }
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  const textClass = dark ? 'text-[#e5e2e1]' : 'text-[#1a1c1c]';
  const barClass = dark ? 'bg-[#1c1b1b] border-black' : 'bg-[#eeeeee] border-black';
  const dropdownClass = dark
    ? 'bg-[#1c1b1b] text-[#e5e2e1] bevel-out-dark'
    : 'bg-[#eeeeee] text-[#1a1c1c] bevel-out';

  return (
    <div ref={wrapRef} className={`relative flex items-center justify-between h-6 px-2 text-[13px] font-grotesk font-bold select-none border-b ${barClass} ${textClass}`}>
      <div className="flex items-center gap-4">
        <Link href="/" className="flex items-center gap-1 font-bold">
          <span className="material-symbols-outlined text-[16px] leading-none">computer</span>
          {profile.name}
        </Link>
        <div className="hidden sm:flex items-center gap-1">
          {Object.entries(menuDefs).map(([label, items]) => (
            <div key={label} className="relative">
              <button
                onClick={() => setOpenMenu(openMenu === label ? null : label)}
                className={`px-2 py-0.5 font-medium ${openMenu === label ? (dark ? 'bg-[#3d5afe] text-white' : 'bg-[#00006c] text-white') : 'opacity-80 hover:opacity-100'}`}
              >
                {label}
              </button>
              {openMenu === label && (
                <div className={`absolute left-0 top-6 w-48 py-1 z-50 ${dropdownClass}`}>
                  {items.map((item) => (
                    <button
                      key={item}
                      onClick={() => {
                        setOpenMenu(null);
                        if (label === 'Special' && item === 'Restart') window.location.reload();
                        if (label === 'Special' && item === 'Shut Down') setShowShutdown(true);
                      }}
                      className="w-full text-left px-3 py-1 font-medium hover:bg-[#00006c] hover:text-white"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button
          aria-label={muted ? 'Unmute sounds' : 'Mute sounds'}
          onClick={() => {
            toggleMuted();
          }}
          className="material-symbols-outlined text-[16px] leading-none"
        >
          {muted ? 'volume_off' : 'volume_up'}
        </button>
        <button aria-label="About This Mac" onClick={() => setShowAbout(true)} className="material-symbols-outlined text-[16px] leading-none">
          settings
        </button>
        <button aria-label="Shut Down" onClick={() => setShowShutdown(true)} className="material-symbols-outlined text-[16px] leading-none">
          power_settings_new
        </button>
      </div>

      {showAbout && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/30" onMouseDown={(e) => e.target === e.currentTarget && setShowAbout(false)}>
          <div className="w-80 bevel-out bg-[#cccccc]">
            <div className="h-6 flex items-center justify-center bevel-out border-b border-black">
              <span className="font-grotesk font-bold text-[13px]">About This Mac</span>
            </div>
            <div className="bevel-in bg-white m-3 p-4 text-center">
              <span className="material-symbols-outlined text-[40px] text-[#00006c]">computer</span>
              <h3 className="font-grotesk font-bold text-[16px] mt-2">{profile.systemLabel}</h3>
              <p className="font-mono text-[12px] text-[#666] mb-3">{profile.systemSub}</p>
              <p className="font-body text-[12px] text-left">{profile.name}&apos;s portfolio, built with Next.js. Sound: synthesized retro chimes.</p>
              <button onClick={() => setShowAbout(false)} className="btn-3d mt-4 px-4 py-1 font-grotesk text-[13px] font-bold">
                OK
              </button>
            </div>
          </div>
        </div>
      )}

      {showShutdown && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/30" onMouseDown={(e) => e.target === e.currentTarget && setShowShutdown(false)}>
          <div className="w-80 bevel-out bg-[#cccccc]">
            <div className="h-6 flex items-center justify-center bevel-out border-b border-black">
              <span className="font-grotesk font-bold text-[13px]">Shut Down</span>
            </div>
            <div className="bevel-in bg-white m-3 p-4">
              <p className="font-body text-[13px] mb-4">Are you sure you want to shut down ChetanOS?</p>
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => {
                    playClickAlt();
                    setShowShutdown(false);
                  }}
                  className="btn-3d px-4 py-1 font-grotesk text-[13px] font-bold"
                >
                  Cancel
                </button>
                <button onClick={() => window.location.reload()} className="btn-3d px-4 py-1 font-grotesk text-[13px] font-bold">
                  Restart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
