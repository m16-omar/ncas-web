import React from 'react';
import { PAST_PARTNERS } from '../data';

export const PartnersMarquee: React.FC = () => {
  // Split past partners into two rows
  const half = Math.ceil(PAST_PARTNERS.length / 2);
  const row1 = PAST_PARTNERS.slice(0, half);
  const row2 = PAST_PARTNERS.slice(half);

  return (
    <div
      style={{
        padding: '60px 0',
        background: 'linear-gradient(180deg, #05080e 0%, #070d16 50%, #05080e 100%)',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <h3
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.85rem',
            letterSpacing: '0.2em',
            color: 'var(--accent-bright)',
            textTransform: 'uppercase',
          }}
        >
          PREVIOUS EDITIONS PARTNERS & PARTICIPANTS
        </h3>
      </div>

      {/* Row 1 - Scrolling Left */}
      <div className="marquee-container" style={{ marginBottom: '20px' }}>
        <div className="marquee-track-left">
          {[...row1, ...row1, ...row1].map((partner, index) => (
            <div
              key={`row1-${index}`}
              style={{
                padding: '12px 28px',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '10px',
                color: 'var(--text-muted)',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.95rem',
                fontWeight: 600,
                letterSpacing: '0.04em',
                whiteSpace: 'nowrap',
                transition: 'all 0.25s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--accent-neon)';
                e.currentTarget.style.borderColor = 'rgba(58, 213, 159, 0.4)';
                e.currentTarget.style.background = 'rgba(58, 213, 159, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-muted)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
              }}
            >
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-bright)' }} />
              {partner}
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 - Scrolling Right */}
      <div className="marquee-container">
        <div className="marquee-track-right">
          {[...row2, ...row2, ...row2].map((partner, index) => (
            <div
              key={`row2-${index}`}
              style={{
                padding: '12px 28px',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '10px',
                color: 'var(--text-muted)',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.95rem',
                fontWeight: 600,
                letterSpacing: '0.04em',
                whiteSpace: 'nowrap',
                transition: 'all 0.25s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--accent-bright)';
                e.currentTarget.style.borderColor = 'rgba(58, 213, 159, 0.4)';
                e.currentTarget.style.background = 'rgba(58, 213, 159, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-muted)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
              }}
            >
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-neon)' }} />
              {partner}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
