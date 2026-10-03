import React, { useState } from 'react';
import { Users, PieChart, Wallet, CheckCircle2 } from 'lucide-react';
import { AUDIENCE_SECTORS, AUDIENCE_PROFILES, SPENDING_BUDGET } from '../data';

export const WhoAttends: React.FC = () => {
  const [activeSector, setActiveSector] = useState<number | null>(null);

  return (
    <section id="attend" className="section" style={{ position: 'relative' }}>
      <div className="glow-orb glow-orb-green" style={{ top: '30%', left: '-5%', width: '400px', height: '400px' }} />

      <div className="max-w-content">
        <div className="section-header">
          <div className="section-tag">
            <Users size={14} /> AUDIENCE PROFILE
          </div>
          <h2 className="section-title">
            WHO <span>ATTENDS</span>
          </h2>
          <p className="section-desc" style={{ fontSize: '1.25rem' }}>
            <span style={{ color: 'var(--accent-neon)', fontWeight: 800 }}>88%</span> of our audience are verified budget holders, buyers & institutional decision makers.
          </p>
        </div>

        {/* Sectors and Job Titles Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px', marginBottom: '48px' }}>
          
          {/* Left Column: Sector Distribution */}
          <div className="glass-card" style={{ padding: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
              <PieChart size={20} color="var(--accent-bright)" />
              <h3 style={{ fontSize: '1.2rem', color: '#fff' }}>AUDIENCE SECTOR BREAKDOWN</h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {AUDIENCE_SECTORS.map((sector, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setActiveSector(index)}
                  onMouseLeave={() => setActiveSector(null)}
                  style={{
                    padding: '10px 14px',
                    borderRadius: '8px',
                    background: activeSector === index ? 'rgba(58, 213, 159, 0.12)' : 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid',
                    borderColor: activeSector === index ? sector.color : 'rgba(255, 255, 255, 0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    transition: 'all 0.2s ease',
                    cursor: 'default',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: sector.color, flexShrink: 0 }} />
                    <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-main)' }}>
                      {sector.name}
                    </span>
                  </div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, color: sector.color, fontSize: '0.9rem' }}>
                    {sector.percentage}%
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Audience Profiles */}
          <div className="glass-card" style={{ padding: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
              <Users size={20} color="var(--accent-bright)" />
              <h3 style={{ fontSize: '1.2rem', color: '#fff' }}>PRE-QUALIFIED JOB PROFILES</h3>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '10px' }}>
              {AUDIENCE_PROFILES.map((profile, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '8px 12px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    borderRadius: '8px',
                    fontSize: '0.85rem',
                    color: 'var(--text-muted)'
                  }}
                >
                  <CheckCircle2 size={15} color="var(--accent-bright)" style={{ flexShrink: 0 }} />
                  <span>{profile}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Audience Spending Budget Bars */}
        <div
          className="glass-card"
          style={{
            padding: '32px',
            background: 'linear-gradient(135deg, rgba(13, 22, 35, 0.9) 0%, rgba(9, 14, 24, 0.95) 100%)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '28px' }}>
            <Wallet size={20} color="var(--accent-bright)" />
            <h3 style={{ fontSize: '1.2rem', color: '#fff' }}>AUDIENCE ANNUAL TECHNOLOGY SPENDING BUDGET</h3>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {SPENDING_BUDGET.map((item, index) => (
              <div key={index} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.95rem', fontWeight: 600, color: '#fff' }}>{item.range}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 800, color: 'var(--accent-neon)', fontSize: '1.1rem' }}>
                    {item.percentage}%
                  </span>
                </div>
                {/* Progress Bar Container */}
                <div
                  style={{
                    width: '100%',
                    height: '10px',
                    borderRadius: '5px',
                    background: 'rgba(255, 255, 255, 0.08)',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      width: `${item.percentage}%`,
                      height: '100%',
                      borderRadius: '5px',
                      background: 'linear-gradient(90deg, #05ae70 0%, #00f09b 100%)',
                      boxShadow: '0 0 10px rgba(0, 240, 155, 0.4)',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
