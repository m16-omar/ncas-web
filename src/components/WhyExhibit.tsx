import React, { useState } from 'react';
import { Briefcase, ArrowRight } from 'lucide-react';
import { WHY_EXHIBIT } from '../data';

interface WhyExhibitProps {
  onOpenExhibit: () => void;
}

export const WhyExhibit: React.FC<WhyExhibitProps> = ({ onOpenExhibit }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section id="exhibit" className="section" style={{ position: 'relative' }}>
      <div className="glow-orb glow-orb-green" style={{ top: '25%', left: '50%', transform: 'translateX(-50%)', width: '500px', height: '500px' }} />

      <div className="max-w-content">
        <div className="section-header">
          <div className="section-tag">
            <Briefcase size={14} /> SPONSORSHIP & EXHIBITION
          </div>
          <h2 className="section-title">
            WHY <span>EXHIBIT OR SPONSOR</span>
          </h2>
          <p className="section-desc">
            Position your organization at the forefront of financial innovation. Be part of the movement reshaping the BFSI landscape across Africa.
          </p>
        </div>

        {/* Interactive Horizontal Accordion / Tabs */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px', alignItems: 'center' }}>
          
          {/* Tab Selector List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {WHY_EXHIBIT.map((item, index) => {
              const isSelected = activeTab === index;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveTab(index)}
                  style={{
                    padding: '20px 24px',
                    borderRadius: '14px',
                    background: isSelected ? 'rgba(58, 213, 159, 0.12)' : 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid',
                    borderColor: isSelected ? 'var(--accent-bright)' : 'rgba(255, 255, 255, 0.08)',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    boxShadow: isSelected ? '0 10px 25px rgba(0, 0, 0, 0.4)' : 'none',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                    <h3 style={{ fontSize: '1.1rem', color: isSelected ? 'var(--accent-neon)' : '#fff', fontWeight: 700 }}>
                      {item.title}
                    </h3>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-dim)' }}>
                      0{index + 1}
                    </span>
                  </div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>
                    {item.subtitle}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Active Feature Showcase */}
          <div
            className="glass-card"
            style={{
              padding: '36px',
              borderRadius: '20px',
              background: 'rgba(11, 18, 30, 0.95)',
              border: '1px solid rgba(58, 213, 159, 0.3)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Feature Image */}
            <div
              style={{
                width: '100%',
                height: '240px',
                borderRadius: '14px',
                overflow: 'hidden',
                marginBottom: '24px',
                position: 'relative',
              }}
            >
              <img
                src={WHY_EXHIBIT[activeTab].image}
                alt={WHY_EXHIBIT[activeTab].title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&auto=format&fit=crop';
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(11, 18, 30, 0.8) 0%, transparent 60%)',
                }}
              />
            </div>

            <div
              style={{
                display: 'inline-block',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                color: 'var(--accent-bright)',
                letterSpacing: '0.12em',
                marginBottom: '8px',
                textTransform: 'uppercase',
              }}
            >
              {WHY_EXHIBIT[activeTab].subtitle}
            </div>

            <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '16px', lineHeight: 1.25 }}>
              {WHY_EXHIBIT[activeTab].title}
            </h3>

            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '28px' }}>
              {WHY_EXHIBIT[activeTab].desc}
            </p>

            <button
              onClick={onOpenExhibit}
              className="btn btn-primary"
              style={{ width: '100%', padding: '14px 24px' }}
            >
              <span>INQUIRE ABOUT SPONSORSHIP</span>
              <ArrowRight size={16} />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
