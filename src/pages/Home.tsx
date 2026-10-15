import React from 'react';
import { Hero, CraftMarquee } from '../components/Hero';
import { Why, Founder, Numbers } from '../components/About';
import {
  Attend, Themes, Market, Summit, Exhibit, Speakers, Sponsors, Agenda, Gallery, Faq,
} from '../components/Sections';
import { useMeta } from '../lib/meta';
import type { Phase } from '../lib/phase';

export const Home: React.FC<{ phase: Phase }> = ({ phase }) => {
  useMeta('');
  return (
    <>
      <Hero phase={phase} />
      <CraftMarquee />
      <Why />
      <Founder />
      <Numbers />
      <Attend />
      <Themes />
      <Market />
      <Summit />
      <Exhibit />
      <Speakers />
      <Sponsors />
      <Agenda />
      <Gallery />
      <Faq />
    </>
  );
};
