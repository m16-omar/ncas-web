import React from 'react';
import { Clock, Download } from 'lucide-react';
import { AGENDA } from '../data';

interface AgendaProps {
  onOpenAgendaModal: () => void;
}

export const AgendaSection: React.FC<AgendaProps> = ({ onOpenAgendaModal }) => {
  return (
    <section id="agenda" className="section" style={{ background: '#05080e', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
      <div className="max-w-content">
        <div className="section-header">
          <div className="section-tag">
            <Clock size={14} /> SUMMIT SCHEDULE
          </div>
          <h2 className="section-title">
            CONFERENCE <span>AGENDA</span>
          </h2>
          <p className="section-desc">
            An action-packed day of keynotes, executive panel debates, product announcements, and high-level regulatory sessions.
          </p>
        </div>

        {/* Timeline List */}
        <div style={{ maxWidth: '880px', margin: '0 auto 40px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {AGENDA.map((item, index) => (
            <div
              key={index}
              className="glass-card"
              style={{
                padding: '20px 24px',
                borderRadius: '14px',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '16px',
                background: item.highlight ? 'rgba(5, 174, 112, 0.12)' : 'rgba(11, 18, 30, 0.75)',
                border: item.highlight ? '1px solid var(--accent-bright)' : '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              {/* Time Column */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', minWidth: '150px' }}>
                <Clock size={16} color="var(--accent-bright)" />
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    color: item.highlight ? 'var(--accent-neon)' : 'var(--text-main)',
                  }}
                >
                  {item.time}
                </span>
              </div>

              {/* Title Column */}
              <div style={{ flex: '1 1 340px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  {item.category && (
                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontFamily: 'var(--font-mono)',
                        padding: '2px 8px',
                        borderRadius: '4px',
                        background: 'rgba(255, 255, 255, 0.08)',
                        color: 'var(--accent-bright)',
                      }}
                    >
                      {item.category}
                    </span>
                  )}
                  {item.highlight && (
                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontFamily: 'var(--font-mono)',
                        padding: '2px 8px',
                        borderRadius: '4px',
                        background: 'var(--accent-green)',
                        color: '#03140d',
                        fontWeight: 700,
                      }}
                    >
                      ★ FEATURED
                    </span>
                  )}
                </div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: 600, color: '#fff', lineHeight: 1.35 }}>
                  {item.title}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Read Full Agenda CTA */}
        <div style={{ textAlign: 'center' }}>
          <button
            onClick={onOpenAgendaModal}
            className="btn btn-primary"
            style={{ padding: '16px 36px', fontSize: '1rem' }}
          >
            <Download size={18} />
            <span>DOWNLOAD COMPLETE AGENDA BROCHURE</span>
          </button>
        </div>

      </div>
    </section>
  );
};
