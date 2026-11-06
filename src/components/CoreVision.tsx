import React from 'react';
import { BarChart3, ShieldCheck, Users, Film, ArrowUpRight } from 'lucide-react';
import { useOpenModal } from '../lib/modal';

interface VariableItem {
  num: string;
  title: string;
  tagline: string;
  summary: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  deliverables: string[];
}

const VARIABLES: VariableItem[] = [
  {
    num: '01',
    title: 'Data Transparency',
    tagline: 'Audited Metrics & Real Box-Office Intelligence',
    summary:
      'Eliminating speculative figures by institutionalizing verified theatrical reporting, box-office audits, and verifiable data infrastructure across all cinema screens nationwide.',
    icon: BarChart3,
    deliverables: ['Audited Box-Office Metrics', 'Standardized Release Windows', 'Verifiable Attendance Data'],
  },
  {
    num: '02',
    title: 'Investment De-risking',
    tagline: 'Structured Capital & Institutional Predictability',
    summary:
      'Lowering the barrier for commercial banks, private equity, and institutional funds by formalizing risk-mitigation frameworks and validating commercial cinematic returns.',
    icon: ShieldCheck,
    deliverables: ['Institutional Co-Financing Frameworks', 'Contractual Standardization', 'Commercial Track-Record Validation'],
  },
  {
    num: '03',
    title: 'Labor Wellbeing',
    tagline: 'Dignity of Work & Creative Labor Protection',
    summary:
      'Protecting the creative and technical workforce behind the camera—from screenwriters and camera crews to sound engineers and grips—through fair compensation, credits, and safety.',
    icon: Users,
    deliverables: ['Fair Compensation Standards', 'Credit Sanctity & Recognition', 'Crew Welfare & Safety Protocols'],
  },
  {
    num: '04',
    title: 'Theatrical Resilience',
    tagline: 'Defending & Expanding the Big-Screen Window',
    summary:
      'Safeguarding the theatrical window and bolstering cinema exhibition infrastructure beyond metropolitan hubs to keep cinema the supreme economic engine of Nigerian storytelling.',
    icon: Film,
    deliverables: ['Multiplex Expansion Support', 'Theatrical Window Protection', 'Cinema Culture Preservation'],
  },
];

export const CoreVision: React.FC = () => {
  const open = useOpenModal();

  return (
    <section id="core-vision" className="core-vision-sec" aria-labelledby="vision-heading">
      <div className="wrap">
        <div className="vision-header reveal">
          <div className="vision-kicker">
            <span className="gold-dot" />
            <span className="kicker-text">The Four Strategic Variables</span>
            <span className="pine-pill">Institutional Architecture</span>
          </div>
          <h2 id="vision-heading" className="title">
            Our <span>Core Vision</span>
          </h2>
          <p className="vision-lead">
            The Nigerian Cinema Awards (NCAs) is structured not merely as an annual celebration, but as an industry-building
            intervention. We are building the institutional framework necessary to transition Nigerian cinema from informal
            hustle to a robust, globally bankable screen economy through four interconnected variables:
          </p>
        </div>

        <div className="variables-grid">
          {VARIABLES.map((v) => {
            const Icon = v.icon;
            return (
              <div className="var-card reveal" key={v.title}>
                <div className="var-card-glow" aria-hidden="true" />
                <div className="var-top">
                  <span className="var-num">{v.num}</span>
                  <div className="var-icon-wrap">
                    <Icon size={24} />
                  </div>
                </div>

                <div className="var-body">
                  <h3 className="var-title">{v.title}</h3>
                  <p className="var-tagline">{v.tagline}</p>
                  <p className="var-summary">{v.summary}</p>

                  <ul className="var-deliverables">
                    {v.deliverables.map((d) => (
                      <li key={d}>
                        <span className="bullet-gold">✦</span> {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <div className="vision-banner reveal">
          <div className="vision-banner-content">
            <span className="vb-badge">Institutional Charter</span>
            <h3>"Institutionalizing Prestige. Formalizing Value Chains. Protecting Creative Labor."</h3>
            <p>
              Join the Academy, exhibitors, filmmakers, and financial institutions collaborating to secure the future of
              Nigerian cinema.
            </p>
          </div>
          <div className="vision-banner-actions">
            <button className="reg-btn" onClick={() => open('partner')}>
              Partner With The NCAs <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

