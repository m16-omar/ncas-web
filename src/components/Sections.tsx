import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Award, Camera, Play, Plus, UserRound } from 'lucide-react';
import { Photo } from './Photo';
import {
  CATEGORIES, CINEMA_FACTS, FAQS, IMAGES, JURY_SEATS, PARTNER_BENEFITS, PILLARS, PROCESS, ROADMAP, ROLES, SITE,
  SPONSOR_TIERS, TRACKS,
} from '../data';
import { useOpenModal } from '../lib/modal';
import { CATEGORY_ICONS, TRACK_COLORS } from '../lib/categories';

/* ---------- Who takes part ---------- */

const Donut: React.FC = () => {
  const counts = TRACKS.map((t) => CATEGORIES.filter((c) => c.track === t).length);
  const total = counts.reduce((a, b) => a + b, 0);
  const r = 70;
  const circ = 2 * Math.PI * r;
  const lengths = counts.map((count) => (count / total) * circ);
  const offsets = lengths.map((_, i) => lengths.slice(0, i).reduce((a, b) => a + b, 0));

  return (
    <>
      <svg className="donut" viewBox="0 0 190 190" role="img" aria-label="Categories by track">
        {lengths.map((len, i) => (
          <circle
            key={TRACKS[i]}
            cx="95" cy="95" r={r}
            fill="none"
            stroke={TRACK_COLORS[TRACKS[i]]}
            strokeWidth="38"
            strokeDasharray={`${len} ${circ - len}`}
            strokeDashoffset={-offsets[i]}
            transform="rotate(-90 95 95)"
          />
        ))}
      </svg>
      <ul className="legend">
        {TRACKS.map((t, i) => (
          <li key={t}>
            <i style={{ background: TRACK_COLORS[t] }} />
            {t} ({counts[i]})
          </li>
        ))}
      </ul>
    </>
  );
};

