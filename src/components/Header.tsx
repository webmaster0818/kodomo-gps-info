'use client';

import { useState } from 'react';
import Link from 'next/link';
import SiteLogo from '@/components/SiteLogo';

const navItems = [
  { label: 'ランキング', href: '/#ranking' },
  { label: '比較表', href: '/#compare-table' },
  { label: '目的別に選ぶ', href: '/purpose/' },
  { label: '比較記事', href: '/compare/' },
  { label: 'よくある質問', href: '/faq/' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-g200">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="no-underline" aria-label="子供見守りGPS最新情報 トップへ">
          <SiteLogo />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[13px] font-bold text-g700 no-underline hover:text-blue transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="メニューを開く"
        >
          <span className={`block h-0.5 w-6 bg-g700 transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`block h-0.5 w-6 bg-g700 transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-6 bg-g700 transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden border-t border-g200 bg-white px-4 pb-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-semibold text-g700 no-underline border-b border-g100 last:border-b-0 hover:text-blue"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
