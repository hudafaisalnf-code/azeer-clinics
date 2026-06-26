# أزير — موقع منصة العيادات الطبية (Azeer)

موقع تعريفي مبني بـ **Next.js (App Router) + TypeScript + Tailwind CSS**، يدعم **العربية والإنجليزية** مع تبديل لغة فوري واتجاه RTL/LTR تلقائي.

الألوان: نيفي `#0D2043` + بنفسجي `#7C64FE` + لافندر `#F2F0FF` + أبيض.

## التشغيل

```bash
npm install
npm run dev
```

ثم افتح http://localhost:3000

## بنية الملفات

```
azeer-website/
├── app/
│   ├── layout.tsx                  ← القالب الرئيسي (الخطوط + النافبار + الفوتر + مزوّد اللغة)
│   ├── globals.css                 ← أنماط Tailwind العامة
│   ├── page.tsx                    ← الصفحة الرئيسية
│   ├── clinics/page.tsx            ← صفحة العيادات
│   ├── features/page.tsx           ← صفحة المميزات
│   ├── pricing/page.tsx            ← صفحة الباقات
│   ├── faq/page.tsx                ← صفحة الأسئلة الشائعة
│   └── components/
│       ├── Navbar.tsx              ← النافبار المشترك (شعار يمين · روابط وسط · CTA + لغة يسار)
│       ├── Footer.tsx              ← الفوتر المشترك
│       ├── LanguageProvider.tsx    ← سياق اللغة (عربي/إنجليزي) + حفظ التفضيل
│       └── ui.tsx                  ← مكونات مشتركة (PageHero · SectionHead · CtaBand)
├── lib/
│   └── translations.ts             ← قاموس النصوص بالعربية والإنجليزية
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
├── postcss.config.js
└── package.json
```

## اللغة

- زر اللغة في النافبار يبدّل بين العربية والإنجليزية.
- يتم حفظ التفضيل في `localStorage` وضبط `dir` و`lang` على عنصر `<html>` تلقائياً.
- كل النصوص في `lib/translations.ts` — عدّلها من مكان واحد.

## الخطوط

- **Inter** (لاتيني) + **Vazirmatn** (عربي) عبر `next/font/google` — متوافقة المقاييس لسطر ثنائي اللغة متناسق.
