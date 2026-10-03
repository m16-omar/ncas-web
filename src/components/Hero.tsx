import React, { useEffect, useState } from 'react';
import { CalendarDays, Clapperboard, ShieldCheck } from 'lucide-react';
import { SITE, type ModalType } from '../data';

interface HeroProps {
  onOpen: (type: ModalType) => void;
}

const getTimeLeft = (target: number) => {
  const diff = Math.max(0, target - Date.now());
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff / 3_600_000) % 24),
    minutes: Math.floor((diff / 60_000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

export const Hero: React.FC<HeroProps> = ({ onOpen }) => {
  const target = new Date(SITE.countdownTarget).getTime();
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(target));

  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(getTimeLeft(target)), 1000);
    return () => clearInterval(interval);
  }, [target]);

  const units = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <header id="home" className="hero">
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-content">
        <span className="hero-badge">
          <span className="dot" />
          Announcing the {SITE.cycle}
        </span>

        <h1>
          <span className="line">Nigerian</span>
          <span className="line italic gold-text">Cinema Awards</span>
        </h1>

        <p className="hero-tagline">{SITE.tagline}</p>

        <p className="countdown-label">{SITE.countdownLabel} in</p>
        <div className="countdown" role="timer" aria-label={`${SITE.countdownLabel} countdown`}>
          {units.map((unit) => (
            <div key={unit.label}>
              <strong>{String(unit.value).padStart(2, '0')}</strong>
              <span>{unit.label}</span>
            </div>
          ))}
        </div>

        <div className="hero-actions">
          <button className="btn btn-gold" onClick={() => onOpen('submission')}>
            <Clapperboard size={16} /> Notify Me: Submissions
          </button>
          <button className="btn btn-ghost" onClick={() => onOpen('partner')}>
            Become a Founding Partner
          </button>
        </div>

        <div className="hero-meta">
          <span><CalendarDays size={16} color="var(--gold)" /> Ceremony · {SITE.ceremony}</span>
          <span><ShieldCheck size={16} color="var(--gold)" /> Independent jury &amp; audited results</span>
        </div>
      </div>
    </header>
  );
};
