"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useLang } from "../components/LanguageProvider";
import { PageHero, CtaBand } from "../components/ui";

type SanityData = Record<string, unknown> | null;

export default function FaqView({ sanityData }: { sanityData: SanityData }) {
  const { t } = useLang();
  const f = t.faq;
  const [open, setOpen] = useState<number | null>(0);

  const sd = sanityData as {
    badge?: string;
    title?: string;
    subtitle?: string;
    items?: { q: string; a: string }[];
    ctaTitle?: string;
    ctaSubtitle?: string;
    ctaButton?: string;
  } | null;

  const badge = sd?.badge || f.badge;
  const title = sd?.title || f.title;
  const subtitle = sd?.subtitle || f.subtitle;
  const items = sd?.items?.length ? sd.items : f.items;
  const ctaTitle = sd?.ctaTitle || f.ctaTitle;
  const ctaSubtitle = sd?.ctaSubtitle || f.ctaSubtitle;
  const ctaButton = sd?.ctaButton || f.ctaButton;

  return (
    <>
      <PageHero badge={badge} title={title} subtitle={subtitle} />

      <section className="mx-auto max-w-3xl px-5 py-16 lg:py-20">
        <div className="flex flex-col gap-3">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className={`overflow-hidden rounded-2xl border bg-white transition-colors ${
                  isOpen ? "border-purple/40 shadow-xs" : "border-[#E4E4E4]"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-start"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-bold text-navy">{item.q}</span>
                  <span
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-colors ${
                      isOpen ? "bg-purple text-white" : "bg-lavender text-purple-dark"
                    }`}
                  >
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-200 ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-[15px] leading-relaxed text-navy/65">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CtaBand title={ctaTitle} subtitle={ctaSubtitle} button={ctaButton} />
    </>
  );
}
