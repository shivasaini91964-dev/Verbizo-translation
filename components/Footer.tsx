here// Footer: wordmark, tagline, link columns, social icons, dynamic copyright year.

import { Languages, Instagram, Linkedin, Twitter } from "lucide-react";

const columns = [
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Process", href: "#process" },
      { label: "Why Us", href: "#why-us" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Document Translation", href: "#services" },
      { label: "Certified & Legal", href: "#services" },
      { label: "Localization", href: "#services" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-surface-dark text-ink-inverted">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <a href="#top" className="flex items-center gap-2 font-semibold text-lg">
              <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-teal text-white">
                <Languages size={18} strokeWidth={2.25} />
              </span>
              Verbizo
            </a>
            <p className="mt-4 text-sm text-white/60 leading-relaxed max-w-xs">
              Human-reviewed translation across English, Hindi, German, and
              French — for business, legal, and personal needs.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="#" aria-label="Instagram" className="text-white/60 hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-white/60 hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" aria-label="Twitter" className="text-white/60 hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-white mb-4">{col.title}</h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-4 text-sm text-white/40">
          <p>© {new Date().getFullYear()} Verbizo Translations. All rights reserved.</p>
          <p>Made with care, in every language.</p>
        </div>
      </div>
    </footer>
  );
}
