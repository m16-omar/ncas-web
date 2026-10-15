// Site content for the Nigerian Cinema Awards (NCAs).
// Sourced from the Original PRD and the foundational team documents in /guide.
// Anything marked PROVISIONAL is awaiting sign-off and should be confirmed before launch.

export type ModalType = 'updates' | 'partner' | 'submission' | 'tickets' | 'press';

export type Pillar = 'Production' | 'Exhibition' | 'Distribution' | 'Promotion';

export type Track =
  | 'Film'
  | 'Performance'
  | 'Craft'
  | 'Promotion'
  | 'Box Office'
  | 'Exhibition & Distribution'
  | 'Special';

export interface Category {
  slug: string;
  title: string;
  track: Track;
  pillar: Pillar;
  criteria: string;
}

export interface Nominee {
  id: string;
  name: string;
  film: string;
  category: string; // Category slug
  year: number;
  status: 'Shortlist' | 'Nominee' | 'Winner';
  image?: string;
  blurb?: string;
}

export interface Milestone {
  period: string;
  title: string;
  description: string;
  status?: 'current';
}

export const SITE = {
  name: 'Nigerian Cinema Awards',
  short: 'NCAs',
  cycle: '2026/27 Pilot Cycle',
  url: 'https://www.nigeriacinemaawards.com',
  domain: 'www.nigeriacinemaawards.com',
  hashtag: '#NCAs2027',
  tagline: "A celebration of Nigeria's finest films made for the cinema.",
  // PROVISIONAL: addresses on the official domain — confirm mailboxes exist before launch.
  emails: {
    general: 'info@nigeriacinemaawards.com',
    entries: 'entries@nigeriacinemaawards.com',
    partnerships: 'partners@nigeriacinemaawards.com',
    tickets: 'tickets@nigeriacinemaawards.com',
    press: 'press@nigeriacinemaawards.com',
  },
  // Paste the awards-management portal link (Award Force, OpenWater, Judgify…) when it is set up.
  // While empty, "Submit" buttons open the submission-alert form instead.
  submissionPortalUrl: '',
  // Judges' portal link; hidden while empty.
  judgesPortalUrl: '',
  // YouTube/Vimeo embed URL for the live broadcast, e.g. https://www.youtube.com/embed/VIDEO_ID
  liveStreamUrl: '',
  // PROVISIONAL: fill in once handles are secured.
  socials: [
    { name: 'Instagram', href: '' },
    { name: 'X', href: '' },
    { name: 'Facebook', href: '' },
    { name: 'TikTok', href: '' },
    { name: 'YouTube', href: '' },
    { name: 'LinkedIn', href: '' },
  ],
};

// Dates that drive the homepage lifecycle (see src/lib/phase.ts). All WAT.
export const DATES = {
  // Team timeline: submissions 1–31 January 2027.
  entriesOpen: '2027-01-01T00:00:00+01:00',
  entriesClose: '2027-01-31T23:59:59+01:00',
  // PROVISIONAL: the ceremony is planned for April 2027; replace with the confirmed date and time.
  ceremony: '2027-04-24T18:00:00+01:00',
  ceremonyLabel: 'April 2027',
  // The site stays in "live" mode for this many hours after the ceremony starts.
  liveHours: 8,
};

export const KEY_DATES = [
  { label: 'Announcement', date: 'Nov 2026' },
  { label: 'Jury revealed', date: 'Dec 2026' },
  { label: 'Entries open', date: '1 Jan 2027' },
  { label: 'Entries close', date: '31 Jan 2027' },
  { label: 'Nominees', date: 'Feb 2027' },
  { label: 'Ceremony', date: 'Apr 2027' },
];

export const STORY = {
  founder: 'Irabor Okosun',
  company: "3ra'fique Media",
  intro:
    'An award to recognise distinction in Nigerian films made primarily for the cinema: films that tell beautiful, impactful stories and meet the highest standards possible within the Nigerian film ecosystem.',
  mission:
    'To recognise and celebrate all those creating for, championing and investing in the whole value chain of Nigerian cinema, from filmmakers to cinema operators and everyone in between.',
  vision:
    "To encourage and strengthen the entire value chain of Nigeria's cinema ecosystem, from the conception of ideas to the screening of films in cinemas, and to secure its survival and growth by acknowledging it and drawing attention to it.",
};

