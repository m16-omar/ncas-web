# Nigerian Cinema Awards — Website

Digital platform for the Nigerian Cinema Awards (NCAs), built from the Original PRD.
React 19 + TypeScript + Vite, with React Router for pages.

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # type-check + production build to dist/
npm run lint
```

## Pages

| Route | PRD section |
| --- | --- |
| `/` | Homepage: phase-aware hero, countdown, categories, sponsors, key dates, highlights |
| `/about` | About Us: story, mission, vision, four pillars |
| `/categories` | Categories & Guidelines: 26 categories with live search and track/pillar filters |
| `/submit` | Submit a Film: rules and checklist; links to the awards portal when configured |
| `/nominees`, `/nominees/:id` | Nominees & Winners gallery with year/status/track filters and share buttons |
| `/tickets` | Tickets & Tables: Early Bird, Standard, VIP, Corporate Table (10) |
| `/event` | Event Details & Agenda: venue, dress code, accommodation, run of show, FAQ |
| `/sponsors` | Title, Gold, Silver and Media tiers |
| `/press` | Media & Press: kit, releases, accreditation, archive |
| `/live` | Live broadcast hub: stream embed, digital programme, social feed |

The hosting must serve `index.html` for every route. `vercel.json` (Vercel) and
`public/_redirects` (Netlify) already do this.

## Campaign lifecycle

The site switches automatically between the PRD's phases, based on `DATES` in `src/data.ts`:

`launch` (before 1 Jan 2027) → `entries` (1–31 Jan) → `shortlist` (until the ceremony) → `live` (ceremony night) → `winners`

The hero headline, buttons, countdown and floating call to action change with each phase. To preview a phase,
add `?phase=entries` (or `shortlist`, `live`, `winners`) to any URL. Add `?theme=light` to preview light mode.

## Editing content

All content lives in [`src/data.ts`](src/data.ts). Before launch, confirm or fill in:

- `DATES.ceremony`: the exact ceremony date and time (currently a placeholder in April 2027)
- `SITE.emails`: mailboxes on `nigeriacinemaawards.com`
- `SITE.socials`: social handles (shown as "coming soon" until filled in)
- `SITE.submissionPortalUrl`, `SITE.judgesPortalUrl`: Award Force / OpenWater / Judgify links
- `SITE.liveStreamUrl`: YouTube or Vimeo embed URL for ceremony night
- `TICKETS[].price`: shows "TBA" while empty
- `CATEGORIES[].criteria`: provisional one-line definitions
- `NOMINEES`, `PRESS_RELEASES`: add entries as they are announced

## Not built yet (needs a backend or third-party service)

- **Payments:** Paystack / Flutterwave / Stripe checkout. Ticket buttons currently send an enquiry.
- **Forms:** enquiry forms open the visitor's email app with details prefilled. Swap `handleSubmit` in
  `src/components/EnquiryModal.tsx` for a form service or API.
- **CMS:** content is edited in `src/data.ts`. A headless CMS would let non-technical admins manage it.
- **Per-nominee share cards:** page titles and Open Graph tags update in the browser, but social crawlers read
  `index.html` only. Branded preview cards per nominee need prerendering or server rendering.
- **Live social feed:** the `/live` page has a placeholder for a hashtag aggregator embed.

## Brand

Near-black with a mint-to-gold gradient and Nigerian green (`:root` tokens in `src/index.css`), with dark and light
modes. Fonts: Unbounded (titles), Montserrat (UI), Poppins (body). The emblem in `src/components/Logo.tsx` and
`public/favicon.svg` is a placeholder until the final NCAs logo is approved.