export const Attend: React.FC = () => {
  const byPillar = PILLARS.map((p) => ({
    name: p.title,
    count: CATEGORIES.filter((c) => c.pillar === p.title).length,
  }));

  return (
    <section id="attend">
      <div className="grid-lines" aria-hidden="true" />
      <div className="wrap">
        <h2 className="title reveal">Who Takes <span>Part</span></h2>
        <p className="attend-lead reveal">
          <strong>{CATEGORIES.length}</strong> categories honouring the whole value chain of Nigerian cinema.
        </p>

        <div className="attend-container">
          <div className="attend-box reveal">
            <h3 className="box-head">Categories by track:</h3>
            <div className="chart-inbox"><Donut /></div>
          </div>
          <div className="attend-box reveal">
            <h3 className="box-head">Who we recognise:</h3>
            <ul className="profile-list">
              {ROLES.map((role) => <li key={role}>{role}</li>)}
            </ul>
          </div>
        </div>

        <div className="attend-box wide reveal">
          <h3 className="box-head">Categories by pillar:</h3>
          <div className="progress-container">
            {byPillar.map((p) => {
              const pct = Math.round((p.count / CATEGORIES.length) * 100);
              return (
                <div className="progress" key={p.name}>
                  <div className="progress-label"><span>{p.name}</span><b>{pct}%</b></div>
                  <div className="progress-track"><div className="progress-fill" style={{ width: `${pct}%` }} /></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------- Categories carousel ---------- */

export const Themes: React.FC = () => {
  const half = Math.ceil(CATEGORIES.length / 2);
  const rows = [CATEGORIES.slice(0, half), CATEGORIES.slice(half)];

  return (
    <section id="themes">
      <div className="glow" aria-hidden="true" />
      <div className="wrap">
        <h2 className="title reveal">Categories</h2>
      </div>

      <div className="wrap theme-wrap">
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
                    style={{ '--track': TRACK_COLORS[cat.track] } as React.CSSProperties}
                    aria-hidden={i >= row.length}
                    tabIndex={i >= row.length ? -1 : undefined}
                  >
                    <Icon className="theme-icon" size={120} strokeWidth={0.8} />
                    <span className="theme-des">{cat.title}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      <div className="wrap" style={{ textAlign: 'center', marginTop: 36 }}>
        <Link className="reg-btn" to="/categories">All {CATEGORIES.length} Categories</Link>
      </div>
    </section>
  );
};

/* ---------- Why cinema ---------- */

export const Market: React.FC = () => (
  <section id="market">
    <div className="grid-lines" aria-hidden="true" />
    <div className="wrap market-container">
      <Photo className="market-img reveal" src={IMAGES.market} alt="A Nigerian cinema audience" label="Cinema" />
      <div>
        <h2 className="title reveal">Why <span>Cinema ?</span></h2>
        <h3 className="market-sub reveal">Made for the big screen, from idea to box office</h3>
        <p className="market-des reveal">
          A film's run in cinemas depends on far more than what appears on screen. The NCAs recognise everyone who gets
          stories in front of audiences in Nigerian cinemas, and draw attention to an industry that keeps going despite
          the odds.
        </p>
        <div className="m-boxes">
          {CINEMA_FACTS.map((f) => (
            <div className="m-box reveal" key={f.label}>
              <strong>{f.value}</strong>
              <span>{f.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ---------- How it works ---------- */

export const Summit: React.FC = () => {
  const [active, setActive] = useState(1);

  return (
    <section id="summit">
      <div className="glow" aria-hidden="true" />
      <div className="wrap">
        <div className="summit-head">
          <h2 className="title reveal">How It <span>Works</span><br />Step By Step</h2>
          <p className="title-des reveal">
            From submission to sealed envelope. An independent jury scores every eligible film, its decisions are final,
            and winners stay confidential until the envelope is opened at the ceremony.
          </p>
        </div>

        <div className="summit-boxes reveal">
          {PROCESS.map((item, i) => (
            <button
              key={item.step}
              className={`summit-box${active === i ? ' sum-active' : ''}`}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
              aria-expanded={active === i}
            >
              <span className="sum-num">{item.step}.</span>
              <span className="sum-name">{item.title} — {item.subtitle}</span>
              <span className="sum-des">{item.text}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------- Why partner (light section) ---------- */

export const Exhibit: React.FC = () => {
  const open = useOpenModal();
  return (
    <section id="exhibit">
      <div className="wrap">
        <div className="exhibit-head">
          <h2 className="title dark reveal">Why Partner <span>or Sponsor</span></h2>
          <p className="exhibit-des reveal">
            Partners in the pilot cycle help build a lasting institution for Nigerian cinema, and are credited as
            founding partners from the first ceremony onward.
          </p>
          <button className="reg-btn reveal" onClick={() => open('partner')}>Partnership Enquiry</button>
        </div>

        <div className="exhibit-boxes">
          {PARTNER_BENEFITS.map((b) => (
            <div className="exhibit-box reveal" key={b.title}>
              <div>
                <h3 className="s-head">{b.title}</h3>
                <h4>{b.kicker}</h4>
              </div>
              <p>{b.text}</p>
            </div>
          ))}
        </div>
      </div>
      <Photo className="exhibit-strip" src={IMAGES.exhibit} alt="Audience at the ceremony" label="Audience" />
    </section>
  );
};

/* ---------- Jury ---------- */

export const Speakers: React.FC = () => (
  <section id="speakers">
    <div className="grid-lines left" aria-hidden="true" />
    <div className="wrap">
      <h2 className="title center reveal">Meet The <span>Jury</span></h2>
      <p className="title-des center reveal">
        Industry professionals and subject experts will judge the pilot cycle. Members will be announced in December
        2026.
      </p>
      <div className="speakers-boxes">
        {Array.from({ length: JURY_SEATS }, (_, i) => (
          <div className="spk-box reveal" key={i}>
            <div className="spk-img"><UserRound size={110} strokeWidth={0.7} /></div>
            <div className="spk-info">
              <span className="spk-name">To Be Announced</span>
              <span className="spk-role">Jury member</span>
              <span className="spk-org">December 2026</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ---------- Sponsors (white section) ---------- */

export const Sponsors: React.FC<{ showPerks?: boolean }> = ({ showPerks }) => {
  const open = useOpenModal();
  return (
    <section id="sponsors">
      <div className="wrap">
        <h2 className="title dark reveal"><span>Our</span> Sponsors</h2>
        <div className="spon-container">
          {SPONSOR_TIERS.map((tier) => (
            <div className="spon-tier reveal" key={tier.name}>
              <h3 className="spon-label">{tier.name}</h3>
              {showPerks && (
                <ul className="tier-perks">
                  {tier.perks.map((perk) => <li key={perk}>{perk}</li>)}
                </ul>
              )}
              <div className="spon-boxes">
                {Array.from({ length: tier.slots }, (_, i) => (
                  <button className="spon-box" key={i} onClick={() => open('partner')}>
                    <Plus size={16} /> Your brand here
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------- Key dates (agenda table) ---------- */

export const Agenda: React.FC = () => {
  const open = useOpenModal();
  return (
    <section id="agenda">
      <div className="wrap">
        <h2 className="title center reveal">Key Dates</h2>
        <ol className="agenda-boxes">
          {ROADMAP.map((m) => (
            <li className={`agenda-box reveal${m.status === 'current' ? ' current' : ''}`} key={m.title}>
              <span className="agenda-time">{m.period}</span>
              <span className="agenda-text"><b>{m.title}</b> — {m.description}</span>
            </li>
          ))}
        </ol>
        <div className="agenda-foot">
          <button className="reg-btn" onClick={() => open('updates')}>Get Date Updates</button>
          <Link className="reg-btn" to="/event">Event Details</Link>
        </div>
      </div>
    </section>
  );
};

/* ---------- Highlights: video + masonry gallery ---------- */

const GALLERY_LABELS = [
  'Red carpet', 'Winners', 'Screenings', 'Industry', 'Audiences', 'Press wall',
  'Behind the scenes', 'Premieres', 'Stage', 'Backstage', 'Archive', 'After-party',
];

export const Gallery: React.FC = () => (
  <section id="gallery">
    <div className="grid-lines left" aria-hidden="true" />
    <div className="wrap">
      <h2 className="title center reveal">Past <span>Highlights</span></h2>
      <div className="video-container reveal">
        {IMAGES.highlightVideo ? (
          <video src={IMAGES.highlightVideo} controls playsInline />
        ) : (
          <div className="video-ph">
            <span className="play-circle"><Play size={30} fill="currentColor" /></span>
            <p>The highlight film from the first ceremony will play here.</p>
          </div>
        )}
      </div>
      <div className="gallery-container">
        {GALLERY_LABELS.map((label, i) => (
          <Photo
            key={label}
            className={`gallery-box gb${(i % 6) + 1} reveal`}
            src={IMAGES.gallery[i]}
            label={label}
            icon={Camera}
          />
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
        <h2 className="title reveal">Questions <span>& Answers</span></h2>
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
