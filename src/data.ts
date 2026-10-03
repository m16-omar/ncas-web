// Site content for the Nigerian Cinema Awards (NCAs).
// Sourced from the foundational team documents in /guide. Anything marked
// PROVISIONAL is awaiting sign-off and should be confirmed before launch.

export type ModalType = 'updates' | 'partner' | 'submission';

export interface Category {
  title: string;
  group: 'Film' | 'Performance' | 'Craft' | 'Industry' | 'Special';
  description: string;
}

export interface Phase {
  period: string;
  title: string;
  description: string;
  status?: 'current' | 'upcoming';
}

export const SITE = {
  name: 'Nigerian Cinema Awards',
  short: 'NCAs',
  cycle: '2026/27 Pilot Cycle',
  domain: 'www.nigeriacinemaawards.com',
  tagline: 'Recognising the people, crafts and businesses that make theatrical cinema possible in Nigeria.',
  // PROVISIONAL: submission window per the project timeline (1–31 January 2027, WAT).
  countdownTarget: '2027-01-01T00:00:00+01:00',
  countdownLabel: 'Film submissions open',
  ceremony: 'April 2027',
  // PROVISIONAL: addresses on the official domain — confirm mailboxes exist before launch.
  emails: {
    general: 'info@nigeriacinemaawards.com',
    partnerships: 'partners@nigeriacinemaawards.com',
    press: 'press@nigeriacinemaawards.com',
  },
  // PROVISIONAL: fill in once handles are secured (see Launch Blueprint §7).
  socials: [
    { name: 'Instagram', href: '' },
    { name: 'X', href: '' },
    { name: 'Facebook', href: '' },
    { name: 'TikTok', href: '' },
    { name: 'YouTube', href: '' },
    { name: 'LinkedIn', href: '' },
  ],
};

export const RIBBON = [
  'Cinema-specific',
  'Institutional, not event-based',
  'Nigerian in origin',
  'Internationally credible',
  'Auditable jury scoring',
  'Built for decades',
];

export const PILLARS = [
  {
    title: 'Recognise',
    text: 'Honour the practitioners, crafts and businesses behind every theatrical release.',
  },
  {
    title: 'Document',
    text: 'Keep a permanent archive of nominees, winners and the films that shaped each year.',
  },
  {
    title: 'Celebrate',
    text: 'Bring audiences, critics and the industry together around Nigerian cinema.',
  },
  {
    title: 'Strengthen',
    text: 'Support visibility, capacity building, data and dialogue across the cinema value chain.',
  },
];

export const STATS = [
  { value: '2026/27', label: 'Pilot cycle' },
  { value: '31', label: 'Day submission window' },
  { value: '3', label: 'Layers of verification' },
  { value: '6', label: 'Operational departments' },
];

export const VALUE_CHAIN = [
  { title: 'Practitioners', text: 'Directors, writers, actors and crew whose work reaches the big screen.' },
  { title: 'Crafts', text: 'Cinematography, editing, sound, costume, makeup, lighting and design.' },
  { title: 'Distributors', text: 'The teams who take Nigerian films from finished cut to cinema release.' },
  { title: 'Exhibitors', text: 'Cinema operators and screens that sustain a theatrical culture.' },
  { title: 'Critics', text: 'Informed voices who frame, debate and preserve the work.' },
  { title: 'Audiences', text: 'The people who buy the tickets and keep cinema-going alive.' },
];

export const PROCESS = [
  {
    step: '01',
    title: 'Submit',
    text: 'Eligible theatrical releases are entered through the official portal, with automated format and media checks.',
  },
  {
    step: '02',
    title: 'Screen & Judge',
    text: 'A Screening Board verifies eligibility, then a jury of industry professionals scores each entry against standard rubrics.',
  },
  {
    step: '03',
    title: 'Vote & Celebrate',
    text: 'Independent auditors tabulate results and seal winner envelopes, which are opened live at the ceremony.',
  },
];

// PROVISIONAL: the final category list and definitions will be published with
// the eligibility rules. These reflect the crafts named in the Launch Blueprint.
export const CATEGORIES: Category[] = [
  { group: 'Film', title: 'Best Film', description: 'The year’s outstanding theatrical feature.' },
  { group: 'Film', title: 'Best Director', description: 'Overall creative vision and execution.' },
  { group: 'Film', title: 'Best Screenplay', description: 'Original or adapted writing for the screen.' },
  { group: 'Film', title: 'Best First Feature', description: 'A remarkable debut theatrical feature.' },
  { group: 'Performance', title: 'Lead Performance', description: 'A defining central performance.' },
  { group: 'Performance', title: 'Supporting Performance', description: 'A performance that lifts the whole film.' },
  { group: 'Performance', title: 'Breakthrough Performer', description: 'An emerging talent to watch.' },
  { group: 'Craft', title: 'Cinematography', description: 'Image-making, lighting and camera.' },
  { group: 'Craft', title: 'Editing', description: 'Rhythm, structure and storytelling in the cut.' },
  { group: 'Craft', title: 'Sound', description: 'Design, mixing and recording.' },
  { group: 'Craft', title: 'Original Score', description: 'Music composed for the film.' },
  { group: 'Craft', title: 'Production Design', description: 'Sets, locations and the world on screen.' },
  { group: 'Craft', title: 'Costume Design', description: 'Character told through wardrobe.' },
  { group: 'Craft', title: 'Makeup & Hair', description: 'Transformation, period and character work.' },
  { group: 'Industry', title: 'Distribution', description: 'Excellence in taking films to cinemas.' },
  { group: 'Industry', title: 'Exhibition', description: 'Cinema operators advancing the experience.' },
  { group: 'Industry', title: 'Film Marketing', description: 'Campaigns, trailers and premieres.' },
  { group: 'Special', title: 'Audience Choice', description: 'Decided by a verified public vote.' },
  { group: 'Special', title: 'Lifetime Achievement', description: 'An enduring contribution to Nigerian cinema.' },
];

