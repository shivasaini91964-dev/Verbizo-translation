"use client";

// Sticky glassmorphism navbar. Swap "Verbizo" wordmark and nav links here.
// Mobile: hamburger toggles a slide-down glass panel.

import { useState } from "react";
import { Menu, X, Languages } from "lucide-react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#languages", label: "Languages" },
  { href: "#process", label: "Process" },
  { href: "#pricing", label: "Pricing" },
  { href: "#why-us", label: "Why Us" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-white/80 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a
            href="#top"
            className="flex items-center gap-2 font-semibold text-lg tracking-tight text-ink"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-teal text-white">
              <Languages size={18} strokeWidth={2.25} />
            </span>
            Verbizo
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-ink-muted hover:text-ink transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a
              href="#contact"
              className="rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-accent-hover hover:scale-[1.02] active:scale-[0.98]"
            >
              Get a Free Quote
            </a>
          </div>

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="md:hidden flex h-10 w-10 items-center justify-center rounded-full text-ink focus-visible:ring-2 focus-visible:ring-accent"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden backdrop-blur-xl bg-white/95 border-b border-black/5 px-6 pb-6 pt-2">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-ink py-1"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-accent px-6 py-3 text-center text-sm font-medium text-white"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