export const PILLARS: { title: Pillar; text: string }[] = [
  { title: 'Production', text: 'Filmmakers, studios, cast and crew who make films for the big screen.' },
  { title: 'Exhibition', text: 'Cinemas, multiplex operators and theatre managers who keep screens running.' },
  { title: 'Distribution', text: 'The networks and rights holders who take films from final cut to cinema.' },
  { title: 'Promotion', text: 'Marketing, PR and campaign teams who bring audiences through the doors.' },
];

export const STATS = [
  { value: 26, label: 'Award categories' },
  { value: 4, label: 'Value-chain pillars' },
  { value: 12, label: 'Month eligibility window' },
  { value: 31, label: 'Day submission window' },
  { value: 3, label: 'Release markets' },
  { value: 1, label: 'Ceremony · April 2027' },
];

export const RIBBON = [
  'Made for the cinema',
  'Production',
  'Exhibition',
  'Distribution',
  'Promotion',
  'Nollywood · Hollywood · Bollywood',
];

// Crafts and disciplines shown in the scrolling strip under the hero.
export const CRAFTS = [
  'Directing', 'Screenwriting', 'Acting', 'Cinematography', 'Editing', 'Sound', 'Original Song',
  'Costume', 'Makeup & Hair', 'Ensemble Cast', 'Trailers', 'Posters', 'Premieres', 'Marketing',
  'Distribution', 'Exhibition', 'Box Office', 'Lifetime Achievement',
];

// The 26 categories from the Original PRD. Criteria text is PROVISIONAL until the
// Academy & Secretariat publishes the official definitions.
export const CATEGORIES: Category[] = [
  { slug: 'best-nollywood-film', title: 'Best Nollywood Film', track: 'Film', pillar: 'Production', criteria: 'The outstanding Nigerian feature film released in Nigerian cinemas.' },
  { slug: 'best-hollywood-film', title: 'Best Hollywood Film', track: 'Film', pillar: 'Production', criteria: 'The outstanding Hollywood release screened in Nigerian cinemas.' },
  { slug: 'best-director', title: 'Best Director', track: 'Film', pillar: 'Production', criteria: 'Overall creative vision, control of craft and storytelling.' },
  { slug: 'best-scene', title: 'Best Scene', track: 'Film', pillar: 'Production', criteria: 'A single scene that stays with audiences long after the credits.' },
  { slug: 'best-actor', title: 'Best Actor', track: 'Performance', pillar: 'Production', criteria: 'A leading male performance of distinction.' },
  { slug: 'best-actress', title: 'Best Actress', track: 'Performance', pillar: 'Production', criteria: 'A leading female performance of distinction.' },
  { slug: 'best-supporting-actor', title: 'Best Supporting Actor', track: 'Performance', pillar: 'Production', criteria: 'A supporting male performance that lifts the whole film.' },
  { slug: 'best-supporting-actress', title: 'Best Supporting Actress', track: 'Performance', pillar: 'Production', criteria: 'A supporting female performance that lifts the whole film.' },
  { slug: 'best-performance', title: 'Best Performance', track: 'Performance', pillar: 'Production', criteria: 'The single most remarkable performance of the year, in any role.' },
  { slug: 'best-cast-ensemble', title: 'Best Cast Ensemble', track: 'Performance', pillar: 'Production', criteria: 'A cast whose combined chemistry carries the film.' },
  { slug: 'best-screenplay', title: 'Best Screenplay / Writing', track: 'Craft', pillar: 'Production', criteria: 'Original or adapted writing for the screen.' },
  { slug: 'best-cinematography', title: 'Best Cinematography', track: 'Craft', pillar: 'Production', criteria: 'Image-making, lighting and camera work.' },
  { slug: 'best-editing', title: 'Best Editing', track: 'Craft', pillar: 'Production', criteria: 'Rhythm, structure and storytelling in the cut.' },
  { slug: 'best-sound', title: 'Best Sound', track: 'Craft', pillar: 'Production', criteria: 'Sound design, recording and mixing.' },
  { slug: 'best-song', title: 'Best Song', track: 'Craft', pillar: 'Production', criteria: 'An original song written for the film.' },
  { slug: 'best-costume', title: 'Best Costume', track: 'Craft', pillar: 'Production', criteria: 'Character and period told through wardrobe.' },
  { slug: 'best-makeup-hair', title: 'Best Makeup / Hairstyle', track: 'Craft', pillar: 'Production', criteria: 'Transformation, period and character work.' },
  { slug: 'best-poster', title: 'Best Poster', track: 'Promotion', pillar: 'Promotion', criteria: 'Key art that sells the film at a glance.' },
  { slug: 'best-trailer', title: 'Best Trailer', track: 'Promotion', pillar: 'Promotion', criteria: 'The trailer that best captures the film and draws audiences in.' },
  { slug: 'best-marketing', title: 'Best Marketing', track: 'Promotion', pillar: 'Promotion', criteria: 'The most effective campaign behind a cinema release.' },
  { slug: 'best-premiere', title: 'Best Premiere', track: 'Promotion', pillar: 'Promotion', criteria: 'The premiere that best launched a film to the public.' },
  { slug: 'best-box-office-nollywood', title: 'Best Box Office (Nollywood)', track: 'Box Office', pillar: 'Exhibition', criteria: 'The highest verified box-office performance by a Nigerian film.' },
  { slug: 'best-box-office-hollywood', title: 'Best Box Office (Hollywood)', track: 'Box Office', pillar: 'Exhibition', criteria: 'The highest verified box-office performance by a Hollywood film in Nigeria.' },
  { slug: 'best-cinema', title: 'Best Cinema', track: 'Exhibition & Distribution', pillar: 'Exhibition', criteria: 'The cinema or multiplex that delivered the best audience experience.' },
  { slug: 'best-film-distributor', title: 'Best Film Distributor', track: 'Exhibition & Distribution', pillar: 'Distribution', criteria: 'Excellence in taking films to Nigerian cinema screens.' },
  { slug: 'lifetime-achievement', title: 'Lifetime Achievement Award', track: 'Special', pillar: 'Production', criteria: 'An enduring contribution to Nigerian cinema. Conferred, not entered.' },
];

