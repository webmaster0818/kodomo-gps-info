'use client';

import { useState } from 'react';
import Link from 'next/link';

const navItems = [
  { label: 'ランキング', href: '/#ranking' },
  { label: '機種別', href: '/#devices' },
  { label: '目的別', href: '/#purpose' },
  { label: 'お役立ち', href: '/#guide' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="glass-card sticky top-0 z-50 rounded-none border-x-0 border-t-0">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 text-lg font-extrabold text-blue no-underline">
          <span className="text-2xl" aria-hidden="true">📍</span>
          <span className="hidden sm:inline">子供見守りGPS最新情報</span>
          <span className="sm:hidden">見守りGPS情報</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-g700 no-underline hover:text-blue transition-colors"
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
