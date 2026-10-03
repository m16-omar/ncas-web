import React from 'react';
import { UserRound } from 'lucide-react';

const SEATS = 8;

export const Jury: React.FC = () => (
  <section id="jury" className="section section-alt">
    <div className="container">
      <div className="section-header">
        <span className="eyebrow">Jury &amp; academy</span>
        <h2 className="section-title">The jury will be <em>announced in December 2026</em></h2>
        <p className="section-desc">
          A panel of industry professionals and subject experts will judge the pilot cycle. Full profiles
          will be published here when the jury is announced.
        </p>
      </div>

      <div className="jury-grid">
        {Array.from({ length: SEATS }, (_, i) => (
          <div className="jury-card" key={i}>
            <div className="jury-portrait">
              <UserRound size={72} strokeWidth={1} />
            </div>
            <div className="jury-info">
              <h3>To be announced</h3>
              <p>Jury member</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