export const TRACKS: Track[] = ['Film', 'Performance', 'Craft', 'Promotion', 'Box Office', 'Exhibition & Distribution', 'Special'];

// Rules for entrants, from the Original PRD.
export const SUBMISSION_RULES = [
  'All submitted films must be watermarked, but not in a way that blocks proper viewing.',
  'Films in languages other than English must be properly subtitled.',
  'Films already submitted to, or winners of, other awards are eligible.',
  'Entries must be the work of the person submitting them, or come with a letter giving the owner’s express permission.',
  'The sender pays the cost of transporting physical copies of entries.',
  'Every entry must include its official trailer.',
  'Entries must have been released in the last 12 months.',
  'The NCAs may keep copies of entries in their digital library, but will not screen or use films commercially without the owners’ express permission.',
  'The NCAs may use trailers and excerpts of up to five minutes for promotion on the website and social media.',
  'The decisions of the NCAs jurors are final for both nominations and winners.',
  'Nominated films will be announced at a special event and shared on the website and all NCAs social media accounts.',
  'The emails of every cast and crew member must be submitted with each entry.',
  'Where more than one person worked in a category, one award is presented. Others who want a plaque or statuette must cover its production cost.',
];

export const SUBMISSION_CHECKLIST = [
  'Watermarked screener of the film (.MP4 or .MOV)',
  'Official trailer',
  'English subtitles, if the film is in another language',
  'Proof of theatrical release in the last 12 months',
  'Cast and crew email list',
  'Letter of permission, if you are not the owner',
];

export const NOMINEES: Nominee[] = [
  // Populated when nominees are announced (February 2027).
];

