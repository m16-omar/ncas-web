import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Camera, Clapperboard, Megaphone, Projector, Truck } from 'lucide-react';
import { Logo } from './Logo';
import { Photo } from './Photo';
import { CITIES, IMAGES, PILLARS, RIBBON_CTA, SITE, STATS, STORY } from '../data';

const PILLAR_ICONS = [Clapperboard, Projector, Truck, Megaphone];

// About block: photo collage on the left, copy on the right, hashtag behind.
export const Why: React.FC<{ children?: React.ReactNode; heading?: React.ReactNode }> = ({ children, heading }) => (
  <section id="why">
    <div className="wrap">
      <p className="hashtag" aria-hidden="true">{SITE.hashtag}</p>
      <div className="over-container reveal">
        <Photo className="over-small" src={IMAGES.aboutSmall} icon={Camera} />
        <span className="over-cir2" aria-hidden="true" />

        <div className="over-left">
          <Photo className="over-photo" src={IMAGES.about} alt="Nigerian Cinema Awards" label="NCAs" />
        </div>

        <div className="over-right">
          <h2>{heading ?? <>A Festival of Nigeria's <span>Finest Films</span></>}</h2>
          {children ?? (
            <>
              <p>{STORY.intro}</p>
              <p>
                The Nigerian Cinema Awards recognise and celebrate everyone creating for, championing and investing in
                the whole value chain of Nigerian cinema: production, exhibition, distribution and promotion. Every
                film released on Nigerian cinema screens is eligible, from Nollywood to Hollywood and Bollywood.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  </section>
);

// The four value-chain pillars as gradient tiles (used on the About page).
export const Pillars: React.FC = () => (
  <section className="pillars-sec">
    <div className="wrap">
      <h2 className="title reveal">Four <span>Pillars</span></h2>
      <div className="pillar-grid">
        {PILLARS.map((p, i) => {
          const Icon = PILLAR_ICONS[i];
          return (
            <div className="pillar-tile reveal" key={p.title}>
              <Icon size={40} strokeWidth={1.4} />
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

// Featured founder card, in the style of a "guest of honour" feature.
export const Founder: React.FC<{ full?: boolean }> = ({ full }) => (
  <section id="vip">
    <div className="wrap">
      <h2 className="title reveal">Our <span>Founder</span></h2>
      <div className="vip-container">
        <div className="spk-box feature reveal">
          <div className="spk-img">
            {IMAGES.founder ? <img src={IMAGES.founder} alt={STORY.founder} /> : <Logo size={140} />}
          </div>
          <div className="spk-info">
            <span className="spk-name">{STORY.founder}</span>
            <span className="spk-role">Founder</span>
            <span className="spk-org">{STORY.company}</span>
          </div>
        </div>
        <div className="spk-details reveal">
          <p>
            The Nigerian Cinema Awards is the brainchild of {STORY.founder}, founder of {STORY.company} and a passionate
            lover of everything Nigerian, especially Nigerian films.
          </p>
          <p>
            The awards reward the filmmakers, cinema operators, actors, cinematographers, directors and everyone who
            helps bring blockbuster films to cinema screens across Nigeria. They do it despite unreliable power, scarce
            funding, a difficult business environment and little government or technical support.
          </p>
          {full ? (
            <p>
              We hope the awards will put the spotlight on these talented people for all they do to keep the Nigerian
              cinema ecosystem alive: making films for cinemas, working on them, funding them, and keeping cinema
              houses running through every challenge.
            </p>
          ) : (
            <Link to="/about" className="text-link">Read our story →</Link>
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

  return <strong ref={ref}>{value}</strong>;
};

// Two rows of six tiles alternating photo and gradient number, offset like a checkerboard.
export const Numbers: React.FC = () => (
  <section className="numbers">
    <div className="wrap">
      <div className="numbers-boxes">
        {STATS.flatMap((stat, i) => {
          const photo = <Photo key={`p${i}`} className="num-box num-photo reveal" src={IMAGES.stats[i]} icon={Camera} />;
          const num = (
            <div className="num-box num reveal" key={`n${i}`}>
              <CountUp to={stat.value} />
              <span>{stat.label}</span>
            </div>
          );
          return i < 3 ? [photo, num] : [num, photo];
        })}
      </div>
    </div>
    <Ribbon />
  </section>
);

// Two plain text marquees: a call to action, then the cities where audiences watch.
export const Ribbon: React.FC = () => (
  <div className="ribbon-container" aria-hidden="true">
    <div className="ribbon cta">
      <div className="ribbon-track">
        {Array.from({ length: 12 }, (_, i) => <span key={i}>{RIBBON_CTA}</span>)}
      </div>
    </div>
    <div className="ribbon cities">
      <div className="ribbon-track">
        {[...CITIES, ...CITIES].map((c, i) => <span key={i}>{c}</span>)}
      </div>
    </div>
  </div>
);
