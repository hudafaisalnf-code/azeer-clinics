"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useLang } from "./LanguageProvider";

/* Azeer logo mark — navy rounded square with purple speech/voice glyph */
function Logo() {
  const { t } = useLang();
  return (
    <Link href="/" className="flex items-center gap-2.5 shrink-0" aria-label={t.brand}>
      <span className="grid h-9 w-9 place-items-center rounded-[10px] bg-navy">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M5 6.5C5 5.67 5.67 5 6.5 5h11c.83 0 1.5.67 1.5 1.5v8c0 .83-.67 1.5-1.5 1.5H10l-3.6 3a.6.6 0 0 1-1-.46V16H6.5C5.67 16 5 15.33 5 14.5v-8Z"
            fill="#7C64FE"
          />
          <circle cx="9.5" cy="10.5" r="1.1" fill="#fff" />
          <circle cx="12.5" cy="10.5" r="1.1" fill="#fff" />
          <circle cx="15.5" cy="10.5" r="1.1" fill="#fff" />
        </svg>
      </span>
      <span className="text-xl font-extrabold tracking-tight text-navy">
        {t.brand}
      </span>
    </Link>
  );
}

export default function Navbar() {
  const { t, toggleLang, lang } = useLang();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: t.nav.home },
    { href: "/clinics", label: t.nav.clinics },
    { href: "/features", label: t.nav.features },
    { href: "/pricing", label: t.nav.pricing },
    { href: "/faq", label: t.nav.faq },
  ];

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-[#E4E4E4] bg-white/90 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 lg:px-8">
        {/* Logo — start (right in RTL) */}
        <Logo />

        {/* Center links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`rounded-lg px-3.5 py-2 text-[15px] font-medium transition-colors ${
                  isActive(l.href)
                    ? "bg-lavender text-purple-dark"
                    : "text-navy/70 hover:bg-lavender/60 hover:text-navy"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* End actions (left in RTL): lang toggle + CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 rounded-lg border border-[#E4E4E4] px-3 py-2 text-sm font-semibold text-navy transition-colors hover:bg-lavender/60"
            aria-label={lang === "ar" ? "Switch to English" : "التبديل إلى العربية"}
          >
            <Globe size={16} className="text-navy/60" />
            {t.nav.langLabel}
          </button>

          <Link
            href="/pricing"
            className="hidden rounded-lg bg-purple px-4 py-2.5 text-sm font-semibold text-white shadow-purple transition-[transform,background-color] hover:bg-purple-dark active:scale-[0.98] sm:inline-flex"
          >
            {t.nav.cta}
          </Link>

          <button
            className="grid h-10 w-10 place-items-center rounded-lg text-navy lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-[#E4E4E4] bg-white px-5 py-3 lg:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg px-3.5 py-2.5 text-[15px] font-medium ${
                    isActive(l.href)
                      ? "bg-lavender text-purple-dark"
                      : "text-navy/80 hover:bg-lavender/60"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-1">
              <Link
                href="/pricing"
                onClick={() => setOpen(false)}
                className="block rounded-lg bg-purple px-4 py-3 text-center text-sm font-semibold text-white"
              >
                {t.nav.cta}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