export const PERSONAS = [
  { title: 'Entrants', text: 'Review categories, read the rules and submit films or campaigns.' },
  { title: 'Nominees', text: 'Celebrate your nomination and share it with your audience.' },
  { title: 'Guests', text: 'Buy tickets or corporate tables and plan your night.' },
  { title: 'Sponsors', text: 'Put your brand at the heart of Nigerian cinema.' },
  { title: 'Judges', text: 'Score entries securely against published criteria.' },
  { title: 'Press', text: 'Get releases, media kits and accreditation.' },
];

export const VALUE_CHAIN = [
  { title: 'Filmmakers', text: 'Directors, writers and producers whose work is made for the big screen.' },
  { title: 'Cast & crew', text: 'Actors, cinematographers, editors, sound, costume and makeup teams.' },
  { title: 'Distributors', text: 'The teams who take films from final cut to cinema release.' },
  { title: 'Cinema operators', text: 'Cinemas that keep screens running despite power and funding challenges.' },
  { title: 'Marketers', text: 'The campaigns, trailers, posters and premieres that fill the seats.' },
  { title: 'Audiences', text: 'The people who buy the tickets and keep cinema-going alive.' },
];

export const PROCESS = [
  { step: '01', title: 'Submit', subtitle: 'Official portal', text: 'Entrants submit eligible cinema releases with their trailer, subtitles and cast and crew details.' },
  { step: '02', title: 'Screen & Judge', subtitle: 'Screening Board & jury', text: 'A Screening Board checks eligibility, then an independent jury scores each entry against published criteria.' },
  { step: '03', title: 'Celebrate', subtitle: 'Audited results', text: 'Auditors verify the results and seal the envelopes, which are opened live at the ceremony.' },
];

export const PARTNER_BENEFITS = [
  { title: 'Category partnership', kicker: 'Own a moment of the night', text: 'Attach your brand to a category and the craft it celebrates, from announcement to winner reveal.' },
  { title: 'Broadcast & stage presence', kicker: 'Seen in the room and on screen', text: 'Integration across the live show, stage screens, red carpet and press wall.' },
  { title: 'Digital reach', kicker: 'Across every phase of the cycle', text: 'Co-branded content on NCAs channels before, during and after the ceremony.' },
  { title: 'Industry access', kicker: 'Meet the whole value chain', text: 'Connect with filmmakers, distributors, cinema operators and media across Nigeria.' },
  { title: 'Founding legacy', kicker: 'Be part of the first cycle', text: 'Partners in the pilot cycle are recognised as founders of a lasting institution.' },
];

// Sponsor tiers from the PRD. Fill `sponsors` with { name, logo, url, description } as deals close.
export const SPONSOR_TIERS = [
  { name: 'Title Sponsor', slots: 1, perks: ['Naming rights to the ceremony', 'Lead logo on all broadcast and stage assets', 'Corporate tables and VIP access'] },
  { name: 'Gold Partners', slots: 3, perks: ['Category presentation', 'Stage, red-carpet and press-wall branding', 'Corporate table'] },
  { name: 'Silver Partners', slots: 4, perks: ['Logo on website, screens and print', 'Social media features', 'VIP tickets'] },
  { name: 'Media Partners', slots: 6, perks: ['Accreditation and interview access', 'Co-branded coverage', 'Logo on website and press wall'] },
];

// PROVISIONAL: prices are set by the Project Director; while `price` is empty the card shows "TBA".
export const TICKETS = [
  { name: 'Early Bird', price: '', note: 'Limited allocation', perks: ['General admission', 'Red-carpet viewing area', 'Digital programme'] },
  { name: 'Standard', price: '', note: 'Individual ticket', perks: ['General admission', 'Red-carpet viewing area', 'Digital programme'] },
  { name: 'VIP', price: '', note: 'Individual ticket', perks: ['Reserved premium seating', 'VIP lounge access', 'Red-carpet arrival', 'Gift bag'], featured: true },
  { name: 'Corporate Table', price: '', note: 'Table for 10', perks: ['Ten premium seats at a branded table', 'Recognition in the programme', 'VIP lounge access'] },
];

