import React from 'react';
import { Handshake, ArrowUpRight, Sparkles } from 'lucide-react';
import { useOpenModal } from '../lib/modal';

interface Stakeholder {
  name: string;
  role: string;
  description: string;
  logo: string;
  badge: string;
}

const STAKEHOLDERS: Stakeholder[] = [
  {
    name: 'AFRIFF',
    role: 'Africa International Film Festival',
    badge: 'Festival & Market Consultations',
    description:
      'Africa’s premiere international film festival, providing strategic alignment on industry development, filmmaker engagement, and global market positioning.',
    logo: '/images/partners/afriff.png',
  },
  {
    name: 'FilmOne Entertainment',
    role: 'Filmhouse Group',
    badge: 'Exhibition & Distribution Systems',
    description:
      'West Africa’s leading theatrical film distribution and cinema network, consulting on theatrical box-office infrastructure, release windows, and exhibitor standards.',
    logo: '/images/partners/filmone.png',
  },
];

export const StakeholderBanner: React.FC = () => {
  const open = useOpenModal();

  return (
    <section id="stakeholders" className="stakeholder-sec" aria-labelledby="stakeholder-title">
      <div className="wrap">
        <div className="stakeholder-header reveal">
          <div className="stakeholder-kicker">
            <Handshake size={14} className="kicker-icon" />
            <span>Institutional Alignment</span>
            <span className="pine-badge">Industry Coalition</span>
          </div>
          <h2 id="stakeholder-title" className="title">
            Strategic Stakeholder <span>Consultations</span>
          </h2>
          <p className="stakeholder-lead">
            The Nigerian Cinema Awards is built through deep, continuous consultations with the leading institutions that
            anchor the Nigerian theatrical and festival landscape.
          </p>
        </div>

        <div className="stakeholder-grid">
          {STAKEHOLDERS.map((s) => (
            <div className="stakeholder-card reveal" key={s.name}>
              <div className="sh-card-rim" aria-hidden="true" />
              <div className="sh-logo-container">
                <img
                  src={s.logo}
                  alt={`${s.name} Official Logo`}
                  className="sh-logo-img"
                  loading="lazy"
                />
              </div>

              <div className="sh-card-content">
                <div className="sh-meta">
                  <span className="sh-badge">{s.badge}</span>
                  <h3 className="sh-name">{s.name}</h3>
                  <h4 className="sh-role">{s.role}</h4>
                </div>
                <p className="sh-desc">{s.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="stakeholder-foot reveal">
          <div className="sh-foot-note">
            <Sparkles size={16} className="foot-icon" />
            <span>Consultations remain ongoing as we expand the NCAs consultative council with guild leaders, exhibitors, and studio chiefs.</span>
          </div>
          <button className="reg-btn secondary" onClick={() => open('partner')}>
            Join The Consultation <ArrowUpRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
};
