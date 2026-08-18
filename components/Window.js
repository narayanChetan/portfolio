'use client';

import Link from 'next/link';

export default function Window({ title, children, footerLeft, footerRight, closeHref = '/' }) {
  return (
    <div className="flex-1 flex flex-col bevel-out bg-[#cccccc] min-h-0">
      {/* Title bar */}
      <div className="relative h-6 flex items-center justify-center bevel-out border-b border-black shrink-0">
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-2 mx-8 title-lines opacity-40" />
        <Link
          href={closeHref}
          aria-label="Close window"
          className="absolute left-1.5 w-3.5 h-3.5 btn-3d"
        />
        <span className="relative bg-[#cccccc] px-2 font-grotesk font-bold text-[13px]">{title}</span>
        <span className="absolute right-1.5 w-3.5 h-3.5 btn-3d" />
      </div>

      {/* Content */}
      <div className="flex-1 min-h-0 overflow-y-auto bevel-in bg-white m-2">{children}</div>

      {/* Status bar */}
      <div className="h-6 flex items-center justify-between px-3 font-mono text-[11px] text-[#454545] shrink-0">
        <span>{footerLeft}</span>
        <span>{footerRight}</span>
      </div>
    </div>
  );
}
