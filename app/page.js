'use client';

import { useState } from 'react';
import Link from 'next/link';
import MenuBar from '@/components/MenuBar';
import { desktopFolders, profile } from '@/lib/data';
import { playStartup } from '@/lib/sound';

export default function DesktopHome() {
  const [booted, setBooted] = useState(false);
  const [showDialog, setShowDialog] = useState(true);

  if (!booted) {
    return (
      <div className="h-screen flex flex-col desktop-bg-platinum">
        <MenuBar />
        <button
          onClick={() => {
            playStartup();
            setBooted(true);
          }}
          className="flex-1 flex flex-col items-center justify-center gap-4 text-white"
        >
          <span className="material-symbols-outlined text-[64px]">power_settings_new</span>
          <span className="font-grotesk font-bold text-[18px] bg-black/30 px-3 py-1">Click to power on</span>
        </button>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col desktop-bg-platinum">
      <MenuBar />
      <div className="relative flex-1 overflow-hidden">
        {/* Desktop icons */}
        <div className="absolute top-4 right-4 flex flex-col gap-6 items-center">
          {desktopFolders.map((f) => (
            <Link key={f.key} href={f.href} className="flex flex-col items-center gap-1 w-20 group">
              <span className="material-symbols-outlined text-[40px] text-[#e6c34a] drop-shadow-[1px_1px_0_rgba(0,0,0,0.5)] group-hover:opacity-80">
                {f.icon}
              </span>
              <span className="font-mono text-[12px] text-white px-1 bg-black/30 group-hover:bg-[#00006c]">
                {f.label}
              </span>
            </Link>
          ))}
        </div>

        {!showDialog && (
          <button
            onClick={() => setShowDialog(true)}
            className="absolute bottom-4 left-4 btn-3d px-3 py-1.5 font-grotesk text-[13px] font-bold"
          >
            Show Welcome
          </button>
        )}

        {/* Hello World dialog */}
        {showDialog && (
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="w-full max-w-xl bevel-out bg-[#cccccc] flex flex-col">
              <div className="relative h-6 flex items-center justify-center bevel-out border-b border-black">
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-2 mx-8 title-lines opacity-40" />
                <span className="relative bg-[#cccccc] px-2 font-grotesk font-bold text-[13px]">
                  {profile.name}
                </span>
              </div>
              <div className="bevel-in bg-white m-3 p-6">
                <h1 className="font-grotesk font-bold text-[24px] text-[#00006c] mb-4">Hello, World.</h1>
                <p className="font-body text-[14px] leading-5 mb-3">{profile.tagline}</p>
                <p className="font-body text-[14px] leading-5">{profile.intro}</p>
                <div className="flex justify-end gap-2 mt-6">
                  <button onClick={() => setShowDialog(false)} className="btn-3d px-4 py-1 font-grotesk text-[13px] font-bold">
                    Cancel
                  </button>
                  <Link href="/projects" className="btn-3d px-4 py-1 font-grotesk text-[13px] font-bold">
                    OK
                  </Link>
                </div>
              </div>
              <div className="h-6 flex items-center justify-between px-3 font-mono text-[11px] text-[#454545]">
                <span>1 item</span>
                <span>14.4 MB in disk</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
