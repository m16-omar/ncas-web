import React from 'react';
import { TrendingUp, Globe2 } from 'lucide-react';
import { MARKET_DATA } from '../data';

export const MarketData: React.FC = () => {
  return (
    <section id="market" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="glow-orb glow-orb-green" style={{ bottom: '10%', right: '-5%', width: '450px', height: '450px' }} />

      <div className="max-w-content">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '56px', alignItems: 'center' }}>
          
          {/* Left Narrative */}
          <div>
            <div className="section-tag">
              <TrendingUp size={14} /> ECONOMIC TRAJECTORY
            </div>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '16px' }}>
              WHY <span>NIGERIA?</span>
            </h2>
            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.3rem',
                color: 'var(--accent-bright)',
                marginBottom: '18px',
                fontWeight: 600,
              }}
            >
              A Premier Global Hub for Fintech Innovation & Scale
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '28px' }}>
              Nigeria stands as Africa's preeminent fintech powerhouse, recognized globally for its forward-leaning regulatory environment, youthful tech-savvy populace, and immense transaction volume across digital payments, lending, and merchant processing.
            </p>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '16px 20px',
                background: 'rgba(5, 174, 112, 0.1)',
                border: '1px solid rgba(58, 213, 159, 0.25)',
                borderRadius: '12px',
              }}
            >
              <Globe2 size={28} color="var(--accent-neon)" />
              <div>
                <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem' }}>Strategic Gateway to Africa</div>
                <div style={{ color: 'var(--text-dim)', fontSize: '0.82rem' }}>Leading fintech venture investments across the continent</div>
              </div>
            </div>
          </div>

          {/* Right Metrics Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
            {MARKET_DATA.map((item, index) => (
              <div
                key={index}
                className="glass-card"
                style={{
                  padding: '24px 20px',
                  background: 'rgba(11, 18, 30, 0.85)',
                  border: '1px solid rgba(58, 213, 159, 0.2)',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '1.85rem',
                    fontWeight: 800,
                    color: 'var(--accent-bright)',
                    marginBottom: '8px',
                    lineHeight: 1,
                  }}
                >
                  {item.value}
                </div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.95rem', fontWeight: 700, color: '#fff', marginBottom: '6px' }}>
                  {item.title}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>
                  {item.desc}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
