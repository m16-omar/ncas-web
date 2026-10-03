import React, { useState } from 'react';
import { CATEGORIES, type Category } from '../data';

const GROUPS: Array<'All' | Category['group']> = ['All', 'Film', 'Performance', 'Craft', 'Industry', 'Special'];

export const Categories: React.FC = () => {
  const [group, setGroup] = useState<(typeof GROUPS)[number]>('All');
  const visible = group === 'All' ? CATEGORIES : CATEGORIES.filter((c) => c.group === group);

  return (
    <section id="categories" className="section">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Award categories</span>
          <h2 className="section-title">Honouring every <em>craft</em></h2>
          <p className="section-desc">
            The categories cover the film, its performances, the crafts behind it and the businesses that
            bring it to cinemas.
          </p>
        </div>

        <div className="filter" role="group" aria-label="Filter categories">
          {GROUPS.map((g) => (
            <button key={g} aria-pressed={group === g} onClick={() => setGroup(g)}>
              {g}
            </button>
          ))}
        </div>

        <div className="category-grid">
          {visible.map((cat) => (
            <article className="category" key={cat.title}>
              <span className="group">{cat.group}</span>
              <h3>{cat.title}</h3>
              <p>{cat.description}</p>
            </article>
          ))}
        </div>

        <p className="note">
          Provisional list. Final categories, definitions and eligibility rules will be published in December 2026.
        </p>
      </div>
    </section>
  );
};
