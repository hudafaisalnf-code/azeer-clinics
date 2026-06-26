"use client";

import {
  CalendarX2,
  MailQuestion,
  CalendarClock,
  BellRing,
  Clock,
  CalendarCheck,
  MessageSquareText,
  CalendarPlus,
  BellDot,
  HeartHandshake,
} from "lucide-react";
import { useLang } from "../components/LanguageProvider";
import { PageHero, SectionHead, CtaBand } from "../components/ui";

const painIcons = [CalendarX2, MailQuestion, CalendarClock];
const solIcons = [BellRing, Clock, CalendarCheck];
const flowIcons = [MessageSquareText, CalendarPlus, BellDot, HeartHandshake];

type SanityData = Record<string, unknown> | null;

export default function ClinicsView({ sanityData }: { sanityData: SanityData }) {
  const { t } = useLang();
  const c = t.clinics;

  const sd = sanityData as {
    badge?: string;
    title?: string;
    subtitle?: string;
    painTitle?: string;
    pains?: { title: string; desc: string }[];
    solTitle?: string;
    sols?: { title: string; desc: string }[];
    specialtiesTitle?: string;
    specialties?: string[];
    flowTitle?: string;
    flow?: { step: string; desc: string }[];
    ctaTitle?: string;
    ctaSubtitle?: string;
    ctaButton?: string;
  } | null;

  const badge = sd?.badge || c.badge;
  const title = sd?.title || c.title;
  const subtitle = sd?.subtitle || c.subtitle;
  const painTitle = sd?.painTitle || c.painTitle;
  const pains = sd?.pains?.length ? sd.pains : c.pains;
  const solTitle = sd?.solTitle || c.solTitle;
  const sols = sd?.sols?.length ? sd.sols : c.sols;
  const specialtiesTitle = sd?.specialtiesTitle || c.specialtiesTitle;
  const specialties = sd?.specialties?.length ? sd.specialties : c.specialties;
  const flowTitle = sd?.flowTitle || c.flowTitle;
  const flow = sd?.flow?.length ? sd.flow : c.flow;
  const ctaTitle = sd?.ctaTitle || c.ctaTitle;
  const ctaSubtitle = sd?.ctaSubtitle || c.ctaSubtitle;
  const ctaButton = sd?.ctaButton || c.ctaButton;

  return (
    <>
      <PageHero badge={badge} title={title} subtitle={subtitle} />

      {/* Pains */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
        <SectionHead title={painTitle} />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pains.map((p, i) => {
            const Icon = painIcons[i];
            return (
              <div
                key={p.title}
                className="rounded-2xl border border-[#E4E4E4] bg-white p-7 shadow-xs"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-red-50 text-red-500">
                  <Icon size={24} />
                </span>
                <h3 className="mt-5 text-lg font-bold text-navy">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/60">{p.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Solutions */}
      <section className="bg-lavender/50">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
          <SectionHead title={solTitle} />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {sols.map((s, i) => {
              const Icon = solIcons[i];
              return (
                <div key={s.title} className="rounded-2xl bg-white p-7 shadow-xs">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-lavender text-purple-dark">
                    <Icon size={24} />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-navy">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy/60">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Patient flow */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
        <SectionHead title={flowTitle} />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {flow.map((f, i) => {
            const Icon = flowIcons[i];
            return (
              <div key={f.step} className="relative rounded-2xl border border-[#E4E4E4] bg-white p-6 shadow-xs">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-navy text-white">
                    <Icon size={20} />
                  </span>
                  <span className="text-2xl font-extrabold text-lavender-deep">
                    {String(i + 1)}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-bold text-navy">{f.step}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-navy/60">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Specialties */}
      <section className="bg-navy">
        <div className="mx-auto max-w-5xl px-5 py-20 text-center lg:py-24">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            {specialtiesTitle}
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {specialties.map((s) => (
              <span
                key={s}
                className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white/85"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title={ctaTitle} subtitle={ctaSubtitle} button={ctaButton} />
    </>
  );
}
