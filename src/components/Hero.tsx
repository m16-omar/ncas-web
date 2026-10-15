import React from 'react';
import { Link } from 'react-router-dom';
import { Clapperboard, Film, Radio, Ticket, Trophy } from 'lucide-react';
import { Logo } from './Logo';
import { Photo } from './Photo';
import { CRAFTS, DATES, IMAGES, PATRON, SITE } from '../data';
import { countdownFor, PHASE_LABELS, useCountdown, type Phase } from '../lib/phase';
import { useOpenModal } from '../lib/modal';

const Countdown: React.FC<{ label: string; target: number }> = ({ label, target }) => {
  const left = useCountdown(target);
  const units = [
    { label: 'Days', value: left.days },
    { label: 'Hours', value: left.hours },
    { label: 'Minutes', value: left.minutes },
    { label: 'Seconds', value: left.seconds },
  ];
  return (
    <div className="countdown" role="timer" aria-label={label}>
      {units.map((unit) => (
        <div className="count-box" key={unit.label}>
          <strong>{unit.value}</strong>
          <span>{unit.label}</span>
        </div>
      ))}
    </div>
  );
};

// Submit button: goes to the awards portal when configured, otherwise the submit page.
export const SubmitButton: React.FC<{ className?: string; children?: React.ReactNode }> = ({
  className = 'reg-btn',
  children = 'Submit Entry',
}) =>
  SITE.submissionPortalUrl ? (
    <a className={className} href={SITE.submissionPortalUrl} target="_blank" rel="noreferrer">
      <Clapperboard size={16} /> {children}
    </a>
  ) : (
    <Link className={className} to="/submit">
      <Clapperboard size={16} /> {children}
    </Link>
  );

const HEADLINES: Record<Phase, { stroke: string; main: string; sub: string }> = {
  launch: { stroke: "Celebrating Nigeria's", main: 'Finest Films Made for Cinema', sub: 'Recognise. Celebrate. Strengthen.' },
  entries: { stroke: 'Entries are now open', main: 'Submit Your Film to the NCAs', sub: 'Entries close 31 January 2027.' },
  shortlist: { stroke: 'The nominees are in', main: 'Join Us on Awards Night', sub: 'Tickets and tables on sale now.' },
  live: { stroke: 'Live tonight', main: 'The Nigerian Cinema Awards', sub: 'Watch the ceremony as it happens.' },
  winners: { stroke: 'Celebrating', main: "This Year's Winners", sub: 'See you at the next cycle.' },
};

export const Hero: React.FC<{ phase: Phase }> = ({ phase }) => {
  const open = useOpenModal();
  const copy = HEADLINES[phase];
  const countdown = countdownFor(phase);

  const actions: Record<Phase, React.ReactNode> = {
    launch: (
      <>
        <button className="reg-btn" onClick={() => open('partner')}>Partner Now</button>
        <button className="reg-btn" onClick={() => open('updates')}>Get Updates</button>
      </>
    ),
    entries: (
      <>
        <SubmitButton />
        <Link className="reg-btn" to="/categories">Categories</Link>
      </>
    ),
    shortlist: (
      <>
        <Link className="reg-btn" to="/tickets"><Ticket size={16} /> Get Tickets</Link>
        <Link className="reg-btn" to="/nominees">Nominees</Link>
      </>
    ),
    live: (
      <>
        <Link className="reg-btn" to="/live"><Radio size={16} /> Watch Live</Link>
        <Link className="reg-btn" to="/nominees">Nominees</Link>
      </>
    ),
    winners: (
      <>
        <Link className="reg-btn" to="/nominees?status=Winner"><Trophy size={16} /> Winners</Link>
        <button className="reg-btn" onClick={() => open('updates')}>Notify Me</button>
      </>
    ),
  };

  return (
    <header id="cover" className="always-dark">
      {IMAGES.heroVideo ? (
        <video className="cover-media" src={IMAGES.heroVideo} autoPlay muted loop playsInline aria-hidden="true" />
      ) : (
        <div className="cover-media cover-bg" aria-hidden="true">
          {IMAGES.hero && <img src={IMAGES.hero} alt="" />}
        </div>
      )}
      <div className="cover-shade" aria-hidden="true" />

      {/* Decorative floating photo tiles on the right, like a contact sheet */}
      <div className="cover-tiles" aria-hidden="true">
        <Photo className="ct ct1" src={IMAGES.stats[0]} />
        <Photo className="ct ct2" src={IMAGES.stats[1]} />
        <Photo className="ct ct3" src={IMAGES.stats[2]} />
        <span className="ct-arc" />
      </div>

      <div className="cover-container">
        <span className="cover-kicker">
          {phase === 'live' ? <span className="live-dot" /> : <Film size={13} />} {PHASE_LABELS[phase]} · {SITE.cycle}
        </span>

        <div className="cover-head">
          <h1 className="tagline">
            <span className="stroke">{copy.stroke}</span>
            <span className="solid">{copy.main}</span>
          </h1>
          <div className="patron-box">
            <span>{PATRON.label}</span>
            <div><Logo size={46} /><b>{PATRON.name}</b></div>
          </div>
        </div>

        <p className="cover-sub">{copy.sub}</p>
        <p className="cover-date">{DATES.ceremonyLabel}, Lagos, Nigeria</p>

        {countdown && <Countdown label={countdown.label} target={countdown.target} />}
        {countdown && <p className="count-caption">{countdown.label}</p>}

        <div className="cover-btns">{actions[phase]}</div>
      </div>
    </header>
  );
};

// Two rows of craft names scrolling in opposite directions, like a partner-logo strip.
export const CraftMarquee: React.FC = () => {
  const half = Math.ceil(CRAFTS.length / 2);
  const rows = [CRAFTS.slice(0, half), CRAFTS.slice(half)];
  return (
    <section className="our-boxes always-dark" aria-labelledby="crafts-title">
      <h2 id="crafts-title" className="our-title">The Crafts We Celebrate</h2>
      {rows.map((row, r) => (
        <div className={`carousel${r === 1 ? ' rtl' : ''}`} key={r}>
          <div className="carousel-track">
            {/* Duplicated so the -50% marquee loops seamlessly */}
            {[...row, ...row, ...row, ...row].map((craft, i) => (
              <span className="our-logo" key={i} aria-hidden={i >= row.length}>
                <Film size={20} /> {craft}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};
