import React, { useState } from 'react';
import { Mic, Search, Building } from 'lucide-react';
import { SPEAKERS } from '../data';

export const SpeakersSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSpeakers = SPEAKERS.filter(spk =>
    spk.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    spk.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
    spk.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="speakers" className="section" style={{ background: '#05080e', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
      <div className="max-w-content">
        <div className="section-header">
          <div className="section-tag">
            <Mic size={14} /> THOUGHT LEADERS
          </div>
          <h2 className="section-title">
            MEET OUR <span>SPEAKERS</span>
          </h2>
          <p className="section-desc">
            Visionary leaders, regulatory heads, and technical architects from Nigeria's top commercial banks, digital lenders, and capital institutions.
          </p>

          {/* Quick Search Input */}
          <div
            style={{
              maxWidth: '420px',
              margin: '28px auto 0',
              position: 'relative',
            }}
          >
            <Search
              size={18}
              color="var(--text-dim)"
              style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }}
            />
            <input
              type="text"
              placeholder="Search speaker, role, or bank..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="form-input"
              style={{ paddingLeft: '44px', borderRadius: '9999px' }}
            />
          </div>
        </div>

        {/* Speakers Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '24px',
          }}
        >
          {filteredSpeakers.map((speaker) => (
            <div
              key={speaker.id}
              className="glass-card"
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                background: 'rgba(10, 16, 26, 0.85)',
                border: speaker.isChiefGuest ? '1px solid var(--accent-bright)' : '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow: speaker.isChiefGuest ? '0 0 25px rgba(0, 240, 155, 0.2)' : 'none',
              }}
            >
              {/* Speaker Photo */}
              <div style={{ height: '280px', width: '100%', position: 'relative', overflow: 'hidden' }}>
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop';
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(10, 16, 26, 0.95) 0%, rgba(10, 16, 26, 0.3) 50%, transparent 100%)',
                  }}
                />

                {speaker.isChiefGuest && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '14px',
                      right: '14px',
                      background: 'rgba(5, 174, 112, 0.9)',
                      color: '#03140d',
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 800,
                      fontSize: '0.72rem',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      letterSpacing: '0.05em',
                    }}
                  >
                    VIP KEYNOTE
                  </div>
                )}
              </div>

              {/* Speaker Info */}
              <div style={{ padding: '20px', marginTop: '-20px', position: 'relative', zIndex: 2 }}>
                <h3 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '6px', fontWeight: 700 }}>
                  {speaker.name}
                </h3>
                <div
                  style={{
                    color: 'var(--accent-bright)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    marginBottom: '8px',
                    lineHeight: 1.3,
                  }}
                >
                  {speaker.role}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                  <Building size={14} color="var(--text-dim)" style={{ flexShrink: 0 }} />
                  <span>{speaker.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
