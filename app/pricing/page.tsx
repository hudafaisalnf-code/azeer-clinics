"use client";

import Link from "next/link";
import { useState } from "react";
import { Check, Star, ArrowLeft, ArrowRight } from "lucide-react";
import { useLang } from "../components/LanguageProvider";
import { PageHero } from "../components/ui";

export default function PricingPage() {
  const { t, lang, dir } = useLang();
  const p = t.pricing;
  const [yearly, setYearly] = useState(false);
  const currency = lang === "ar" ? "ريال" : "SAR";
  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight;

  const priceFor = (raw: string) => {
    const n = parseInt(raw.replace(/,/g, ""), 10);
    if (Number.isNaN(n)) return null;
    const monthly = yearly ? Math.round((n * 10) / 12) : n;
    return monthly.toLocaleString(lang === "ar" ? "ar-EG" : "en-US");
  };

  return (
    <>
      <PageHero badge={p.badge} title={p.title} subtitle={p.subtitle} />

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        {/* Billing toggle */}
        <div className="flex items-center justify-center">
          <div className="inline-flex items-center gap-1 rounded-xl border border-[#E4E4E4] bg-white p-1 shadow-xs">
            <button
              onClick={() => setYearly(false)}
              className={`rounded-lg px-5 py-2 text-sm font-semibold transition-colors ${
                !yearly ? "bg-navy text-white" : "text-navy/60 hover:text-navy"
              }`}
            >
              {p.monthly}
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`flex items-center gap-2 rounded-lg px-5 py-2 text-sm font-semibold transition-colors ${
                yearly ? "bg-navy text-white" : "text-navy/60 hover:text-navy"
              }`}
            >
              {p.yearly}
              <span className="rounded-full bg-purple px-2 py-0.5 text-[11px] font-bold text-white">
                {p.yearlyNote}
              </span>
            </button>
          </div>
        </div>

        {/* Plans */}
        <div className="mt-12 grid gap-6 lg:grid-cols-4">
          {p.plans.map((plan, i) => {
            const popular = i === 1;
            const price = priceFor(plan.price);
            return (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-2xl border bg-white p-7 shadow-xs ${
                  popular ? "border-purple ring-2 ring-purple/30" : "border-[#E4E4E4]"
                }`}
              >
                {popular && (
                  <span className="absolute -top-3 start-7 inline-flex items-center gap-1 rounded-full bg-purple px-3 py-1 text-xs font-bold text-white">
                    <Star size={12} className="fill-white" />
                    {p.popular}
                  </span>
                )}
                <h3 className="text-lg font-extrabold text-navy">{plan.name}</h3>
                <p className="mt-2 min-h-[40px] text-sm leading-relaxed text-navy/55">
                  {plan.desc}
                </p>

                <div className="mt-5 flex items-end gap-1.5">
                  {price ? (
                    <>
                      <span className="text-4xl font-extrabold text-navy">{price}</span>
                      <span className="pb-1 text-sm text-navy/55">
                        {currency} {p.perMonth}
                      </span>
                    </>
                  ) : (
                    <span className="text-2xl font-extrabold text-navy">{plan.price}</span>
                  )}
                </div>

                <Link
                  href="#"
                  className={`mt-6 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-[transform,background-color] active:scale-[0.98] ${
                    popular
                      ? "bg-purple text-white shadow-purple hover:bg-purple-dark"
                      : "border border-navy/15 text-navy hover:bg-lavender/60"
                  }`}
                >
                  {plan.cta}
                  <Arrow size={16} />
                </Link>

                <ul className="mt-7 flex flex-col gap-3 border-t border-[#E4E4E4] pt-6">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5 text-sm text-navy/75">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-lavender text-purple-dark">
                        <Check size={12} />
                      </span>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* FAQ hint */}
        <div className="mt-12 text-center text-navy/60">
          {p.faqHint}{" "}
          <Link href="/faq" className="font-semibold text-purple-dark underline-offset-4 hover:underline">
            {p.faqHintLink}
          </Link>
        </div>
      </section>
    </>
  );
}
