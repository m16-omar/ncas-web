import React from 'react';
import { BadgeCheck, Camera, FolderOpen, Newspaper, Plus } from 'lucide-react';
import { FAQS, PRESS_ITEMS, SITE, type ModalType } from '../data';

const ICONS = [FolderOpen, Newspaper, Camera, BadgeCheck];

export const Press: React.FC = () => (
  <section id="press" className="section">
    <div className="container">
      <div className="section-header">
        <span className="eyebrow">Press room</span>
        <h2 className="section-title">Resources for <em>media</em></h2>
        <p className="section-desc">
          The official media kit, releases and imagery will be published here at the announcement. For press
          enquiries, email <a href={`mailto:${SITE.emails.press}`}>{SITE.emails.press}</a>.
        </p>
      </div>
      <div className="grid-4">
        {PRESS_ITEMS.map((item, i) => {
          const Icon = ICONS[i];
          return (
            <div className="card press-card" key={item.title}>
              <Icon className="icon" size={28} />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <span className="soon">Available at launch</span>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export const Faq: React.FC = () => (
  <section id="faq" className="section section-alt">
    <div className="container">
      <div className="section-header">
        <span className="eyebrow">FAQ</span>
        <h2 className="section-title">Frequently asked <em>questions</em></h2>
      </div>
      <div className="faq">
        {FAQS.map((item) => (
          <details key={item.q}>
            <summary>
              {item.q}
              <Plus size={22} />
            </summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
);

export const CtaBand: React.FC<{ onOpen: (type: ModalType) => void }> = ({ onOpen }) => (
  <section className="section">
    <div className="container">
      <div className="cta-band">
        <span className="eyebrow">Stay in the picture</span>
        <h2>Be first to hear <span className="gold-text">what's next</span></h2>
        <p>Get the announcement, category rules, jury reveal and submission dates straight to your inbox.</p>
        <button className="btn btn-gold" onClick={() => onOpen('updates')}>Join the Mailing List</button>
      </div>
    </div>
  </section>
);
