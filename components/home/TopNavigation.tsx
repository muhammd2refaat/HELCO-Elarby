"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Careers", href: "#insights" },
  { label: "About Us", href: "#about" },
];

export function TopNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#30353b] bg-[#0f1419]/95 backdrop-blur">
      <nav className="flex h-20 w-full items-center justify-between px-4 sm:px-8 lg:px-14 2xl:px-20 relative z-50">
        <Link href="/" className="text-2xl font-extrabold tracking-tight text-[#a88c68]">
          HELCO
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-sm font-medium text-[#d1c4b8] transition hover:text-[#e1c19a]"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#about"
          className="hidden rounded-md bg-[#a88c68] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.08em] text-[#39260a] transition hover:bg-[#e1c19a] md:inline-flex"
        >
          Contact Us
        </a>

        <button
          type="button"
          aria-label="Open menu"
          className="text-2xl leading-none text-[#dee3ea] md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute inset-x-0 top-20 border-b border-[#30353b] bg-[#0f1419] px-4 py-8 shadow-xl md:hidden z-40">
          <ul className="flex flex-col gap-6">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="block text-lg font-medium text-[#d1c4b8] transition hover:text-[#e1c19a]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#about"
                className="inline-flex rounded-md bg-[#a88c68] px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.08em] text-[#39260a] transition hover:bg-[#e1c19a]"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
