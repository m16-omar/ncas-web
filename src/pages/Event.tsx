import React from 'react';
import { BedDouble, Accessibility, MapPin, Shirt } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { Faq } from '../components/Sections';
import { DATES, EVENT_INFO, FAQS, RUN_OF_SHOW } from '../data';
import { useMeta } from '../lib/meta';
import { useOpenModal } from '../lib/modal';

const INFO_ICONS = [MapPin, Shirt, BedDouble, Accessibility];

export const Event: React.FC = () => {
  useMeta('Event & Agenda', 'Venue, dress code, accommodation and the run of show for the Nigerian Cinema Awards ceremony.');
  const open = useOpenModal();

  return (
    <>
      <PageHeader
        title="Event &"
        accent="Agenda"
        intro={`Everything you need for ceremony night in ${DATES.ceremonyLabel}: venue, dress code, accommodation and the running order.`}
      />

      <section className="page-section">
        <div className="wrap">
          <div className="info-grid">
            {EVENT_INFO.map((item, i) => {
              const Icon = INFO_ICONS[i];
              return (
                <div className="info-card reveal" key={item.title}>
                  <Icon size={28} strokeWidth={1.5} />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="agenda">
        <div className="grid-lines left" aria-hidden="true" />
        <div className="wrap">
          <h2 className="title reveal">Run of <span>Show</span></h2>
          <p className="title-des reveal" style={{ marginTop: 14 }}>
            Provisional running order for ceremony night. Final times will be confirmed closer to the date.
          </p>
          <ol className="agenda-boxes">
            {RUN_OF_SHOW.map((item) => (
              <li className="agenda-box reveal" key={item.time}>
                <span className="agenda-time grad-text">{item.time}</span>
                <div><h3>{item.title}</h3></div>
              </li>
            ))}
          </ol>
          <div className="agenda-foot">
            <button className="reg-btn" onClick={() => open('tickets')}>Book Your Seat</button>
          </div>
        </div>
      </section>

      <Faq items={FAQS} />
    </>
  );
};
