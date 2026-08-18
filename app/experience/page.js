import MenuBar from '@/components/MenuBar';
import Sidebar from '@/components/Sidebar';
import Window from '@/components/Window';
import { experience } from '@/lib/data';

export default function ExperiencePage() {
  return (
    <div className="h-screen flex flex-col desktop-bg-platinum">
      <MenuBar />
      <div className="flex-1 flex min-h-0">
        <Sidebar />
        <main className="flex-1 flex flex-col p-2 md:p-6 min-h-0">
          <Window title="Experience" footerLeft={`${experience.length} roles`} footerRight="timeline">
            <div className="p-6">
              <h2 className="font-grotesk font-bold text-[24px] text-[#00006c]">Professional Experience</h2>
              <p className="font-body text-[14px] text-[#454554] mb-6">A timeline of roles and leadership positions.</p>
              <div className="flex flex-col">
                {experience.map((e, idx) => (
                  <div key={e.role} className="relative pl-6 pb-8 border-l-2 border-[#999999] last:border-transparent last:pb-0">
                    <span className="absolute -left-[9px] top-0 w-4 h-4 bg-[#00006c] bevel-out" />
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-0">
                      <h3 className="font-grotesk font-bold text-[16px]">{e.role}</h3>
                      <span className="font-mono text-[12px] text-[#666]">{e.period}</span>
                    </div>
                    <div className="font-grotesk text-[14px] font-medium text-[#454554] mb-2">{e.org}</div>
                    <ul className="font-body text-[14px] leading-5 list-disc pl-4 space-y-1">
                      {e.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </Window>
        </main>
      </div>
    </div>
  );
}
