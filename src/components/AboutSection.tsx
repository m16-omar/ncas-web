import React, { useState } from 'react';
import { Globe, ShieldCheck, Zap } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <section id="about" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="glow-orb glow-orb-green" style={{ top: '20%', right: '-10%', width: '450px', height: '450px' }} />

      <div className="max-w-content">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '56px', alignItems: 'center' }}>
          
          {/* Left Column: Visual Composition with 3D Flip Card */}
          <div style={{ position: 'relative' }}>
            {/* Visual Hashtag */}
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '1rem',
                color: 'var(--accent-bright)',
                letterSpacing: '0.15em',
                marginBottom: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <span style={{ color: 'var(--accent-neon)' }}>#</span>FRSNIGERIA
            </div>

            {/* Overlapping Images Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', position: 'relative' }}>
              <div
                className="glass-card"
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  height: '280px',
                  transform: 'translateY(-16px)',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)'
                }}
              >
                <img
                  src="https://fintechrevolutionseries.com/nigeria/assets/images/over1.jpg"
                  alt="Keynote presentation at Fintech Revolution Summit"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop';
                  }}
                />
              </div>

              <div
                className="glass-card"
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  height: '280px',
                  transform: 'translateY(24px)',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)'
                }}
              >
                <img
                  src="https://fintechrevolutionseries.com/nigeria/assets/images/over2.jpg"
                  alt="Fintech audience and exhibition delegates"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&auto=format&fit=crop';
                  }}
                />
              </div>
            </div>

            {/* Interactive Flip Card Badge */}
            <div
              onClick={() => setFlipped(!flipped)}
              style={{
                position: 'absolute',
                bottom: '-25px',
                left: '20px',
                zIndex: 10,
                cursor: 'pointer',
                perspective: '1000px',
              }}
            >
              <div
                style={{
                  background: 'linear-gradient(135deg, #05ae70 0%, #00f09b 100%)',
                  borderRadius: '14px',
                  padding: '16px 22px',
                  color: '#03140d',
                  boxShadow: '0 10px 30px rgba(0, 240, 155, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                  transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                  transformStyle: 'preserve-3d',
                }}
              >
                <Zap size={24} color="#03140d" />
                <div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.05rem', lineHeight: 1 }}>
                    200+ LEADERS
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', fontWeight: 600, opacity: 0.85 }}>
                    Tap to Flip Experience
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div>
            <div className="section-tag">
              <Globe size={14} /> ABOUT THE SUMMIT
            </div>

            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '24px' }}>
              REVOLUTIONIZING PAYMENTS AND <span>FINANCE</span>
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', color: 'var(--text-muted)', fontSize: '1.05rem' }}>
              <p>
                The <strong style={{ color: '#fff' }}>Fintech Revolution Summit – Nigeria</strong> is a premier fintech gathering bringing together executives from financial institutions, central regulatory authorities, venture investors, and technology architects driving financial innovation across Africa’s largest economy.
              </p>
              <p>
                As a paramount hub for fintech in Nigeria, the nation continues to redefine digital banking, cross-border remittances, AI-driven credit underwriting, and next-generation payments infrastructure powering financial inclusion for hundreds of millions.
              </p>
              <p>
                This high-impact summit explores innovation in solutions banking, digital currencies, risk governance, and regulatory sandboxes strengthening systemic trust. Join 200+ decision makers shaping the blueprint of African finance.
              </p>
            </div>

            {/* Strategic Value Props */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '32px' }}>
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(58, 213, 159, 0.2)',
                  borderRadius: '12px',
                  padding: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                }}
              >
                <ShieldCheck size={22} color="var(--accent-bright)" />
                <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#fff' }}>Regulatory Alignment</span>
              </div>
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(58, 213, 159, 0.2)',
                  borderRadius: '12px',
                  padding: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                }}
              >
                <Zap size={22} color="var(--accent-neon)" />
                <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#fff' }}>Deal-Making Hub</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
