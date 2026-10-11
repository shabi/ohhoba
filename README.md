# OhHoBa — Digital Museum & Art Lab

An independent digital museum and art lab for unusual forms, experimental language, and ideas still becoming.

## Development

Requirements: Node.js 22+ and pnpm.

```bash
pnpm install
pnpm dev
```

Production validation:

```bash
pnpm build
pnpm start
```

## Site architecture

- `/` — English home (default language)
- `/zh` — Simplified Chinese home
- `/collections` and `/zh/collections` — collection index
- `/collections/[slug]` and `/zh/collections/[slug]` — collection detail pages
- `/experiments` and `/zh/experiments` — interactive art lab index
- `/experiments/shape-study` and `/zh/experiments/shape-study` — interactive visual study
- `/about` and `/zh/about` — product and creative principles
- Unknown URLs use a small bilingual global 404 because English and Chinese have separate root layouts; detail-page misses use the localized route-level 404.

English and Simplified Chinese use separate Next.js root layouts so the server-rendered `<html lang>` is correct for each locale. Shared UI strings live in `app/site-content.ts`; collection content lives in `app/collections-data.ts`. Adding a locale should extend the content maps and route/SEO mapping rather than duplicate page components.

## Brand and themes

- Original Logo: `public/images/icon.svg` (preserve shape and proportions)
- White reverse Logo: `public/images/icon-white.svg` (same path geometry; white fill for dark backgrounds)
- Light canvas: `#FFFFFF`; ink: `#171717`; brand green: `#78B94B`; auxiliary violet: `#7047D8`
- Dark canvas: `#171217`; rose accent: `#A12D60` with brighter accessible states where needed
- User theme preference is stored locally; first visit follows the OS preference. Reduced-motion settings are respected.

## Accessibility and SEO checks

Before publishing, test the primary flows using keyboard only, inspect visible focus, zoom to 200%, check narrow mobile widths, run a screen-reader spot check, verify color contrast in both themes, and confirm the language switch mappings. The production build should be followed by manual checks of metadata, canonical/hreflang, sitemap/robots, image alt text, true 404 behavior, and error recovery.

The 404 and error screens are localized. No blog posts, feed, blog API, or blog-subdomain navigation are part of this site's information architecture.


## Applying the rebuild to the existing Git checkout

Unpack this archive into a separate folder. Create a branch from the agreed baseline (`8cfdc7a`) before applying the source. From the archive folder, run:

```bash
bash scripts/apply-ohhoba-rebuild.sh /path/to/your/ohhoba-checkout
```

The guarded script refuses to modify the same directory, a non-OhHoBa checkout, a dirty working tree, the `main`/`master` branch, or a different baseline. It preserves `.git` and replaces the site's application files intentionally as part of the full rebuild. Review `git diff` before committing.
