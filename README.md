# Nigerian Cinema Awards — Website

Institutional website for the Nigerian Cinema Awards (NCAs), 2026/27 pilot cycle.
Built with React, TypeScript and Vite.

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # type-check + production build to dist/
npm run lint
```

## Editing content

All copy lives in [`src/data.ts`](src/data.ts): categories, roadmap, FAQs, contact emails,
social links and the countdown date. Items marked `PROVISIONAL` need sign-off before launch:

- Contact mailboxes on `nigeriacinemaawards.com`
- Social media handles (links show as "coming soon" until filled in)
- Final award categories and definitions
- Submission window / countdown date

## Brand

Black and gold foundation with a Nigerian green accent (`src/index.css` `:root` tokens).
Display type: Cormorant Garamond; body: Manrope. The emblem in `src/components/Logo.tsx`
and `public/favicon.svg` is a placeholder until the final NCAs logo is approved.

## Forms

There is no backend yet. The mailing-list, partnership and submission-alert forms open the
visitor's email client with their details prefilled. Swap `handleSubmit` in
`src/components/EnquiryModal.tsx` for a form service or API when one is chosen.
