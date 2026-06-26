"use client";

import Link from "next/link";
import {
  MessageCircle,
  CalendarCheck,
  BellRing,
  PhoneCall,
  ArrowLeft,
  ArrowRight,
  Check,
  Quote,
  Plug,
  Stethoscope,
  Inbox,
} from "lucide-react";
import { useLang } from "./components/LanguageProvider";
import { SectionHead, CtaBand } from "./components/ui";

const featureIcons = [MessageCircle, CalendarCheck, BellRing, PhoneCall];
const stepIcons = [Plug, Stethoscope, Inbox];

export default function HomePage() {
  const { t, dir } = useLang();
  const h = t.home;
  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight;

  return (
    <>
      {/* ───────── Hero ───────── */}
      <section className="relative overflow-hidden bg-navy">
        {/* soft purple glow */}
        <div className="pointer-events-none absolute -top-24 start-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-purple/25 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-sm font-medium text-purple-light">
              <span className="h-2 w-2 rounded-full bg-purple-light animate-pulse-dot" />
              {h.badge}
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-[56px]">
              {h.heroTitle}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/65">
              {h.heroSubtitle}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 rounded-xl bg-purple px-6 py-3.5 text-base font-semibold text-white shadow-purple transition-[transform,background-color] hover:bg-purple-dark active:scale-[0.98]"
              >
                {h.heroCtaPrimary}
                <Arrow size={18} />
              </Link>
              <Link
                href="/features"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
              >
                {h.heroCtaSecondary}
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-6">
              {[h.heroStat1, h.heroStat2].map((s) => (
                <div key={s} className="flex items-center gap-2 text-sm text-white/70">
                  <Check size={18} className="text-purple-light" />
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* Hero visual — WhatsApp conversation mock */}
          <div className="animate-fade-up [animation-delay:120ms]">
            <ChatMock />
          </div>
        </div>

        {/* trust strip */}
        <div className="relative border-t border-white/10">
          <div className="mx-auto max-w-7xl px-5 py-6 lg:px-8">
            <p className="text-center text-sm text-white/45">{h.trustedBy}</p>
          </div>
        </div>
      </section>

      {/* ───────── Features ───────── */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <SectionHead title={h.featuresTitle} subtitle={h.featuresSubtitle} />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {h.features.map((f, i) => {
            const Icon = featureIcons[i];
            return (
              <div
                key={f.title}
                className="rounded-2xl border border-[#E4E4E4] bg-white p-6 shadow-xs transition-shadow hover:shadow-sm"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-lavender text-purple-dark">
                  <Icon size={24} />
                </span>
                <h3 className="mt-5 text-lg font-bold text-navy">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/60">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ───────── How it works ───────── */}
      <section className="bg-lavender/50">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <SectionHead title={h.stepsTitle} subtitle={h.stepsSubtitle} />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {h.steps.map((s, i) => {
              const Icon = stepIcons[i];
              return (
                <div key={s.title} className="relative rounded-2xl bg-white p-7 shadow-xs">
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy text-white">
                      <Icon size={22} />
                    </span>
                    <span className="text-5xl font-extrabold text-lavender-deep">
                      {String(i + 1)}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-navy">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy/60">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────── Stats ───────── */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
        <h2 className="text-center text-2xl font-extrabold text-navy sm:text-3xl">
          {h.statsTitle}
        </h2>
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-[#E4E4E4] bg-[#E4E4E4] sm:grid-cols-2 lg:grid-cols-4">
          {h.stats.map((s) => (
            <div key={s.label} className="bg-white px-6 py-10 text-center">
              <div className="text-4xl font-extrabold text-purple-dark">{s.value}</div>
              <div className="mt-2 text-sm text-navy/60">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ───────── Testimonial ───────── */}
      <section className="bg-navy">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center lg:py-24">
          <Quote size={40} className="mx-auto text-purple-light" />
          <p className="mt-6 text-2xl font-medium leading-relaxed text-white sm:text-[28px]">
            “{h.testimonial}”
          </p>
          <div className="mt-8">
            <div className="font-bold text-white">{h.testimonialName}</div>
            <div className="text-sm text-white/55">{h.testimonialRole}</div>
          </div>
        </div>
      </section>

      {/* ───────── CTA ───────── */}
      <CtaBand title={h.ctaTitle} subtitle={h.ctaSubtitle} button={h.ctaButton} />
    </>
  );
}

/* WhatsApp-style conversation mock for the hero */
function ChatMock() {
  const { t, lang } = useLang();
  const incoming =
    lang === "ar" ? "السلام عليكم، أبغى أحجز موعد تنظيف أسنان" : "Hi, I'd like to book a teeth-cleaning appointment";
  const reply =
    lang === "ar"
      ? "أهلاً بك 👋 متاح لدينا غداً الثلاثاء ١٠:٣٠ ص أو ١:٠٠ م. أي وقت يناسبك؟"
      : "Welcome 👋 We have Tue 10:30 AM or 1:00 PM available. Which suits you?";
  const confirm = lang === "ar" ? "تم تأكيد موعدك ✅ الثلاثاء ١٠:٣٠ ص" : "Appointment confirmed ✅ Tue 10:30 AM";

  return (
    <div className="mx-auto max-w-sm rounded-[28px] border border-white/10 bg-[#0b1b3a] p-3 shadow-lg">
      {/* header */}
      <div className="flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-purple text-sm font-bold text-white">
          {t.brand[0]}
        </span>
        <div className="flex-1">
          <div className="text-sm font-semibold text-white">{t.brand}</div>
          <div className="flex items-center gap-1.5 text-xs text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {lang === "ar" ? "متصل الآن" : "Online now"}
          </div>
        </div>
        <span className="rounded-md bg-[#25D366]/15 px-2 py-1 text-[11px] font-semibold text-[#25D366]">
          WhatsApp
        </span>
      </div>

      {/* messages */}
      <div className="space-y-2.5 px-2 py-4">
        <Bubble side="start" tone="in">{incoming}</Bubble>
        <Bubble side="end" tone="out">{reply}</Bubble>
        <Bubble side="end" tone="confirm">{confirm}</Bubble>
      </div>
    </div>
  );
}

function Bubble({
  children,
  side,
  tone,
}: {
  children: React.ReactNode;
  side: "start" | "end";
  tone: "in" | "out" | "confirm";
}) {
  const align = side === "start" ? "justify-start" : "justify-end";
  const styles =
    tone === "in"
      ? "bg-white/10 text-white/90"
      : tone === "confirm"
      ? "bg-emerald-500/20 text-emerald-100 border border-emerald-400/30"
      : "bg-purple text-white";
  return (
    <div className={`flex ${align}`}>
      <div className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${styles}`}>
        {children}
      </div>
    </div>
  );
}
