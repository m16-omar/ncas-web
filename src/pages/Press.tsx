import React from 'react';
import { BadgeCheck, Camera, FolderOpen, Newspaper } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { Gallery } from '../components/Sections';
import { PRESS_ITEMS, PRESS_RELEASES, SITE } from '../data';
import { useMeta } from '../lib/meta';
import { useOpenModal } from '../lib/modal';

const ICONS = [FolderOpen, Newspaper, Camera, BadgeCheck];

export const Press: React.FC = () => {
  useMeta('Media & Press', 'Press releases, media kit and accreditation for the Nigerian Cinema Awards.');
  const open = useOpenModal();

  return (
    <>
      <PageHeader
        title="Media &"
        accent="Press"
        intro={<>Official releases, media kit and high-res assets. For press enquiries, email <a className="link" href={`mailto:${SITE.emails.press}`}>{SITE.emails.press}</a>.</>}
      />

      <section className="page-section">
        <div className="wrap">
          <div className="press-grid">
            {PRESS_ITEMS.map((item, i) => {
              const Icon = ICONS[i];
              const isAccreditation = i === 3;
              return (
                <div className="press-card reveal" key={item.title}>
                  <Icon size={34} strokeWidth={1.4} />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  {isAccreditation ? (
                    <button className="sum-more" onClick={() => open('press')}>Apply now</button>
                  ) : (
                    <span className="soon">Available at launch</span>
                  )}
                </div>
              );
            })}
          </div>

          <h2 className="title small reveal" style={{ marginTop: 80 }}>Press <span>Releases</span></h2>
          {PRESS_RELEASES.length ? (
            <ul className="release-list">
              {PRESS_RELEASES.map((r) => (
                <li key={r.href}>
                  <span>{r.date}</span>
                  <a href={r.href}>{r.title}</a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="title-des reveal" style={{ marginTop: 16 }}>
              The first release will be published with the public announcement in November 2026.
            </p>
          )}
        </div>
      </section>
      <Gallery />
    </>
  );
};
