import React, { useState } from 'react';
import { Award, ChevronDown, ChevronUp, GraduationCap, Building2 } from 'lucide-react';
import { CHIEF_GUEST } from '../data';

export const ChiefGuest: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="vip" className="section" style={{ background: 'rgba(8, 14, 24, 0.65)', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
      <div className="max-w-content">
        
        <div className="section-header">
          <div className="section-tag">
            <Award size={14} /> DISTINGUISHED KEYNOTE
          </div>
          <h2 className="section-title">
            CHIEF <span>GUEST OF HONOR</span>
          </h2>
          <p className="section-desc">
            Welcoming the apex capital market regulatory leadership shaping Nigeria's smart fintech ecosystem.
          </p>
        </div>

        <div
          className="glass-card"
          style={{
            padding: '40px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '48px',
            alignItems: 'center',
            borderColor: 'rgba(58, 213, 159, 0.3)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(5, 174, 112, 0.15)',
          }}
        >
          {/* VIP Portrait Card */}
          <div style={{ textAlign: 'center', position: 'relative' }}>
            <div
              style={{
                width: '260px',
                height: '320px',
                margin: '0 auto 20px',
                borderRadius: '20px',
                overflow: 'hidden',
                position: 'relative',
                border: '2px solid var(--accent-bright)',
                boxShadow: '0 12px 35px rgba(0, 240, 155, 0.25)',
              }}
            >
              <img
                src={CHIEF_GUEST.image}
                alt={CHIEF_GUEST.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop';
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(5, 8, 14, 0.8) 0%, transparent 60%)',
                }}
              />
            </div>

            <h3 style={{ fontSize: '1.45rem', color: '#fff', marginBottom: '6px' }}>
              {CHIEF_GUEST.name}
            </h3>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: 'var(--accent-bright)', fontWeight: 600 }}>
              {CHIEF_GUEST.role}
            </div>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              {CHIEF_GUEST.company}
            </div>
          </div>

          {/* Bio & Leadership Summary */}
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(5, 174, 112, 0.1)',
                border: '1px solid rgba(58, 213, 159, 0.25)',
                borderRadius: '6px',
                padding: '4px 12px',
                fontSize: '0.78rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--accent-bright)',
                marginBottom: '16px',
              }}
            >
              <Building2 size={14} /> REGULATORY KEYNOTE ADDRESS
            </div>

            <div style={{ color: 'var(--text-muted)', fontSize: '1rem', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <p>{CHIEF_GUEST.bio[0]}</p>
              <p>{CHIEF_GUEST.bio[1]}</p>

              {expanded && (
                <>
                  <p>{CHIEF_GUEST.bio[2]}</p>
                  <p>{CHIEF_GUEST.bio[3]}</p>

                  <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
                    <div style={{ color: '#fff', fontWeight: 700, marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <GraduationCap size={18} color="var(--accent-neon)" /> Key Academic & Professional Honors:
                    </div>
                    <ul style={{ listStyle: 'none', paddingLeft: 0, display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.9rem' }}>
                      {CHIEF_GUEST.credentials.map((cred, idx) => (
                        <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-main)' }}>
                          <span style={{ color: 'var(--accent-bright)' }}>•</span> {cred}
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </div>

            <button
              onClick={() => setExpanded(!expanded)}
              className="btn btn-outline"
              style={{ marginTop: '20px', padding: '8px 20px', fontSize: '0.85rem' }}
            >
              {expanded ? (
                <>Read Less <ChevronUp size={16} /></>
              ) : (
                <>Read Full Biography <ChevronDown size={16} /></>
              )}
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
