import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar, CalendarDays, Clapperboard, Film, Globe2, Layers, ListChecks, Megaphone, Projector, Truck,
} from 'lucide-react';
import { Logo } from './Logo';
import { PILLARS, RIBBON, STATS, STORY } from '../data';

const PILLAR_ICONS = [Clapperboard, Projector, Truck, Megaphone];
const NUMBER_ICONS = [ListChecks, Layers, Calendar, CalendarDays, Globe2, Film];

// Flip boxes for the four pillars beside the "about" copy.
export const Why: React.FC<{ children?: React.ReactNode; heading?: React.ReactNode }> = ({ children, heading }) => (
  <section id="why">
    <div className="grid-lines left" aria-hidden="true" />
    <div className="wrap">
      <div className="over-container reveal">
        <span className="over-cir" aria-hidden="true" />
        <span className="over-cir2" aria-hidden="true" />

        <div className="over-left four">
          {PILLARS.map((pillar, i) => {
            const Icon = PILLAR_ICONS[i];
            return (
              <div className="over-box" key={pillar.title} tabIndex={0}>
                <div className="flip-inner">
                  <div className="flip-front">
                    <Icon size={38} strokeWidth={1.5} />
                    <span className="over-name">{pillar.title}</span>
                  </div>
                  <div className="flip-back">{pillar.text}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="over-right">
          <h2>{heading ?? <>A Festival of Nigeria's <span>Finest Films</span></>}</h2>
          {children ?? (
            <>
              <p>{STORY.intro}</p>
              <p>
                The Nigerian Cinema Awards recognise and celebrate everyone creating for, championing and investing in
                the whole value chain of Nigerian cinema: production, exhibition, distribution and promotion.
              </p>
              <p>
                Every film released on Nigerian cinema screens is eligible, from Nollywood to Hollywood and Bollywood.
              </p>
              <Link to="/about" className="reg-btn ghost" style={{ alignSelf: 'flex-start', marginTop: 8 }}>Our Story</Link>
            </>
          )}
        </div>
      </div>
    </div>
  </section>
);

// Featured founder block, styled like a "guest of honour" feature.
export const Founder: React.FC<{ full?: boolean }> = ({ full }) => (
  <section id="vip">
    <div className="wrap">
      <h2 className="title reveal">Our <span>Story</span></h2>
      <div className="vip-container">
        <div className="spk-box reveal">
          <div className="spk-art"><Logo size={150} /></div>
          <div className="spk-blur">
            <span className="spk-name">{STORY.founder}</span>
            <span className="spk-role">Founder</span>
            <span className="spk-org">{STORY.company}</span>
          </div>
        </div>
        <div className="spk-details reveal">
          <h3>
            Built by a lover of Nigerian films
            <small>For everyone who brings films to Nigerian cinema screens</small>
          </h3>
          <p>
            The Nigerian Cinema Awards is the brainchild of {STORY.founder}, founder of {STORY.company} and a passionate
            lover of everything Nigerian, especially Nigerian films.
          </p>
          <p>
            The awards reward the filmmakers, cinema operators, actors, cinematographers, directors and everyone who
            helps bring blockbuster films to cinema screens across Nigeria. They do it despite unreliable power,
            scarce funding, a difficult business environment and little government or technical support.
          </p>
          {full ? (
            <p>
              We hope the awards will put the spotlight on these talented people for all they do to keep the Nigerian
              cinema ecosystem alive: making films for cinemas, working on them, funding them, and keeping cinema
              houses running through every challenge.
            </p>
          ) : (
            <Link to="/about" className="reg-btn" style={{ marginTop: 8 }}>Read Our Story</Link>
          )}
        </div>
      </div>
    </div>
  </section>
);

const CountUp: React.FC<{ to: number }> = ({ to }) => {
  const ref = useRef<HTMLElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / 1400);
        setValue(Math.round(to * (1 - Math.pow(1 - t, 3))));
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [to]);

  return <strong ref={ref} className="grad-text">{value}</strong>;
};

export const Numbers: React.FC = () => (
  <section className="numbers">
    <div className="wrap">
      <div className="numbers-boxes reveal">
        {STATS.flatMap((stat, i) => {
          const Icon = NUMBER_ICONS[i];
          const icon = (
            <div className="num-box icon" key={`i${i}`} aria-hidden="true">
              <Icon size={44} strokeWidth={1.25} />
            </div>
          );
          const num = (
            <div className="num-box num" key={`n${i}`}>
              <CountUp to={stat.value} />
              <span>{stat.label}</span>
            </div>
          );
          // Alternate icon/number, flipping order on the second row like a checkerboard.
          return i < 3 ? [icon, num] : [num, icon];
        })}
      </div>
    </div>
    <Ribbon />
  </section>
);

export const Ribbon: React.FC = () => (
  <div id="ribbon" aria-hidden="true">
    {(['left', 'right'] as const).map((dir) => (
      <div className={`ribbon ${dir}`} key={dir}>
        <div className="ribbon-track">
          {[...RIBBON, ...RIBBON, ...RIBBON, ...RIBBON].map((item, i) => (
            <span key={i}>{item}</span>
          ))}
        </div>
      </div>
    ))}
  </div>
);
