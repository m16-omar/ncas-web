import React from 'react';
import { FileSearch, Gavel, LockKeyhole } from 'lucide-react';
import { INTEGRITY } from '../data';

const ICONS = [FileSearch, Gavel, LockKeyhole];

export const Integrity: React.FC = () => (
  <section id="integrity" className="section">
    <div className="container">
      <div className="integrity">
        <div className="integrity-feature">
          <span className="eyebrow">Integrity &amp; governance</span>
          <blockquote>
            “Scores and winners stay confidential at every stage until the envelope is handed over on stage.”
          </blockquote>
          <p>
            The Academy &amp; Secretariat, led by the Head of Secretariat, sets category definitions,
            eligibility criteria and voting rules. Jury selection is agreed with the Founder and Board of
            Trustees, and every score can be audited.
          </p>
        </div>

        <div className="integrity-list">
          {INTEGRITY.map((item, i) => {
            const Icon = ICONS[i];
            return (
              <div className="card integrity-item" key={item.title}>
                <span className="icon"><Icon size={24} /></span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);