export const AUDIENCES = {
  serve: [
    { label: 'Filmmakers & producers', share: 92 },
    { label: 'Cast & crew', share: 88 },
    { label: 'Distributors & exhibitors', share: 76 },
    { label: 'Critics & media', share: 64 },
    { label: 'Audiences & fans', share: 84 },
  ],
  participate: [
    'Submit an eligible film',
    'Follow nominees and vote',
    'Partner or sponsor a category',
    'Apply for press accreditation',
    'Attend the ceremony',
    'Volunteer with the team',
  ],
};

export const INTEGRITY = [
  {
    title: 'Screening Board',
    text: 'Checks technical eligibility, run-time, format and correct classification of every entry before it reaches the jury. Ineligible submissions are flagged and escalated.',
  },
  {
    title: 'Jury Panel',
    text: 'Industry professionals and subject experts give independent, confidential scores using structured rubrics, through a secure role-based scoring interface.',
  },
  {
    title: 'Audit & Ballot',
    text: 'Independent auditors tabulate jury scores, verify public vote counts, keep chain-of-custody for all ballot data, and seal the winner envelopes.',
  },
];

export const ROADMAP: Phase[] = [
  {
    period: 'Sep – Oct 2026',
    title: 'Brand & infrastructure',
    description: 'Identity, website, social channels, media kit and launch assets.',
    status: 'current',
  },
  {
    period: 'Nov 2026',
    title: 'Public announcement',
    description: 'The NCAs are introduced as an institution and the pilot cycle is announced.',
  },
  {
    period: 'Oct – Dec 2026',
    title: 'Partner outreach',
    description: 'Institutional, cinema, media and commercial partners come on board.',
  },
  {
    period: 'Dec 2026',
    title: 'Jury announcement & rules',
    description: 'Jury members revealed; eligibility, rules and submission details published.',
  },
  {
    period: '1 – 31 Jan 2027',
    title: 'Film submissions',
    description: 'The submission portal opens for eligible theatrical releases.',
  },
  {
    period: 'Feb 2027',
    title: 'Nominees announced',
    description: 'Shortlists reviewed by the jury and nominees announced.',
  },
  {
    period: 'Mar 2027',
    title: 'Voting & invitations',
    description: 'Voting window opens; invitations go to talent, stakeholders and partners.',
  },
  {
    period: 'Apr 2027',
    title: 'Press conference & ceremony',
    description: 'Press conference 1–2 weeks out, then the ceremony, winners and archive.',
  },
];

export const PARTNER_BENEFITS = [
  {
    title: 'Category partnership',
    text: 'Attach your brand to a category and the craft it celebrates, from announcement to winner reveal.',
  },
  {
    title: 'Broadcast & stage presence',
    text: 'Integration across the live show, stage screens, red carpet and press wall.',
  },
  {
    title: 'Digital reach',
    text: 'Co-branded content across the NCAs social channels through every phase of the cycle.',
  },
  {
    title: 'Industry access',
    text: 'Meet filmmakers, distributors, exhibitors and media across Nigeria’s cinema value chain.',
  },
  {
    title: 'Founding legacy',
    text: 'Partners in the pilot cycle are recognised as founders of a long-term institution.',
  },
];

export const PARTNER_TIERS = [
  { name: 'Institutional Partners', slots: 2 },
  { name: 'Cinema & Exhibition Partners', slots: 4 },
  { name: 'Media Partners', slots: 6 },
];

export const PRESS_ITEMS = [
  { title: 'Media kit', text: 'Logos, brand guidelines and official descriptions.' },
  { title: 'Press releases', text: 'Official announcements and statements.' },
  { title: 'Photography', text: 'Approved institutional and event imagery.' },
  { title: 'Accreditation', text: 'Apply for ceremony and press-wall access.' },
];

export const FAQS = [
  {
    q: 'What makes the NCAs different from other entertainment awards?',
    a: 'The NCAs are cinema-specific. They recognise work made for and released in cinemas, and the whole theatrical value chain behind it, not screen entertainment in general.',
  },
  {
    q: 'Which films are eligible?',
    a: 'Eligibility is based on theatrical release in Nigeria within a defined release period. The full rules, including submission requirements and exclusions, will be published in December 2026.',
  },
  {
    q: 'When can I submit a film?',
    a: 'The pilot submission window is planned for 1–31 January 2027. Join the mailing list to be told when the portal opens.',
  },
  {
    q: 'How are winners decided?',
    a: 'Entries are verified by a Screening Board and scored by an independent jury. Independent auditors tabulate the results. Audience categories use a verified public vote.',
  },
  {
    q: 'How can my organisation partner with the NCAs?',
    a: 'Use the partnership enquiry form or email our partnerships team. Pilot-cycle partners are recognised as founding partners.',
  },
];
