# Verbizo Translations — Website

A premium, modern & colorful marketing site for a translation business
covering English ↔ Hindi, English ↔ German, and English ↔ French.

Built with Next.js (App Router) + TypeScript + Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000 to preview.

## Build for production

```bash
npm run build
npm run start
```

## Deploy

**Vercel (recommended for Next.js)**
1. Push this project to a GitHub repo.
2. Go to https://vercel.com/new and import the repo.
3. Deploy — no configuration needed.

**Netlify**
1. Push to GitHub, connect the repo at https://app.netlify.com.
2. Make sure the "Next.js Runtime" build plugin is enabled (Netlify auto-detects this for Next.js projects).

## Before you go live — things to customize

- **Real business name / logo**: "Verbizo" is a placeholder brand name — swap it in `components/Navbar.tsx`, `components/Footer.tsx`, and `app/layout.tsx` if you already have a name.
- **Domain**: replace `verbizo.example.com` in `app/layout.tsx`, `app/sitemap.ts`, and `app/robots.ts` with your real domain once you have one.
- **Contact form**: already wired up to Formspree (form ID `xeeypanb`) in `components/Contact.tsx` — submissions arrive at whatever email is registered on that Formspree account. Log into [formspree.io](https://formspree.io) to view/manage submissions or change the destination email.
- **Contact details**: update the placeholder email, phone, and address in `components/Contact.tsx`.
- **Pricing**: rate is set to $5 per 500 words in `components/Pricing.tsx` — update if it ever changes.
- **Testimonials**: no real reviews yet, so a "Why Choose Us" section (`components/WhyUs.tsx`) is used instead — swap it for real testimonials once you have a few genuine client quotes. Avoid fabricated reviews; that's misleading to visitors.
- **Stats**: the "1,200+ documents translated" stat in `components/About.tsx` is a placeholder — update once you have real numbers, or remove it.

## Customize

- Colors/fonts: `tailwind.config.ts` (brand colors: `accent` = indigo, `coral`, `teal`)
- Page content: components in `/components`, one file per section
- Section order: `app/page.tsx`
- SEO metadata: `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts`
- Favicon/OG image: `app/icon.svg` (gradient "L" mark) and `app/opengraph-image.tsx` (auto-generated social preview card) — Next.js picks these up automatically, no manual upload needed

## Project structure

```
verbizo/
├── app/
│   ├── layout.tsx      # SEO metadata + JSON-LD structured data
│   ├── page.tsx        # Homepage — composes all sections
│   ├── globals.css
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── Languages.tsx   # Language-pair showcase (EN-HI/DE/FR)
│   ├── About.tsx
│   ├── Process.tsx     # 4-step "how it works"
│   ├── Pricing.tsx
│   ├── WhyUs.tsx        # Trust points, used in place of testimonials (no clients yet)
│   ├── FAQ.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── package.json
├── tailwind.config.ts
└── ...
```
