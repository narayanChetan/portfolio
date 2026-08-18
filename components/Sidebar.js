'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navItems, profile } from '@/lib/data';

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex w-60 shrink-0 flex-col bg-[#f4f3f3] border-r-2 border-[#999999] p-4">
      <div className="flex flex-col items-center text-center mb-6">
        <div className="w-16 h-16 flex items-center justify-center bg-[#e2e2e2] bevel-in mb-3">
          <span className="material-symbols-outlined text-[36px] text-[#454554]">person</span>
        </div>
        <div className="font-grotesk font-bold text-[18px] leading-tight">{profile.systemLabel}</div>
        <div className="font-mono text-[12px] text-[#666]">{profile.systemSub}</div>
      </div>
      <nav className="flex flex-col gap-1">
        {navItems.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.key}
              href={item.href}
              className={`flex items-center gap-2 px-2 py-1.5 font-grotesk text-[14px] font-medium ${
                active ? 'bg-[#00006c] text-white' : 'text-[#1a1c1c] hover:bg-[#e2e2e2]'
              }`}
            >
              <span className="material-symbols-outlined text-[18px] leading-none">{item.icon}</span>
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="mt-auto pt-4">
        <Link href="/guestbook" className="btn-3d block text-center px-3 py-2 font-grotesk text-[13px] font-bold">
          Contact Me
        </Link>
      </div>
    </aside>
  );
}
