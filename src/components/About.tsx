import React from 'react';
import { PILLARS, STATS } from '../data';

export const About: React.FC = () => (
  <section id="about" className="section">
    <div className="container">
      <div className="about-grid">
        <div className="about-body">
          <span className="eyebrow">About the NCAs</span>
          <h2 className="section-title">
            An institution first, <em>a ceremony second.</em>
          </h2>
          <p className="about-lede">
            The NCAs are a platform built only for cinema. They exist to recognise, document, celebrate and
            strengthen theatrical cinema in Nigeria.
          </p>
          <p>
            The awards night is the most visible part of something bigger: recognition, industry data,
            professional visibility, audience engagement, archiving, capacity building and an ongoing
            conversation about the Nigerian theatrical ecosystem.
          </p>
          <p>
            The NCAs are Nigerian in origin and identity, held to an international standard, and built to
            last for decades.
          </p>
        </div>

        <div className="pillars">
          {PILLARS.map((pillar, i) => (
            <div className="pillar" key={pillar.title}>
              <span className="num">0{i + 1}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export const Stats: React.FC = () => (
  <div className="container" style={{ padding: '0 24px' }}>
    <div className="stats">
      {STATS.map((stat) => (
        <div className="stat" key={stat.label}>
          <strong className="gold-text">{stat.value}</strong>
          <span>{stat.label}</span>
        </div>
      ))}
    </div>
  </div>
);
