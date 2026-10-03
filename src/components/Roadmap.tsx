import React from 'react';
import { ROADMAP } from '../data';

export const Roadmap: React.FC = () => (
  <section id="roadmap" className="section">
    <div className="container">
      <div className="section-header">
        <span className="eyebrow">Pilot roadmap</span>
        <h2 className="section-title">The road to the <em>first ceremony</em></h2>
        <p className="section-desc">
          The pilot cycle runs from launch in late 2026 to the ceremony in April 2027.
        </p>
      </div>

      <ol className="timeline" style={{ listStyle: 'none' }}>
        {ROADMAP.map((phase) => (
          <li className={`phase${phase.status === 'current' ? ' current' : ''}`} key={phase.title}>
            <span className="period">{phase.period}</span>
            <div>
              <h3>
                {phase.title}
                {phase.status === 'current' && <span className="tag">In progress</span>}
              </h3>
              <p>{phase.description}</p>
            </div>
          </li>
        ))}
      </ol>

      <p className="note">Dates are provisional and may change as partners and the venue are confirmed.</p>
    </div>
  </section>
);
