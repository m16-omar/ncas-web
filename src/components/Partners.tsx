import React from 'react';
import { Award, Handshake, Megaphone, MonitorPlay, Users } from 'lucide-react';
import { PARTNER_BENEFITS, PARTNER_TIERS, type ModalType } from '../data';

const ICONS = [Award, MonitorPlay, Megaphone, Users, Handshake];

interface PartnersProps {
  onOpen: (type: ModalType) => void;
}

export const Partners: React.FC<PartnersProps> = ({ onOpen }) => (
  <section id="partners" className="section section-alt">
    <div className="container">
      <div className="partner-layout">
        <div>
          <div className="section-header left" style={{ marginBottom: 32 }}>
            <span className="eyebrow">Partner with us</span>
            <h2 className="section-title">Become a <em>founding partner</em></h2>
            <p className="section-desc">
              Partners in the pilot cycle help build a lasting institution for Nigerian cinema, and are
              credited as founding partners from the first ceremony onward.
            </p>
          </div>
          {PARTNER_BENEFITS.map((benefit, i) => {
            const Icon = ICONS[i];
            return (
              <div className="benefit" key={benefit.title}>
                <Icon className="icon" size={22} />
                <div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.text}</p>
                </div>
              </div>
            );
          })}
          <button className="btn btn-gold" style={{ marginTop: 32 }} onClick={() => onOpen('partner')}>
            Partnership Enquiry
          </button>
        </div>

        <div className="card" style={{ padding: 36 }}>
          {PARTNER_TIERS.map((tier) => (
            <div className="tier" key={tier.name}>
              <h4>{tier.name}</h4>
              <div className="slots">
                {Array.from({ length: tier.slots }, (_, i) => (
                  <button className="slot" key={i} onClick={() => onOpen('partner')}>
                    Your brand
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
