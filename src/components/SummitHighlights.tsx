import React, { useState } from 'react';
import { Target, Users2, Mic2, MonitorPlay, ArrowRight } from 'lucide-react';
import { HIGHLIGHTS } from '../data';

interface HighlightsProps {
  onOpenTickets: () => void;
  onOpenExhibit: () => void;
}

export const SummitHighlights: React.FC<HighlightsProps> = ({ onOpenTickets, onOpenExhibit }) => {
  const [activeHighlight, setActiveHighlight] = useState<number>(1);

  const icons = [Users2, Mic2, MonitorPlay];

  return (
    <section id="summit" className="section" style={{ background: '#05080e', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
      <div className="max-w-content">
        
        <div className="section-header">
          <div className="section-tag">
            <Target size={14} /> ENGAGEMENT FORMAT
          </div>
          <h2 className="section-title">
            THE <span>SUMMIT</span> HIGHLIGHTS
          </h2>
          <p className="section-desc">
            Engage in exclusive face-to-face meetings, present groundbreaking ideas through keynote sessions, and showcase your solutions to top enterprise buyers.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {HIGHLIGHTS.map((item, index) => {
            const Icon = icons[index];
            const isActive = activeHighlight === index;

            return (
              <div
                key={index}
                className="glass-card"
                onClick={() => setActiveHighlight(index)}
                style={{
                  padding: '36px 28px',
                  borderRadius: '18px',
                  background: isActive ? 'rgba(13, 25, 40, 0.95)' : 'rgba(9, 14, 24, 0.7)',
                  borderColor: isActive ? 'var(--accent-bright)' : 'rgba(58, 213, 159, 0.2)',
                  boxShadow: isActive ? '0 12px 35px rgba(0, 240, 155, 0.2)' : 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '1.8rem',
                      fontWeight: 800,
                      color: isActive ? 'var(--accent-neon)' : 'var(--text-dim)',
                    }}
                  >
                    {item.num}.
                  </span>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '10px',
                      background: isActive ? 'rgba(0, 240, 155, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Icon size={22} color={isActive ? 'var(--accent-neon)' : 'var(--text-muted)'} />
                  </div>
                </div>

                <div
                  style={{
                    display: 'inline-block',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    background: 'rgba(58, 213, 159, 0.1)',
                    color: 'var(--accent-bright)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    marginBottom: '12px',
                  }}
                >
                  {item.tag}
                </div>

                <h3 style={{ fontSize: '1.35rem', color: '#fff', marginBottom: '14px', lineHeight: 1.25 }}>
                  {item.title}
                </h3>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '24px' }}>
                  {item.desc}
                </p>

                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    if (index === 0 || index === 2) onOpenExhibit();
                    else onOpenTickets();
                  }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: 'var(--accent-bright)',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    fontSize: '0.88rem',
                  }}
                >
                  <span>Participate in this track</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
