import React from 'react';
import { Eye, Target } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { Why, Founder, Numbers } from '../components/About';
import { Market, Summit } from '../components/Sections';
import { STORY } from '../data';
import { useMeta } from '../lib/meta';

export const About: React.FC = () => {
  useMeta('About Us', STORY.mission);
  return (
    <>
      <PageHeader title="About" accent="Us" intro={STORY.intro} />
      <Founder full />

      <section className="page-section">
        <div className="wrap mv-grid">
          <article className="mv-card reveal">
            <Target size={40} strokeWidth={1.4} />
            <h2>Our <span>Mission</span></h2>
            <p>{STORY.mission}</p>
          </article>
          <article className="mv-card reveal">
            <Eye size={40} strokeWidth={1.4} />
            <h2>Our <span>Vision</span></h2>
            <p>{STORY.vision}</p>
          </article>
        </div>
      </section>

      <Why heading={<>Four Pillars of <span>Nigerian Cinema</span></>}>
        <p>
          The NCAs honour the complete, connected ecosystem behind every cinema release. Production makes the film.
          Distribution takes it to screens. Exhibition keeps those screens running. Promotion brings audiences through
          the doors.
        </p>
        <p>
          Every film released in Nigerian cinemas is eligible, spanning Nollywood, Hollywood and Bollywood, and the
          awards recognise the people and businesses driving the whole trade.
        </p>
      </Why>
      <Numbers />
      <Market />
      <Summit />
    </>
  );
};
