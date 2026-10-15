import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarDays, Clapperboard, Film, Radio, Ticket, Trophy } from 'lucide-react';
import { Logo } from './Logo';
import { CRAFTS, DATES, KEY_DATES, SITE } from '../data';
import { countdownFor, PHASE_LABELS, useCountdown, type Phase } from '../lib/phase';
import { useOpenModal } from '../lib/modal';

const Countdown: React.FC<{ label: string; target: number }> = ({ label, target }) => {
  const left = useCountdown(target);
  const units = [
    { label: 'Days', value: left.days },
    { label: 'Hours', value: left.hours },
    { label: 'Mins', value: left.minutes },
    { label: 'Secs', value: left.seconds },
  ];
  return (
    <div>
      <p className="count-label">{label}</p>
      <div className="countdown" role="timer" aria-label={label}>
        {units.map((unit) => (
          <div className="count-box" key={unit.label}>
            <strong>{String(unit.value).padStart(2, '0')}</strong>
            <span>{unit.label}</span>
          </div>
        ))}
      </div>
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

const HEADLINES: Record<Phase, { stroke: string; main: string; grad: string; sub: string }> = {
  launch: {
    stroke: "Celebrating Nigeria's",
    main: 'Finest Films',
    grad: 'Made for Cinema',
    sub: 'An award for distinction in Nigerian films made for the cinema, and for everyone across the value chain who brings them to the screen.',
  },
  entries: {
    stroke: 'Entries are',
    main: 'Now Open',
    grad: 'Submit Your Film',
    sub: 'Films released in Nigerian cinemas in the last 12 months are eligible across 26 categories. Entries close on 31 January 2027.',
  },
  shortlist: {
    stroke: 'The nominees',
    main: 'Are In',
    grad: 'Join Us On The Night',
    sub: 'The jury has spoken. Explore this year’s nominees and book your seat at the ceremony.',
  },
  live: {
    stroke: 'Live tonight',
    main: 'Nigerian Cinema',
    grad: 'Awards',
    sub: 'Watch the ceremony live, follow the winners as they are announced and join the conversation.',
  },
  winners: {
    stroke: 'Celebrating',
    main: 'This Year’s',
    grad: 'Winners',
    sub: 'Explore the winners and highlights from the ceremony, and be first to hear about the next cycle.',
  },
};

export const Hero: React.FC<{ phase: Phase }> = ({ phase }) => {
  const open = useOpenModal();
  const copy = HEADLINES[phase];
  const countdown = countdownFor(phase);

  const actions: Record<Phase, React.ReactNode> = {
    launch: (
      <>
        <button className="reg-btn" onClick={() => open('updates')}>Get Updates</button>
        <Link className="reg-btn ghost" to="/categories">View Categories</Link>
      </>
    ),
    entries: (
      <>
        <SubmitButton />
        <Link className="reg-btn ghost" to="/categories">Rules & Categories</Link>
      </>
    ),
    shortlist: (
      <>
        <Link className="reg-btn" to="/tickets"><Ticket size={16} /> Buy Tickets</Link>
        <Link className="reg-btn ghost" to="/nominees">See Nominees</Link>
      </>
    ),
    live: (
      <>
        <Link className="reg-btn" to="/live"><Radio size={16} /> Watch Live</Link>
        <Link className="reg-btn ghost" to="/nominees">Nominees</Link>
      </>
    ),
    winners: (
      <>
        <Link className="reg-btn" to="/nominees?status=Winner"><Trophy size={16} /> See Winners</Link>
        <button className="reg-btn ghost" onClick={() => open('updates')}>Notify Me for Next Year</button>
      </>
    ),
  };

  return (
    <header id="cover" className="always-dark">
      <div className="cover-bg" aria-hidden="true" />
      <div className="cover-shade" aria-hidden="true" />

      <div className="cover-container">
        <div className="cover-main">
          <span className="cover-kicker">
            {phase === 'live' ? <span className="live-dot" /> : <Film size={14} />} {PHASE_LABELS[phase]} · {SITE.cycle}
          </span>
          <h1 className="tagline">
            <span className="stroke">{copy.stroke}</span>
            {copy.main}
            <span className="grad-text">{copy.grad}</span>
          </h1>
          <p className="cover-sub">{copy.sub}</p>
          <p className="cover-date">
            <CalendarDays size={15} /> <b>Ceremony</b> · {DATES.ceremonyLabel} &nbsp;|&nbsp; <b>Lagos, Nigeria</b>
          </p>

          <div className="countdown-cont">
            {countdown && <Countdown label={countdown.label} target={countdown.target} />}
            <div className="cover-btns">{actions[phase]}</div>
          </div>
        </div>

        <div className="cover-side">
          <div className="spon-box">
            <span className="spon-head">An initiative of</span>
            <div className="spon-body"><Logo size={44} /> NCAs</div>
          </div>
          <div className="spon-box">
            <span className="spon-head">Key dates</span>
            <ul className="key-dates">
              {KEY_DATES.map((d) => (
                <li key={d.label}><span>{d.label}</span><b>{d.date}</b></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export const CraftMarquee: React.FC = () => {
  const half = Math.ceil(CRAFTS.length / 2);
  const rows = [CRAFTS.slice(0, half), CRAFTS.slice(half)];
  return (
    <div className="our-boxes" aria-label="Crafts and disciplines the NCAs recognise">
      {rows.map((row, r) => (
        <div className={`carousel${r === 1 ? ' rtl' : ''}`} key={r}>
          <div className="carousel-track">
            {/* Duplicated so the -50% marquee loops seamlessly */}
            {[...row, ...row, ...row, ...row].map((craft, i) => (
              <div className="our-logo" key={i} aria-hidden={i >= row.length}>
                <Film size={18} /> {craft}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
