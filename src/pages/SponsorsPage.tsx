import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { Exhibit, Sponsors } from '../components/Sections';
import { useMeta } from '../lib/meta';

export const SponsorsPage: React.FC = () => {
  useMeta('Sponsors', 'Sponsorship tiers and partnership opportunities with the Nigerian Cinema Awards.');
  return (
    <>
      <PageHeader
        title="Our"
        accent="Sponsors"
        intro="Title, gold, silver and media partners who support the whole value chain of Nigerian cinema."
      />
      <Sponsors showPerks />
      <Exhibit />
    </>
  );
};
