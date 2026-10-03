import React from 'react';

export const RunningRibbon: React.FC = () => {
  const registerText = "REGISTER NOW • SECURE YOUR PASS • REGISTER NOW • JOIN 200+ DELEGATES • ";
  const globalTour = "PHILIPPINES • BAHRAIN • INDIA • MALAYSIA • NIGERIA • SAUDI ARABIA • THAILAND • ABU DHABI • ";

  return (
    <div
      id="ribbon"
      style={{
        position: 'relative',
        padding: '30px 0',
        overflow: 'hidden',
        background: '#04070c',
        borderTop: '1px solid rgba(0, 240, 155, 0.2)',
        borderBottom: '1px solid rgba(0, 240, 155, 0.2)',
      }}
    >
      {/* Top Lane: REGISTER NOW */}
      <div className="marquee-container" style={{ transform: 'rotate(-0.8deg)', marginBottom: '12px' }}>
        <div
          className="marquee-track-left"
          style={{
            background: 'linear-gradient(90deg, #05ae70 0%, #00f09b 50%, #05ae70 100%)',
            padding: '10px 0',
            color: '#03140d',
            fontFamily: 'var(--font-heading)',
            fontWeight: 900,
            fontSize: '1rem',
            letterSpacing: '0.1em',
          }}
        >
          <span>{registerText.repeat(8)}</span>
        </div>
      </div>

      {/* Bottom Lane: GLOBAL CITIES TOUR */}
      <div className="marquee-container" style={{ transform: 'rotate(0.8deg)' }}>
        <div
          className="marquee-track-right"
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '8px 0',
            color: 'var(--accent-bright)',
            fontFamily: 'var(--font-mono)',
            fontWeight: 700,
            fontSize: '0.9rem',
            letterSpacing: '0.12em',
          }}
        >
          <span>{globalTour.repeat(6)}</span>
        </div>
      </div>
    </div>
  );
};
