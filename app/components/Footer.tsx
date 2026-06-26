"use client";

import Link from "next/link";
import { useLang } from "./LanguageProvider";

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  const cols = [
    {
      title: t.footer.product,
      links: [
        { label: t.footer.links.features, href: "/features" },
        { label: t.footer.links.pricing, href: "/pricing" },
        { label: t.footer.links.clinics, href: "/clinics" },
        { label: t.footer.links.faq, href: "/faq" },
      ],
    },
    {
      title: t.footer.company,
      links: [
        { label: t.footer.links.about, href: "#" },
        { label: t.footer.links.contact, href: "#" },
        { label: t.footer.links.careers, href: "#" },
      ],
    },
    {
      title: t.footer.legal,
      links: [
        { label: t.footer.links.privacy, href: "#" },
        { label: t.footer.links.terms, href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-5 lg:px-8">
        {/* Brand block */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-[10px] bg-white/10">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M5 6.5C5 5.67 5.67 5 6.5 5h11c.83 0 1.5.67 1.5 1.5v8c0 .83-.67 1.5-1.5 1.5H10l-3.6 3a.6.6 0 0 1-1-.46V16H6.5C5.67 16 5 15.33 5 14.5v-8Z"
                  fill="#9B85FF"
                />
                <circle cx="9.5" cy="10.5" r="1.1" fill="#fff" />
                <circle cx="12.5" cy="10.5" r="1.1" fill="#fff" />
                <circle cx="15.5" cy="10.5" r="1.1" fill="#fff" />
              </svg>
            </span>
            <span className="text-xl font-extrabold">{t.brand}</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
            {t.footer.tagline}
          </p>
        </div>

        {cols.map((col) => (
          <div key={col.title}>
            <h4 className="text-sm font-semibold text-white/90">{col.title}</h4>
            <ul className="mt-4 flex flex-col gap-3">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/55 transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-5 text-sm text-white/45 lg:px-8">
          © {year} {t.brand}. {t.footer.rights}
        </div>
      </div>
    </footer>
  );
}