export const PAYMENT_OPTIONS = ['Paystack', 'Flutterwave', 'Stripe'];

// PROVISIONAL running order for ceremony night. Times will be confirmed with the Event Producer.
export const RUN_OF_SHOW = [
  { time: '17:00', title: 'Red carpet arrivals & press wall' },
  { time: '18:30', title: 'Guests seated' },
  { time: '19:00', title: 'Opening sequence & welcome address' },
  { time: '19:20', title: 'Craft awards' },
  { time: '20:10', title: 'Promotion, exhibition & distribution awards' },
  { time: '20:40', title: 'Intermission' },
  { time: '21:00', title: 'Performance awards' },
  { time: '21:45', title: 'Lifetime Achievement Award' },
  { time: '22:00', title: 'Best Nollywood Film & closing' },
  { time: '22:30', title: 'After-party' },
];

export const EVENT_INFO = [
  { title: 'Venue', text: 'To be announced. Venue layout and seating map will be published with ticket sales.' },
  { title: 'Dress code', text: 'Black tie or formal Nigerian traditional wear. Red-carpet guests should arrive camera-ready.' },
  { title: 'Accommodation', text: 'Partner hotels with discounted rates for guests travelling to the ceremony will be listed here.' },
  { title: 'Accessibility', text: 'Step-free access and reserved seating are available. Tell us your needs when you book.' },
];

export const ROADMAP: Milestone[] = [
  { period: 'Sep – Oct 2026', title: 'Brand & website', description: 'Identity, website, social channels and launch assets.', status: 'current' },
  { period: 'Nov 2026', title: 'Public announcement', description: 'The NCAs are introduced and the pilot cycle is announced.' },
  { period: 'Oct – Dec 2026', title: 'Partner outreach', description: 'Institutional, cinema, media and commercial partners come on board.' },
  { period: 'Dec 2026', title: 'Jury announcement', description: 'Jury members are revealed and the rules are confirmed.' },
  { period: '1 – 31 Jan 2027', title: 'Film submissions', description: 'The submission portal opens for eligible cinema releases.' },
  { period: 'Feb 2027', title: 'Nominees announced', description: 'The jury reviews entries and nominees are announced.' },
  { period: 'Mar 2027', title: 'Voting & invitations', description: 'Voting opens; invitations go to talent, stakeholders and partners.' },
  { period: 'Apr 2027', title: 'Press conference & ceremony', description: 'Press conference 1–2 weeks out, then the ceremony and winners.' },
];

export const PRESS_RELEASES: { date: string; title: string; href: string }[] = [
  // Add releases here, newest first.
];

export const PRESS_ITEMS = [
  { title: 'Media kit', text: 'Logos, brand guidelines and official descriptions.' },
  { title: 'Press releases', text: 'Official announcements and statements.' },
  { title: 'High-res assets', text: 'Approved photography and key art.' },
  { title: 'Accreditation', text: 'Apply for ceremony and press-wall access.' },
];

export const FAQS = [
  {
    q: 'What makes the NCAs different from other awards?',
    a: 'The NCAs are for cinema only. They recognise films made for and released in Nigerian cinemas, and everyone across production, exhibition, distribution and promotion who gets them there.',
  },
  {
    q: 'Which films are eligible?',
    a: 'Films released in Nigerian cinemas in the last 12 months, including Nollywood, Hollywood and Bollywood releases. Films that were entered for, or have won, other awards are still eligible.',
  },
  {
    q: 'When can I submit a film?',
    a: 'Submissions are planned for 1–31 January 2027. Join the mailing list to be told when the portal opens.',
  },
  {
    q: 'How are winners decided?',
    a: 'A Screening Board checks every entry, then an independent jury scores them. Jurors’ decisions on nominations and winners are final.',
  },
  {
    q: 'How do I buy tickets or a corporate table?',
    a: 'Ticket sales open once nominees are announced. Register your interest on the Tickets page and we will contact you first.',
  },
  {
    q: 'How can my organisation partner with the NCAs?',
    a: 'Use the partnership enquiry form or email our partnerships team. Partners in the pilot cycle are recognised as founding partners.',
  },
];
