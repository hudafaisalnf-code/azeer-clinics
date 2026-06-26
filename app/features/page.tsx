"use client";

import {
  Inbox,
  CalendarCheck,
  BellRing,
  PhoneCall,
  Bot,
  Megaphone,
  BarChart3,
  Users,
  Languages,
  Check,
} from "lucide-react";
import { useLang } from "../components/LanguageProvider";
import { PageHero, CtaBand } from "../components/ui";

const icons = [
  Inbox,
  CalendarCheck,
  BellRing,
  PhoneCall,
  Bot,
  Megaphone,
  BarChart3,
  Users,
  Languages,
];

export default function FeaturesPage() {
  const { t } = useLang();
  const f = t.features;

  return (
    <>
      <PageHero badge={f.badge} title={f.title} subtitle={f.subtitle} />

      {/* Feature grid */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {f.list.map((item, i) => {
            const Icon = icons[i];
            return (
              <div
                key={item.title}
                className="rounded-2xl border border-[#E4E4E4] bg-white p-7 shadow-xs transition-shadow hover:shadow-sm"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-lavender text-purple-dark">
                  <Icon size={24} />
                </span>
                <h3 className="mt-5 text-lg font-bold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/60">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Arabic-first highlight */}
      <section className="bg-lavender/50">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
              {f.highlightTitle}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-navy/65">
              {f.highlightDesc}
            </p>
            <ul className="mt-8 flex flex-col gap-3.5">
              {f.highlightPoints.map((p) => (
                <li key={p} className="flex items-center gap-3 text-navy">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-purple text-white">
                    <Check size={14} />
                  </span>
                  <span className="font-medium">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* bilingual visual */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-navy p-6 text-white shadow-md" dir="rtl">
              <div className="text-xs font-semibold text-purple-light">العربية</div>
              <div className="mt-3 text-lg font-bold">احجز موعدك بسهولة</div>
              <p className="mt-2 text-sm leading-relaxed text-white/65">
                واجهة كاملة من اليمين لليسار لمرضاك.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-xs" dir="ltr">
              <div className="text-xs font-semibold text-purple-dark">English</div>
              <div className="mt-3 text-lg font-bold text-navy">Book your visit easily</div>
              <p className="mt-2 text-sm leading-relaxed text-navy/60">
                A complete left-to-right experience for your patients.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand title={f.ctaTitle} button={f.ctaButton} />
    </>
  );
}
