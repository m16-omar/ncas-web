import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { PATRON, SITE } from '../data';
import { useOpenModal } from '../lib/modal';

const YEAR = new Date().getFullYear();

const CONTACTS = [
  { title: 'Sponsor the awards', email: SITE.emails.partnerships },
  { title: 'Submit a film', email: SITE.emails.entries },
  { title: 'Attend the ceremony', email: SITE.emails.tickets },
];

// Short labels for the round social buttons (brand icons aren't bundled with lucide).
const SOCIAL_ABBR: Record<string, string> = {
  Instagram: 'IG', X: 'X', Facebook: 'FB', TikTok: 'TT', YouTube: 'YT', LinkedIn: 'IN',
};

const LINKS = [
  { name: 'About', to: '/about' },
  { name: 'Categories', to: '/categories' },
  { name: 'Submit', to: '/submit' },
  { name: 'Nominees', to: '/nominees' },
  { name: 'Tickets', to: '/tickets' },
  { name: 'Event', to: '/event' },
  { name: 'Sponsors', to: '/sponsors' },
  { name: 'Press', to: '/press' },
  { name: 'Live', to: '/live' },
];

export const Footer: React.FC = () => {
  const open = useOpenModal();

  return (
    <footer className="always-dark">
      <div className="foot-links">
        <nav aria-label="Footer">
          {LINKS.map((l) => <Link key={l.to} to={l.to}>{l.name}</Link>)}
          <button onClick={() => open('updates')}>Mailing list</button>
          {SITE.judgesPortalUrl && <a href={SITE.judgesPortalUrl} target="_blank" rel="noreferrer">Judges</a>}
        </nav>
      </div>

      <div className="foot-band">
        <div className="mail-boxes">
          {CONTACTS.map((c) => (
            <div className="mail-box" key={c.title}>
              <b>{c.title}</b>
              <a href={`mailto:${c.email}`}>{c.email}</a>
            </div>
          ))}
        </div>

        <div className="foot-social">
          <div className="socials">
            {SITE.socials.map((s) =>
              s.href ? (
                <a key={s.name} href={s.href} target="_blank" rel="noreferrer" aria-label={s.name}>
                  {SOCIAL_ABBR[s.name] ?? s.name[0]}
                </a>
              ) : (
                <span key={s.name} title={`${s.name}: coming soon`} aria-label={`${s.name}, coming soon`}>
                  {SOCIAL_ABBR[s.name] ?? s.name[0]}
                </span>
              ),
            )}
          </div>
          <p>© {YEAR} All rights reserved by <b>{SITE.name.toUpperCase()}</b></p>
        </div>

        <div className="foot-logo-box">
          <span>{PATRON.label}:</span>
          <div><Logo size={34} /> {PATRON.name}</div>
        </div>
      </div>
    </footer>
  );
};
