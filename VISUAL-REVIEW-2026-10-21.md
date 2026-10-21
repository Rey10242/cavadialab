# Cavadia Lab — significant visual redesign

## Decisions
- Six home blocks: asymmetrical portrait hero, variable-width solution bento, three-stage interactive process, warm light personal section, compact consultation + four FAQs, closing/contact.
- Instrument Sans handles readable mixed-case headlines; Instrument Serif accents key words. Bebas is no longer the page-wide headline treatment.
- Authentic portrait unchanged. Ads/Data/Web labels and abstract connections describe capabilities, not invented results. No client logos, credentials, case metrics or fake dashboards added.
- Fine-pointer spotlight on solution surfaces, maximum approximately 2-degree portrait tilt, staggered readable-first-paint reveal and process fades. Buttons never tilt. Reduced motion removes displacement/pointer effects; no loops or autoplay.
- Radix tabs provide arrow-key activation and focus. FAQ answers stay mounted in DOM, collapsed for ordinary accordion presentation. Same four-entry source drives home schema and UI.
- Landings retain their useful content and route metadata, with compact mixed-type heroes, uneven module widths, scan-friendly lists and warm process sections.
- COP prices, pack scope, routes, contact channels, GTM and stored-request event semantics preserved. No Cloud/schema/auth/function changes, publishing or migration.

## Files changed this turn
- `src/components/StudioVisuals.tsx` (new shared decorative diagrams, pointer surface and reveal)
- `src/components/sections/HeroPersonal.tsx`
- `src/components/sections/Services.tsx`
- `src/components/sections/Methodology.tsx`
- `src/components/sections/AboutMe.tsx`
- `src/components/sections/FAQ.tsx`
- `src/components/sections/Contact.tsx` (presentation only, submit flow unchanged)
- `src/components/CavadiaNavbar.tsx`
- `src/content/site.ts` (four general FAQs selected from retained source)
- `src/pages/LandingPage.tsx`
- `src/index.css`
- `tests/business-rules.test.ts` (maximum four distinct home FAQs rule; no copy assertions)
- `AGENTS.md`, `roadmap.md`, this report.

## Word comparison
Count whitespace-delimited words in `main`, excluding navigation/footer, with the contact form closed and all FAQ answers included equally.
- Before: **813 words**, including all eight original FAQ answers. Raw initial browser capture had 644 because the single-open accordion closed earlier answers; added the exact six absent answers from retained original source (169 words).
- After: **475 words**, including all four open FAQ answers and current process panel. **338 fewer words / 41.6% reduction**.
- All three process panels together rather than the current panel add approximately 47 words; these are interaction content, not three stacked paragraphs.
- Hero description: 22 words; about paragraph: 52 words. Service benefit sentences are each no more than 15 words.

## Preview checks
- 1440×1800 desktop and 390×844 / 360×844 mobile screenshots captured and inspected; distinct from former uppercase, text-heavy linear columns.
- All ten sitemap routes load with one H1, absolute self canonical, valid JSON-LD and no mobile overflow; internal route links checked against existing sitemap.
- Tabs activate Convertir/Medir via ArrowRight; keyboard Enter follows a bento service link. Mobile menu opens, closes with Escape and returns focus; touch-equivalent click on navigation closes menu.
- Four FAQ answers open together and stay in DOM. Price/route/channel/measurement tests retained; nine Bun tests pass with 17 assertions.
- Form validation and failure state exercised with all hosted insert/notification requests intercepted BEFORE valid submission. One insert attempt fulfilled locally with failure, zero hosted records or emails sent. Retry/error remains visible. Success handling remains unchanged from prior verified implementation; not re-exercised with real data this turn.
- Pointer spotlight opacity and actual portrait transform observed on desktop. Mobile runs do not install tracking. Reduced-motion portrait transform is none and H1 remains visible.
- Main links/buttons measured ≥44×44px; floating contact hidden when contact is in view.
- Page-error listener collected zero errors during main verification. Build/typecheck supplied by preview harness; latest build OK. No manual build/typecheck invoked.
- Axe AA checks on home at all three widths and web landing at mobile reported zero violations. Additional desktop landing check caught low-contrast ordinal numbers; changed those to `text-muted-foreground` and repeated the check.

## Screenshot evidence (sandbox)
`/tmp/browser/redesign/desktop1440.png`, `home1440.png`, `home390.png`, `home360.png`, `bento1440.png`, `bento390.png`, `bento360.png`, `about.png`, `process.png`, `faq1440.png`, `faq390.png`, `faq360.png`, `landing1440.png`, `landing360.png`, `spotlight.png`, `form-blocked.png`, `reduced-motion.png`.
Scripts/results: `/tmp/browser/redesign/verify.py`, `results.log`, `effects.py`, `effects.log`, `before.json`, `after.json`. Temporary evidence is sandbox-local, not a persistent downloadable attachment.

## Real limits / pending
- No publish: live site remains unchanged. No DNS/auth/database changes.
- No framework migration: current per-route SEO is client-rendered, static head remains truthful sitewide fallback.
- External GA4 delivery, email inbox delivery and existing notification function security remain outside this visual-only turn. No new assurance of rankings/leads.
- Automated AA is not full manual accessibility certification; tested home and representative landing layouts, not every page with every assistive technology.
- No physical touch-device run; mobile viewport interactions are browser automation.

Preview: https://id-preview--d98345a8-6d22-4a37-a6b2-3204c95ca2c7.lovable.app