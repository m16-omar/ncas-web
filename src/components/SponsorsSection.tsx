import React from 'react';
import { Award } from 'lucide-react';
import { SPONSORS } from '../data';

export const SponsorsSection: React.FC = () => {
  const patronage = SPONSORS.filter(s => s.tier === 'patronage');
  const tier1 = SPONSORS.filter(s => s.tier === 'tier1');
  const media = SPONSORS.filter(s => s.tier === 'media');

  return (
    <section id="sponsors" className="section" style={{ position: 'relative' }}>
      <div className="max-w-content">
        <div className="section-header">
          <div className="section-tag">
            <Award size={14} /> INDUSTRY PARTNERS
          </div>
          <h2 className="section-title">
            OUR <span>SPONSORS & PARTNERS</span>
          </h2>
          <p className="section-desc">
            Empowered by visionary regulatory patronage, Tier-1 market innovators, and global media alliances.
          </p>
        </div>

        {/* 1. Under Patronage */}
        <div style={{ marginBottom: '60px', textAlign: 'center' }}>
          <h3
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.85rem',
              letterSpacing: '0.2em',
              color: 'var(--accent-bright)',
              textTransform: 'uppercase',
              marginBottom: '20px',
            }}
          >
            UNDER THE PATRONAGE
          </h3>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            {patronage.map((sponsor, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '28px 48px',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(13, 22, 35, 0.85)',
                  border: '1px solid rgba(58, 213, 159, 0.3)',
                  maxWidth: '480px',
                  width: '100%',
                }}
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  style={{ maxHeight: '60px', width: 'auto', maxWidth: '100%', objectFit: 'contain' }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* 2. Tier One Sponsors */}
        <div style={{ marginBottom: '60px', textAlign: 'center' }}>
          <h3
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.85rem',
              letterSpacing: '0.2em',
              color: 'var(--accent-neon)',
              textTransform: 'uppercase',
              marginBottom: '24px',
            }}
          >
            TIER ONE SPONSORS
          </h3>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '24px',
            }}
          >
            {tier1.map((sponsor, idx) => (
              <a
                key={idx}
                href={sponsor.url || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card"
                style={{
                  padding: '28px 40px',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(13, 22, 35, 0.8)',
                  border: '1px solid rgba(58, 213, 159, 0.25)',
                  minWidth: '260px',
                  textDecoration: 'none',
                }}
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  style={{ maxHeight: '48px', maxWidth: '200px', objectFit: 'contain', filter: 'brightness(1.1)' }}
                  onError={(e) => {
                    // text fallback if image has issue
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.2rem', color: '#fff' }}>
                  {sponsor.name}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* 3. Media Partners */}
        <div style={{ textAlign: 'center' }}>
          <h3
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.85rem',
              letterSpacing: '0.2em',
              color: 'var(--text-dim)',
              textTransform: 'uppercase',
              marginBottom: '28px',
            }}
          >
            OFFICIAL MEDIA PARTNERS
          </h3>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '16px',
            }}
          >
            {media.map((sponsor, idx) => (
              <a
                key={idx}
                href={sponsor.url || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card"
                style={{
                  padding: '20px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '90px',
                  textDecoration: 'none',
                  background: 'rgba(255, 255, 255, 0.02)',
                  borderColor: 'rgba(255, 255, 255, 0.08)',
                }}
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  style={{ maxHeight: '36px', maxWidth: '140px', objectFit: 'contain', opacity: 0.85 }}
                  onError={(e) => {
                    // Fallback to stylized name tag
                    const el = e.target as HTMLElement;
                    el.style.display = 'none';
                  }}
                />
                <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  {sponsor.name}
                </span>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
