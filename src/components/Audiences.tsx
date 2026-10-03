import React from 'react';
import { AUDIENCES } from '../data';

export const Audiences: React.FC = () => (
  <section className="section section-alt">
    <div className="container">
      <div className="section-header">
        <span className="eyebrow">Who it's for</span>
        <h2 className="section-title">Built for the people who <em>make cinema happen</em></h2>
      </div>

      <div className="audience-grid">
        <div className="card">
          <h3>Who the NCAs serve</h3>
          <p>How closely each group is involved in the awards cycle.</p>
          <div className="bars" style={{ marginTop: 28 }}>
            {AUDIENCES.serve.map((row) => (
              <div className="bar-row" key={row.label}>
                <div className="label">
                  <span>{row.label}</span>
                </div>
                <div className="bar-track">
                  <div className="bar-fill" style={{ width: `${row.share}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h3>Ways to take part</h3>
          <p>Every cycle has a role for practitioners, partners, press and audiences.</p>
          <div className="chips" style={{ marginTop: 28 }}>
            {AUDIENCES.participate.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
