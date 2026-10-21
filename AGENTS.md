# Architecture and review rules
- Keep shared services, prices and homepage FAQs in `src/content/site.ts`; UI and schema consume the same source to prevent contradictory claims.
- Metadata is owned per route by `Seo`; static head is a truthful sitewide social fallback, with replaceable Helmet tags and no static canonical.
- Keep one identity graph with stable Person/business/WebSite IDs; route graphs reference these IDs rather than inventing providers.
- GTM stays in the static entry document once; contact clicks are engagement, and only a successful stored form submission emits form success.
- Keep the Classic stack for this change; SSR requires the official gated in-place TanStack migration and a separate preflight, not ad-hoc prerendering.
- Keep Bun business-rule and measurement tests under `tests/`, outside the browser-only application typecheck; run them with `bun run test`.
- Keep shared decorative diagrams, pointer surfaces and readable-first-paint reveals in `StudioVisuals`; effects never gate content and pointer tracking is fine-pointer only with reduced-motion opt-out.
- Use Radix tabs/accordions for process and FAQs; homepage FAQ UI and schema consume the same four-entry selection while service-specific detail remains on public landings.
- Express the studio visual system through semantic global CSS tokens shared by home and landings; use mixed sans/serif headings rather than uppercase display type for all content.