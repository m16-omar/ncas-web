import React from 'react';
import { Link } from 'react-router-dom';
import { Check, CreditCard, Info } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { DATES, PAYMENT_OPTIONS, TICKETS } from '../data';
import { useMeta } from '../lib/meta';
import { useOpenModal } from '../lib/modal';
import type { Phase } from '../lib/phase';

export const Tickets: React.FC<{ phase: Phase }> = ({ phase }) => {
  useMeta('Tickets & Tables', 'Individual tickets, VIP seats and corporate tables for the Nigerian Cinema Awards ceremony.');
  const open = useOpenModal();
  const onSale = phase === 'shortlist';

  return (
    <>
      <PageHeader
        title="Tickets &"
        accent="Tables"
        intro={`Join Nigeria's cinema industry for the ceremony in ${DATES.ceremonyLabel}. Tickets go on sale when nominees are announced; register now to be first in line.`}
      />

      <section className="page-section">
        <div className="wrap">
          <div className="price-grid">
            {TICKETS.map((t) => (
              <article className={`price-card reveal${t.featured ? ' featured' : ''}`} key={t.name}>
                {t.featured && <span className="price-flag">Most popular</span>}
                <h2>{t.name}</h2>
                <span className="price-note">{t.note}</span>
                <strong className="price grad-text">{t.price || 'TBA'}</strong>
                <ul>
                  {t.perks.map((p) => <li key={p}><Check size={16} /> {p}</li>)}
                </ul>
                <button className={`reg-btn${t.featured ? '' : ' ghost'}`} onClick={() => open('tickets')}>
                  {onSale ? 'Reserve' : 'Register Interest'}
                </button>
              </article>
            ))}
          </div>

          <div className="info-row">
            <div className="info-card reveal">
              <CreditCard size={28} strokeWidth={1.5} />
              <h3>Secure checkout</h3>
              <p>Pay in naira or by international card. Checkout will be powered by {PAYMENT_OPTIONS.join(', ')}.</p>
              <div className="pay-logos">{PAYMENT_OPTIONS.map((p) => <span key={p}>{p}</span>)}</div>
            </div>
            <div className="info-card reveal">
              <Info size={28} strokeWidth={1.5} />
              <h3>Seating & venue</h3>
              <p>
                The seating map and venue details will be published with ticket sales. Corporate tables seat ten and
                are placed nearest the stage.
              </p>
              <Link className="link" to="/event">Event details &amp; dress code →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
