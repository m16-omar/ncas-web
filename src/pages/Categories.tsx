import React, { useEffect, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Award, Search } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { CATEGORY_ICONS, TRACK_COLORS } from '../lib/categories';
import { CATEGORIES, PILLARS, TRACKS, type Pillar, type Track } from '../data';
import { useMeta } from '../lib/meta';

export const Categories: React.FC = () => {
  useMeta('Categories & Guidelines', 'All 26 Nigerian Cinema Awards categories, with criteria and eligibility rules.');
  const { hash } = useLocation();
  const [track, setTrack] = useState<Track | 'All'>('All');
  const [pillar, setPillar] = useState<Pillar | 'All'>('All');
  const [query, setQuery] = useState('');

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return CATEGORIES.filter(
      (c) =>
        (track === 'All' || c.track === track) &&
        (pillar === 'All' || c.pillar === pillar) &&
        (!q || c.title.toLowerCase().includes(q) || c.criteria.toLowerCase().includes(q)),
    );
  }, [track, pillar, query]);

  // Deep links like /categories#best-sound scroll to and highlight the card.
  useEffect(() => {
    if (!hash) return;
    const el = document.getElementById(hash.slice(1));
    el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, [hash]);

  return (
    <>
      <PageHeader
        title="Award"
        accent="Categories"
        intro="26 categories across the four pillars of Nigerian cinema. Filter by track or pillar, or search for a craft."
      />

      <section className="page-section">
        <div className="wrap">
          <div className="filters reveal">
            <label className="search">
              <Search size={18} />
              <input
                type="search"
                placeholder="Search categories…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Search categories"
              />
            </label>
            <div className="chip-row" role="group" aria-label="Filter by track">
              {(['All', ...TRACKS] as const).map((t) => (
                <button key={t} className="chip" aria-pressed={track === t} onClick={() => setTrack(t)}>{t}</button>
              ))}
            </div>
            <div className="chip-row" role="group" aria-label="Filter by pillar">
              {(['All', ...PILLARS.map((p) => p.title)] as const).map((p) => (
                <button key={p} className="chip small" aria-pressed={pillar === p} onClick={() => setPillar(p)}>
                  {p === 'All' ? 'All pillars' : p}
                </button>
              ))}
            </div>
          </div>

          <p className="result-count" aria-live="polite">
            Showing {visible.length} of {CATEGORIES.length} categories
          </p>

          {visible.length ? (
            <div className="cat-grid">
              {visible.map((c) => {
                const Icon = CATEGORY_ICONS[c.slug] ?? Award;
                return (
                  <article
                    id={c.slug}
                    key={c.slug}
                    className={`cat-card${hash === `#${c.slug}` ? ' target' : ''}`}
                    style={{ '--track': TRACK_COLORS[c.track] } as React.CSSProperties}
                  >
                    <div className="cat-top">
                      <Icon size={30} strokeWidth={1.4} />
                      <span className="cat-track">{c.track}</span>
                    </div>
                    <h2>{c.title}</h2>
                    <p>{c.criteria}</p>
                    <span className="cat-pillar">{c.pillar}</span>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="empty">
              <p>No categories match your filters.</p>
              <button className="reg-btn ghost" onClick={() => { setTrack('All'); setPillar('All'); setQuery(''); }}>
                Clear filters
              </button>
            </div>
          )}

          <div className="callout reveal">
            <div>
              <h2>Eligibility in brief</h2>
              <p>
                Films released in Nigerian cinemas in the last 12 months, in any language with English subtitles,
                including films entered for or awarded by other awards. Category definitions are provisional until the
                rules are confirmed in December 2026.
              </p>
            </div>
            <Link className="reg-btn" to="/submit">Full Rules & Submission</Link>
          </div>
        </div>
      </section>
    </>
  );
};
