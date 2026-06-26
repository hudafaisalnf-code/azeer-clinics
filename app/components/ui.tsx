"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLang } from "./LanguageProvider";

export function SectionHead({
  title,
  subtitle,
  align = "center",
}: {
  title: string;
  subtitle?: string;
  align?: "center" | "start";
}) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto max-w-2xl text-center"
          : "max-w-2xl text-start"
      }
    >
      <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg leading-relaxed text-navy/60">{subtitle}</p>
      )}
    </div>
  );
}

export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-lavender px-3.5 py-1.5 text-sm font-semibold text-purple-dark">
      {children}
    </span>
  );
}

/* Dark hero header used on inner pages */
export function PageHero({
  badge,
  title,
  subtitle,
}: {
  badge: string;
  title: string;
  subtitle: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy">
      <div className="pointer-events-none absolute -top-24 start-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-purple/20 blur-3xl" />
      <div className="relative mx-auto max-w-3xl px-5 py-20 text-center lg:py-24">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-sm font-semibold text-purple-light">
          {badge}
        </span>
        <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/65">
          {subtitle}
        </p>
      </div>
    </section>
  );
}

export function CtaBand({
  title,
  subtitle,
  button,
}: {
  title: string;
  subtitle?: string;
  button: string;
}) {
  const { dir } = useLang();
  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight;
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
      <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-purple-dark to-purple px-8 py-16 text-center">
        <div className="pointer-events-none absolute -bottom-20 start-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
        <h2 className="relative text-3xl font-extrabold text-white sm:text-4xl">
          {title}
        </h2>
        {subtitle && (
          <p className="relative mx-auto mt-4 max-w-xl text-lg text-white/85">
            {subtitle}
          </p>
        )}
        <Link
          href="/pricing"
          className="relative mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-base font-semibold text-purple-dark transition-transform hover:bg-lavender active:scale-[0.98]"
        >
          {button}
          <Arrow size={18} />
        </Link>
      </div>
    </section>
  );
}
