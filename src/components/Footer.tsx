import React from 'react';
import { Link } from 'react-router-dom';
import { Clapperboard, Handshake, Ticket } from 'lucide-react';
import { Logo } from './Logo';
import { SITE } from '../data';
import { useOpenModal } from '../lib/modal';

const YEAR = new Date().getFullYear();

const MAIL_BOXES = [
  { icon: Handshake, title: 'Sponsor the awards', email: SITE.emails.partnerships },
  { icon: Clapperboard, title: 'Submit a film', email: SITE.emails.entries },
  { icon: Ticket, title: 'Attend the ceremony', email: SITE.emails.tickets },
];

export const Footer: React.FC = () => {
  const open = useOpenModal();

  return (
    <footer className="always-dark">
      <div className="glow" aria-hidden="true" />
      <div className="wrap">
        <div className="mail-boxes">
          {MAIL_BOXES.map(({ icon: Icon, title, email }) => (
            <a className="mail-box" href={`mailto:${email}`} key={title}>
              <Icon size={28} strokeWidth={1.5} />
              <span>
                <b>{title}</b>
                {email}
              </span>
            </a>
          ))}
        </div>

        <div className="footer-cta">
          <h2>Be first to hear <span className="grad-text">what's next</span></h2>
          <button className="reg-btn" onClick={() => open('updates')}>Join the Mailing List</button>
        </div>

        <div className="footer-grid">
          <div>
            <Link to="/" className="nav-logo" style={{ marginBottom: 18 }}>
              <Logo size={46} />
              <span>
                <b>NCAs</b>
                <small>NIGERIAN CINEMA AWARDS</small>
              </span>
            </Link>
            <p style={{ maxWidth: 320 }}>{SITE.tagline}</p>
            <div className="socials">
              {SITE.socials.map((s) =>
                s.href ? (
                  <a key={s.name} href={s.href} target="_blank" rel="noreferrer">{s.name}</a>
                ) : (
                  <span key={s.name} title="Coming soon">{s.name}</span>
                ),
              )}
            </div>
          </div>

          <div>
            <h4>The Awards</h4>
            <ul>
              <li><Link to="/about">About us</Link></li>
              <li><Link to="/categories">Categories</Link></li>
              <li><Link to="/nominees">Nominees & winners</Link></li>
              <li><Link to="/live">Live broadcast</Link></li>
            </ul>
          </div>

          <div>
            <h4>Take part</h4>
            <ul>
              <li><Link to="/submit">Submit a film</Link></li>
              <li><Link to="/tickets">Tickets & tables</Link></li>
              <li><Link to="/event">Event & agenda</Link></li>
              <li><Link to="/sponsors">Sponsors</Link></li>
              {SITE.judgesPortalUrl && (
                <li><a href={SITE.judgesPortalUrl} target="_blank" rel="noreferrer">Judges' portal</a></li>
              )}
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul>
              <li>
                <span className="contact-label">General</span>
                <a href={`mailto:${SITE.emails.general}`}>{SITE.emails.general}</a>
              </li>
              <li>
                <span className="contact-label">Press</span>
                <Link to="/press">Press room</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {YEAR} Nigerian Cinema Awards. All rights reserved.</span>
          <span>{SITE.domain}</span>
        </div>
      </div>
    </footer>
  );
};
