import React from 'react';
import { STATS } from '../data';

export const StatsCounter: React.FC = () => {
  return (
    <section className="section" style={{ padding: '80px 20px', background: '#05080e' }}>
      <div className="max-w-content">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}
        >
          {STATS.map((stat, index) => (
            <div
              key={index}
              className="glass-card"
              style={{
                display: 'flex',
                borderRadius: '16px',
                overflow: 'hidden',
                height: '140px',
                background: 'rgba(11, 18, 30, 0.85)',
              }}
            >
              {/* Photo Side */}
              <div style={{ width: '40%', height: '100%', position: 'relative' }}>
                <img
                  src={stat.image}
                  alt={stat.label}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-${1515187029135 + index}?w=400&auto=format&fit=crop`;
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to right, transparent 50%, rgba(11, 18, 30, 0.9) 100%)',
                  }}
                />
              </div>

              {/* Stat Metric */}
              <div
                style={{
                  width: '60%',
                  padding: '16px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '2.4rem',
                    fontWeight: 800,
                    color: 'var(--accent-bright)',
                    lineHeight: 1,
                    marginBottom: '4px',
                    textShadow: '0 0 15px rgba(58, 213, 159, 0.3)',
                  }}
                >
                  {stat.value}{stat.suffix}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    color: '#fff',
                    letterSpacing: '0.04em',
                    lineHeight: 1.2,
                  }}
                >
                  {stat.label}
                  <span style={{ display: 'block', color: 'var(--text-dim)', fontWeight: 500 }}>
                    {stat.sublabel}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
