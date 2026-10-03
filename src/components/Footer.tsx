import React from 'react';
import { Logo } from './Logo';
import { SITE, type ModalType } from '../data';

const YEAR = new Date().getFullYear();

export const Footer: React.FC<{ onOpen: (type: ModalType) => void }> = ({ onOpen }) => (
  <footer className="footer">
    <div className="container">
      <div className="footer-grid">
        <div>
          <a href="#home" className="brand" style={{ marginBottom: 20 }}>
            <Logo size={44} />
            <span>
              <span className="brand-name">Nigerian Cinema Awards</span>
              <span className="brand-sub">NCAs</span>
            </span>
          </a>
          <p style={{ maxWidth: 340 }}>
            A platform built only for cinema, recognising, documenting and strengthening theatrical cinema in Nigeria.
          </p>
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
          <h4>Explore</h4>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#why-cinema">Why Cinema</a></li>
            <li><a href="#categories">Categories</a></li>
            <li><a href="#integrity">Integrity</a></li>
            <li><a href="#roadmap">Roadmap</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h4>Take part</h4>
          <ul>
            <li><a href="#home" onClick={(e) => { e.preventDefault(); onOpen('submission'); }}>Film submissions</a></li>
            <li><a href="#partners" onClick={(e) => { e.preventDefault(); onOpen('partner'); }}>Partnerships</a></li>
            <li><a href="#press">Press room</a></li>
            <li><a href="#home" onClick={(e) => { e.preventDefault(); onOpen('updates'); }}>Mailing list</a></li>
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
              <span className="contact-label">Partnerships</span>
              <a href={`mailto:${SITE.emails.partnerships}`}>{SITE.emails.partnerships}</a>
            </li>
            <li>
              <span className="contact-label">Press</span>
              <a href={`mailto:${SITE.emails.press}`}>{SITE.emails.press}</a>
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
