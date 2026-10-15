import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Radio, ScrollText } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { CATEGORIES, DATES, RUN_OF_SHOW, SITE } from '../data';
import { useCountdown, type Phase } from '../lib/phase';
import { useMeta } from '../lib/meta';

const Clock: React.FC = () => {
  const left = useCountdown(new Date(DATES.ceremony).getTime());
  return (
    <div className="countdown" role="timer" aria-label="Broadcast begins in">
      {[['Days', left.days], ['Hours', left.hours], ['Mins', left.minutes], ['Secs', left.seconds]].map(([l, v]) => (
        <div className="count-box" key={l}>
          <strong>{String(v).padStart(2, '0')}</strong>
          <span>{l}</span>
        </div>
      ))}
    </div>
  );
};

export const Live: React.FC<{ phase: Phase }> = ({ phase }) => {
  useMeta('Live Broadcast', 'Watch the Nigerian Cinema Awards live.');
  const isLive = phase === 'live';

  return (
    <>
      <PageHeader
        title="Live"
        accent="Broadcast"
        intro={isLive ? 'The ceremony is live now.' : `The ceremony streams here live on the night, ${DATES.ceremonyLabel}.`}
      />

      <section className="page-section">
        <div className="wrap live-grid">
          <div>
            <div className="player">
              {isLive && SITE.liveStreamUrl ? (
                <iframe
                  src={SITE.liveStreamUrl}
                  title="Nigerian Cinema Awards live stream"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="player-idle">
                  <Radio size={48} strokeWidth={1.2} />
                  <p>{isLive ? 'The stream will start shortly.' : 'Broadcast begins in'}</p>
                  {phase === 'launch' || phase === 'entries' || phase === 'shortlist' ? <Clock /> : null}
                  {phase === 'winners' && <Link className="reg-btn" to="/nominees?status=Winner">See the Winners</Link>}
                </div>
              )}
            </div>

            <div className="social-feed">
              <h2><MessageCircle size={20} /> Join the conversation</h2>
              <p>
                Follow <b>{SITE.hashtag}</b> for red-carpet moments, winners and reactions. A live feed of posts will
                appear here on the night.
              </p>
            </div>
          </div>

          <aside className="booklet">
            <h2><ScrollText size={20} /> Digital programme</h2>
            <h3>Running order</h3>
            <ol>
              {RUN_OF_SHOW.map((item) => (
                <li key={item.time}><span>{item.time}</span>{item.title}</li>
              ))}
            </ol>
            <h3>Categories</h3>
            <ul className="booklet-cats">
              {CATEGORIES.map((c) => <li key={c.slug}>{c.title}</li>)}
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
};
