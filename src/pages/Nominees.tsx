import React, { useMemo, useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { ArrowLeft, Search, Share2, Trophy } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { TRACK_COLORS } from '../lib/categories';
import { CATEGORIES, DATES, NOMINEES, SITE, TRACKS, type Nominee } from '../data';
import { useMeta } from '../lib/meta';
import { useOpenModal } from '../lib/modal';

const categoryOf = (n: Nominee) => CATEGORIES.find((c) => c.slug === n.category);

async function share(n: Nominee) {
  const url = `${SITE.url}/nominees/${n.id}`;
  const text = `${n.name} is a ${n.status === 'Winner' ? 'winner' : 'nominee'} for ${categoryOf(n)?.title} at the ${SITE.name} ${SITE.hashtag}`;
  try {
    if (navigator.share) await navigator.share({ title: SITE.name, text, url });
    else await navigator.clipboard.writeText(`${text} ${url}`);
  } catch {
    // The visitor cancelled the share sheet.
  }
}

const NomineeCard: React.FC<{ n: Nominee }> = ({ n }) => {
  const cat = categoryOf(n);
  return (
    <article className="nom-card" style={{ '--track': cat ? TRACK_COLORS[cat.track] : undefined } as React.CSSProperties}>
      <Link to={`/nominees/${n.id}`} className="nom-art">
        {n.image ? <img src={n.image} alt="" loading="lazy" /> : <Trophy size={56} strokeWidth={1} />}
        {n.status === 'Winner' && <span className="nom-badge">Winner</span>}
      </Link>
      <div className="nom-body">
        <span className="cat-track">{cat?.title}</span>
        <h2><Link to={`/nominees/${n.id}`}>{n.name}</Link></h2>
        <p>{n.film}</p>
        <button className="nom-share" onClick={() => share(n)} aria-label={`Share ${n.name}`}>
          <Share2 size={16} /> Share
        </button>
      </div>
    </article>
  );
};

export const Nominees: React.FC = () => {
  useMeta('Nominees & Winners', 'Explore the nominees and winners of the Nigerian Cinema Awards.');
  const open = useOpenModal();
  const [params, setParams] = useSearchParams();
  const [query, setQuery] = useState('');

  const years = [...new Set(NOMINEES.map((n) => n.year))].sort((a, b) => b - a);
  const year = params.get('year') ?? 'All';
  const status = params.get('status') ?? 'All';
  const track = params.get('track') ?? 'All';

  const setFilter = (key: string, value: string) => {
    const next = new URLSearchParams(params);
    if (value === 'All') next.delete(key);
    else next.set(key, value);
    setParams(next, { replace: true });
  };

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return NOMINEES.filter((n) => {
      const cat = categoryOf(n);
      return (
        (year === 'All' || String(n.year) === year) &&
        (status === 'All' || n.status === status) &&
        (track === 'All' || cat?.track === track) &&
        (!q || `${n.name} ${n.film} ${cat?.title}`.toLowerCase().includes(q))
      );
    });
  }, [year, status, track, query]);

  return (
    <>
      <PageHeader
        title="Nominees &"
        accent="Winners"
        intro="A permanent trophy room for every NCAs cycle. Filter by year, status or track, and share a nominee with one click."
      />

      <section className="page-section">
        <div className="wrap">
          {NOMINEES.length === 0 ? (
            <div className="empty big reveal">
              <Trophy size={64} strokeWidth={1} />
              <h2>Nominees will be announced in February 2027</h2>
              <p>
                Entries open on 1 January 2027. The jury will review every submission, and nominees for all 26
                categories will be revealed here and at a special announcement event. The ceremony follows in{' '}
                {DATES.ceremonyLabel}.
              </p>
              <div className="cover-btns">
                <button className="reg-btn" onClick={() => open('updates')}>Notify Me</button>
                <Link className="reg-btn ghost" to="/categories">See the Categories</Link>
              </div>
            </div>
          ) : (
            <>
              <div className="filters">
                <label className="search">
                  <Search size={18} />
                  <input
                    type="search"
                    placeholder="Search nominees, films or categories…"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    aria-label="Search nominees"
                  />
                </label>
                <div className="chip-row" role="group" aria-label="Filter by status">
                  {['All', 'Shortlist', 'Nominee', 'Winner'].map((s) => (
                    <button key={s} className="chip" aria-pressed={status === s} onClick={() => setFilter('status', s)}>{s}</button>
                  ))}
                </div>
                <div className="chip-row" role="group" aria-label="Filter by year and track">
                  {['All', ...years.map(String)].map((y) => (
                    <button key={y} className="chip small" aria-pressed={year === y} onClick={() => setFilter('year', y)}>
                      {y === 'All' ? 'All years' : y}
                    </button>
                  ))}
                  {['All', ...TRACKS].map((t) => (
                    <button key={t} className="chip small" aria-pressed={track === t} onClick={() => setFilter('track', t)}>
                      {t === 'All' ? 'All tracks' : t}
                    </button>
                  ))}
                </div>
              </div>
              <p className="result-count" aria-live="polite">{visible.length} results</p>
              <div className="nom-grid">
                {visible.map((n) => <NomineeCard key={n.id} n={n} />)}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export const NomineeProfile: React.FC = () => {
  const { id } = useParams();
  const n = NOMINEES.find((x) => x.id === id);
  const cat = n && categoryOf(n);
  useMeta(n ? `${n.name}, ${cat?.title}` : 'Nominee not found', n?.blurb);

  if (!n) {
    return (
      <PageHeader title="Nominee" accent="Not Found" intro="This nominee page doesn't exist, or has moved.">
        <Link className="reg-btn" to="/nominees" style={{ marginTop: 28 }}>All Nominees</Link>
      </PageHeader>
    );
  }

  return (
    <>
      <PageHeader title={n.name} intro={`${n.status} · ${cat?.title} · ${n.year}`}>
        <Link className="crumb-back" to="/nominees"><ArrowLeft size={16} /> All nominees</Link>
      </PageHeader>
      <section className="page-section">
        <div className="wrap profile">
          <div className="nom-art large">
            {n.image ? <img src={n.image} alt={n.name} /> : <Trophy size={96} strokeWidth={1} />}
          </div>
          <div>
            <h2 className="title small">{n.film}</h2>
            {n.blurb && <p className="title-des" style={{ marginTop: 16 }}>{n.blurb}</p>}
            <button className="reg-btn" style={{ marginTop: 28 }} onClick={() => share(n)}>
              <Share2 size={16} /> Share
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
