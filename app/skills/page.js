'use client';

import { useState } from 'react';
import MenuBar from '@/components/MenuBar';
import Sidebar from '@/components/Sidebar';
import Window from '@/components/Window';
import { skillGroups, certifications } from '@/lib/data';

function SkillBar({ pct }) {
  const blocks = Math.round((pct / 100) * 20);
  return (
    <div className="bevel-in bg-white p-1 flex gap-[2px]">
      {Array.from({ length: 20 }).map((_, i) => (
        <span key={i} className={`h-3 w-2 ${i < blocks ? 'bg-[#0000aa]' : 'bg-transparent'}`} />
      ))}
    </div>
  );
}

export default function SkillsPage() {
  const [tab, setTab] = useState(skillGroups[0].id);
  const active = skillGroups.find((g) => g.id === tab);

  return (
    <div className="h-screen flex flex-col desktop-bg-platinum">
      <MenuBar />
      <div className="flex-1 flex min-h-0">
        <Sidebar />
        <main className="flex-1 flex flex-col p-2 md:p-6 min-h-0">
          <Window title="System Properties - Skills" footerLeft="Print..." footerRight="OK">
            <div className="p-4">
              {/* Tabs */}
              <div className="flex">
                {skillGroups.map((g) => (
                  <button
                    key={g.id}
                    onClick={() => setTab(g.id)}
                    className={`px-4 py-1.5 font-grotesk text-[14px] font-medium ${
                      tab === g.id
                        ? 'bevel-out bg-[#cccccc] relative z-10'
                        : 'bg-[#bbbbbb] border-t-2 border-l-2 border-white'
                    }`}
                  >
                    {g.label}
                  </button>
                ))}
              </div>

              <div className="bevel-out bg-[#cccccc] p-4 -mt-[2px] relative z-0">
                <h3 className="font-grotesk font-bold text-[16px] mb-4">{active.heading}</h3>
                <div className="space-y-4">
                  {active.skills.map((s) => (
                    <div key={s.name}>
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2 font-grotesk text-[14px] font-medium">
                          <span className="material-symbols-outlined text-[18px]">{s.icon}</span>
                          {s.name}
                        </div>
                        <span className="font-mono text-[12px] text-[#454554]">{s.level}</span>
                      </div>
                      <SkillBar pct={s.pct} />
                    </div>
                  ))}
                </div>

                <h3 className="font-grotesk font-bold text-[16px] mt-6 mb-3">Certifications</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {certifications.map((c) => (
                    <div key={c.name} className="bevel-in bg-white p-3 flex items-center gap-3">
                      <span className="material-symbols-outlined text-[24px] text-[#00006c]">{c.icon}</span>
                      <div>
                        <div className="font-grotesk font-bold text-[13px]">{c.name}</div>
                        <div className="font-mono text-[11px] text-[#666]">{c.meta}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Window>
        </main>
      </div>
    </div>
  );
}
