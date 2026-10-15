import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Award, BookOpenCheck, Camera, Clapperboard, Eye, FileSearch, Film, Gavel, Heart, LockKeyhole, Megaphone, Newspaper, Plus, Projector, Ticket, Trophy, Truck, UserRound, Users,
} from 'lucide-react';
import {
  CATEGORIES, FAQS, PARTNER_BENEFITS, PERSONAS, PROCESS, ROADMAP, SITE, SPONSOR_TIERS, TRACKS, VALUE_CHAIN,
} from '../data';
import { useOpenModal } from '../lib/modal';
import { CATEGORY_ICONS, TRACK_COLORS } from '../lib/categories';

/* ---------- Who it's for ---------- */

const Donut: React.FC = () => {
  const counts = TRACKS.map((t) => CATEGORIES.filter((c) => c.track === t).length);
  const total = counts.reduce((a, b) => a + b, 0);
  const r = 70;
  const circ = 2 * Math.PI * r;
  const lengths = counts.map((count) => (count / total) * circ);
  const offsets = lengths.map((_, i) => lengths.slice(0, i).reduce((a, b) => a + b, 0));

  return (
    <div className="chart-inbox reveal">
      <svg className="donut" width="190" height="190" viewBox="0 0 190 190" role="img" aria-label="Categories by track">
        {lengths.map((len, i) => (
            <circle
              key={TRACKS[i]}
              cx="95" cy="95" r={r}
              fill="none"
              stroke={TRACK_COLORS[TRACKS[i]]}
              strokeWidth="26"
              strokeDasharray={`${len - 3} ${circ - len + 3}`}
              strokeDashoffset={-offsets[i]}
              transform="rotate(-90 95 95)"
            />
        ))}
        <text x="95" y="92" textAnchor="middle" className="donut-num">{total}</text>
        <text x="95" y="116" textAnchor="middle" className="donut-label">CATEGORIES</text>
      </svg>
      <ul className="legend">
        {TRACKS.map((t, i) => (
          <li key={t}>
            <i style={{ background: TRACK_COLORS[t] }} />
            {t}
            <b>{counts[i]}</b>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const Attend: React.FC = () => (
  <section id="attend">
    <div className="grid-lines" aria-hidden="true" />
    <div className="wrap">
      <div className="attend-head">
        <h2 className="title reveal">Who It's <br /><span>For</span></h2>
        <div className="attend-big reveal">
          <strong className="grad-text">4</strong>
          <p>pillars of the cinema value chain, recognised by one platform</p>
        </div>
      </div>

      <div className="attend-container">
        <Donut />
        <div className="down-inbox reveal">
          <h3>Ways to take part</h3>
          <div className="persona-grid">
            {PERSONAS.map((p) => (
              <div className="persona" key={p.title}>
                <b>{p.title}</b>
                <span>{p.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ---------- Categories carousel ---------- */

export const Themes: React.FC = () => {
  const half = Math.ceil(CATEGORIES.length / 2);
  const rows = [CATEGORIES.slice(0, half), CATEGORIES.slice(half)];

  return (
    <section id="themes">
      <div className="glow" aria-hidden="true" />
      <div className="wrap section-head-row">
        <div>
          <h2 className="title reveal">Award <span>Categories</span></h2>
          <p className="title-des reveal">
            26 categories across the film, its performances, its crafts, and the businesses that promote, distribute and
            screen it.
          </p>
        </div>
        <Link className="reg-btn ghost reveal" to="/categories">All Categories</Link>
      </div>

      <div style={{ marginTop: 36 }}>
        {rows.map((row, r) => (
          <div className={`theme-row${r === 1 ? ' rtl' : ''}`} key={r}>
            <div className="theme-track">
              {[...row, ...row].map((cat, i) => {
                const Icon = CATEGORY_ICONS[cat.slug] ?? Award;
                return (
                  <Link
                    to={`/categories#${cat.slug}`}
                    className="theme-box"
                    key={i}
                    aria-hidden={i >= row.length}
                    tabIndex={i >= row.length ? -1 : undefined}
                  >
                    <span className="theme-group">{cat.track}</span>
                    <Icon size={56} strokeWidth={1.2} />
                    <div className="theme-des">{cat.title}</div>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

/* ---------- Why cinema ---------- */

const CHAIN_ICONS = [Clapperboard, Users, Truck, Projector, Megaphone, Ticket];

export const Market: React.FC = () => (
  <section id="market">
    <div className="grid-lines" aria-hidden="true" />
    <div className="wrap market-container">
      <div>
        <h2 className="title reveal">Why <span>Cinema ?</span></h2>
        <h3 className="market-sub reveal">Recognition for the whole value chain</h3>
        <p className="title-des reveal">
          A film's run in cinemas depends on far more than what appears on screen. The NCAs recognise everyone who gets
          stories in front of audiences in Nigerian cinemas.
        </p>
        <div className="m-boxes">
          {VALUE_CHAIN.map((item, i) => {
            const Icon = CHAIN_ICONS[i];
            return (
              <div className="m-box reveal" key={item.title}>
                <Icon size={26} />
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="market-box reveal" aria-hidden="true">
        <div className="market-screen"><Film size={64} strokeWidth={1.2} /></div>
        <div className="market-seats" />
        <span className="market-cap">Made for the big screen</span>
      </div>
    </div>
  </section>
);

/* ---------- How it works ---------- */

const PROCESS_ICONS = [FileSearch, Gavel, LockKeyhole];

export const Summit: React.FC = () => {
  const [active, setActive] = useState(1);

  return (
    <section id="summit">
      <div className="wrap">
        <div className="summit-head">
          <h2 className="title reveal">How It <br /><span>Works</span></h2>
          <p className="title-des reveal">
            From submission to sealed envelope. The jurors' decisions are final, and winners stay confidential until the
            envelope is opened at the ceremony.
          </p>
        </div>

        <div className="summit-boxes">
          {PROCESS.map((item, i) => {
            const Icon = PROCESS_ICONS[i];
            return (
              <div
                key={item.step}
                className={`summit-box reveal${active === i ? ' sum-active' : ''}`}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
              >
                <span className="sum-num">{item.step}</span>
                <Icon className="sum-icon" size={40} strokeWidth={1.4} />
                <h3 className="sum-name">
                  {item.title}
                  <small>{item.subtitle}</small>
                </h3>
                <p>{item.text}</p>
                <Link className="sum-more" to="/submit">Rules & guidelines</Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ---------- Why partner ---------- */

export const Exhibit: React.FC = () => {
  const open = useOpenModal();
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="exhibit">
      <div className="wrap">
        <div className="exhibit-head">
          <div>
            <h2 className="title reveal">Why Partner <br /><span>or Sponsor</span></h2>
            <p className="title-des reveal" style={{ marginTop: 14 }}>
              Partners in the pilot cycle help build a lasting institution for Nigerian cinema, and are credited as
              founding partners from the first ceremony onward.
            </p>
          </div>
          <button className="reg-btn reveal" onClick={() => open('partner')}>Partnership Enquiry</button>
        </div>

        <div className="exhibit-boxes reveal">
          {PARTNER_BENEFITS.map((b, i) => (
            <button
              key={b.title}
              className={`exhibit-box${openIdx === i ? ' open' : ''}`}
              onMouseEnter={() => setOpenIdx(i)}
              onFocus={() => setOpenIdx(i)}
              onClick={() => setOpenIdx(i)}
              aria-expanded={openIdx === i}
            >
              <span className="ex-num grad-text">0{i + 1}</span>
              <div>
                <h3 className="s-head">{b.title}</h3>
                <div className="ex-body">
                  <h4>{b.kicker}</h4>
                  <p>{b.text}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------- Jury ---------- */

export const Speakers: React.FC = () => (
  <section id="speakers">
    <div className="grid-lines" aria-hidden="true" />
    <div className="wrap">
      <h2 className="title reveal">Meet The <span>Jury</span></h2>
      <p className="title-des reveal" style={{ marginTop: 14 }}>
        Industry professionals and subject experts will judge the pilot cycle. Members will be announced in December
        2026.
      </p>
      <div className="speakers-boxes">
        {Array.from({ length: 8 }, (_, i) => (
          <div className="spk-box reveal" key={i}>
            <div className="spk-art"><UserRound size={96} strokeWidth={0.8} /></div>
            <div className="spk-blur">
              <span className="spk-name">To be announced</span>
              <span className="spk-role">Jury member</span>
              <span className="spk-org">December 2026</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ---------- Sponsors ---------- */

export const Sponsors: React.FC<{ showPerks?: boolean }> = ({ showPerks }) => {
  const open = useOpenModal();
  return (
    <section id="sponsors">
      <div className="wrap">
        <h2 className="title dark reveal">Our <span>Sponsors</span></h2>
        <div className="spon-container">
          {SPONSOR_TIERS.map((tier) => (
            <div className="spon-tier reveal" key={tier.name}>
              <h3>{tier.name}</h3>
              {showPerks && (
                <ul className="tier-perks">
                  {tier.perks.map((perk) => <li key={perk}>{perk}</li>)}
                </ul>
              )}
              <div className="spon-boxes">
                {Array.from({ length: tier.slots }, (_, i) => (
                  <button className="spon-slot" key={i} onClick={() => open('partner')}>
                    <Plus size={18} />
                    Your brand here
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="spon-cta reveal">
          <p>Founding sponsor places for the 2026/27 pilot cycle are open.</p>
          <button className="reg-btn" onClick={() => open('partner')}>Become a Sponsor</button>
        </div>
      </div>
    </section>
  );
};

/* ---------- Key dates ---------- */

export const Agenda: React.FC = () => {
  const open = useOpenModal();
  return (
    <section id="agenda">
      <div className="grid-lines left" aria-hidden="true" />
      <div className="wrap">
        <h2 className="title reveal">Key <span>Dates</span></h2>
        <p className="title-des reveal" style={{ marginTop: 14 }}>
          The pilot cycle runs from launch in late 2026 to the ceremony in April 2027. Dates are provisional.
        </p>
        <ol className="agenda-boxes">
          {ROADMAP.map((m) => (
            <li className={`agenda-box reveal${m.status === 'current' ? ' current' : ''}`} key={m.title}>
              <span className="agenda-time grad-text">{m.period}</span>
              <div>
                <h3>{m.title}</h3>
                <p>{m.description}</p>
              </div>
              {m.status === 'current' && <span className="agenda-tag">In progress</span>}
            </li>
          ))}
        </ol>
        <div className="agenda-foot">
          <button className="reg-btn" onClick={() => open('updates')}>Get Date Updates</button>
          <Link className="reg-btn ghost" to="/event">Event Details</Link>
        </div>
      </div>
    </section>
  );
};

/* ---------- Highlights gallery ---------- */

const GALLERY = [
  { icon: Camera, label: 'Red carpet' },
  { icon: Trophy, label: 'Winners' },
  { icon: Projector, label: 'Screenings' },
  { icon: Users, label: 'Industry' },
  { icon: Heart, label: 'Audiences' },
  { icon: Newspaper, label: 'Press wall' },
  { icon: Clapperboard, label: 'Behind the scenes' },
  { icon: Eye, label: 'Premieres' },
  { icon: BookOpenCheck, label: 'Archive' },
];

export const Gallery: React.FC = () => (
  <section id="gallery">
    <div className="wrap">
      <h2 className="title reveal">Past <span>Highlights</span></h2>
      <p className="title-des reveal" style={{ marginTop: 14 }}>
        Photos and films from the first ceremony will live here, building a permanent archive of every NCAs cycle.
      </p>
      <div className="gallery-grid">
        {GALLERY.map(({ icon: Icon, label }, i) => (
          <div className={`gallery-box g${i + 1} reveal`} key={label}>
            <Icon size={40} strokeWidth={1.2} />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ---------- FAQ ---------- */

export const Faq: React.FC<{ items?: { q: string; a: string }[] }> = ({ items = FAQS }) => (
  <section id="faq">
    <div className="wrap faq-layout">
      <div>
        <h2 className="title reveal">Frequently <span>Asked</span></h2>
        <p className="title-des reveal" style={{ marginTop: 14 }}>
          Can't find what you need? Email{' '}
          <a href={`mailto:${SITE.emails.general}`} className="link">{SITE.emails.general}</a>.
        </p>
      </div>
      <div className="faq reveal">
        {items.map((item) => (
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
