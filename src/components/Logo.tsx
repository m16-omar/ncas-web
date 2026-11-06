import React from 'react';

export interface LogoProps {
  size?: number;
  className?: string;
  variant?: 'mark' | 'wordmark' | 'plaque';
  showSubtitle?: boolean;
}

/**
 * Logo Option 1: The Reel Concept
 * Approved for The Nigerian Cinema Awards (NCAs) logo and plaque design.
 * Features the 35mm film reel emblem with 6 apertures around the Nigerian
 * cinematic hub, rendered in antique gold, warm bronze, obsidian black,
 * and a subtle touch of Nigerian pine green.
 */
export const Logo: React.FC<LogoProps> = ({
  size = 40,
  className = '',
  variant = 'mark',
  showSubtitle = true,
}) => {
  const uniqueId = React.useId().replace(/:/g, '');
  const goldGradId = `nca-gold-${uniqueId}`;
  const bronzeGradId = `nca-bronze-${uniqueId}`;
  const darkGradId = `nca-dark-${uniqueId}`;
  const pineGradId = `nca-pine-${uniqueId}`;

  if (variant === 'plaque') {
    return <LogoPlaque size={size} className={className} />;
  }

  if (variant === 'wordmark') {
    return <LogoWordmark size={size} className={className} showSubtitle={showSubtitle} />;
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`nca-logo-reel ${className}`}
      aria-label="Nigerian Cinema Awards Reel Logo"
    >
      <defs>
        {/* Antique Gold Metallic Gradient (Palette Option 01) */}
        <linearGradient id={goldGradId} x1="6" y1="6" x2="74" y2="74" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#f7e5b5" />
          <stop offset="30%" stopColor="#d19f4a" />
          <stop offset="70%" stopColor="#b87950" />
          <stop offset="100%" stopColor="#9c742e" />
        </linearGradient>

        {/* Warm Bronze Accent */}
        <linearGradient id={bronzeGradId} x1="12" y1="12" x2="68" y2="68" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#d19f4a" />
          <stop offset="50%" stopColor="#b87950" />
          <stop offset="100%" stopColor="#743e22" />
        </linearGradient>

        {/* Deep Obsidian Black */}
        <radialGradient id={darkGradId} cx="40" cy="40" r="36" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1a1724" />
          <stop offset="75%" stopColor="#0c0a12" />
          <stop offset="100%" stopColor="#050408" />
        </radialGradient>

        {/* Deep Nigerian Pine Green Touch (Palette Option 03) */}
        <linearGradient id={pineGradId} x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0a6b63" />
          <stop offset="100%" stopColor="#085953" />
        </linearGradient>
      </defs>

      {/* Outer Reel Flange (Beveled Rim) */}
      <circle cx="40" cy="40" r="37" fill="url(#" stroke={`url(#${goldGradId})`} strokeWidth="2.5" />
      <circle cx="40" cy="40" r="37" fill={`url(#${darkGradId})`} />
      <circle cx="40" cy="40" r="33.5" stroke={`url(#${goldGradId})`} strokeWidth="1" opacity="0.6" />

      {/* Subtle Nigerian Pine Green Accent Ring */}
      <circle cx="40" cy="40" r="30.5" stroke={`url(#${pineGradId})`} strokeWidth="1.2" opacity="0.85" />

      {/* Film Reel Body Webbing */}
      <circle cx="40" cy="40" r="28" fill={`url(#${bronzeGradId})`} opacity="0.18" />

      {/* 6 Film Reel Aperture Windows (Option 1 geometry) */}
      {[0, 60, 120, 180, 240, 300].map((deg) => (
        <g key={deg} transform={`rotate(${deg} 40 40)`}>
          {/* Aperture Hole */}
          <circle cx="40" cy="22" r="7.5" fill={`url(#${darkGradId})`} stroke={`url(#${goldGradId})`} strokeWidth="1.5" />
          {/* Aperture Inner Bevel */}
          <circle cx="40" cy="22" r="5" stroke={`url(#${goldGradId})`} strokeWidth="0.6" opacity="0.4" />
          {/* Spoke Strut Divider */}
          <line x1="40" y1="29.5" x2="40" y2="33.5" stroke={`url(#${goldGradId})`} strokeWidth="1.8" strokeLinecap="round" />
        </g>
      ))}

      {/* Center Reel Hub / Nigeria Heart Silhouette */}
      <circle cx="40" cy="40" r="10" fill={`url(#${darkGradId})`} stroke={`url(#${goldGradId})`} strokeWidth="1.8" />
      <circle cx="40" cy="40" r="7" fill={`url(#${goldGradId})`} opacity="0.3" />

      {/* Stylized Nigerian Map / Cinema Hub Core */}
      <path
        d="M37.5 36.5 L42.5 36 L44 38 L42 42.5 L39.5 43.5 L36.5 41 L36 38.5 Z"
        fill={`url(#${goldGradId})`}
      />
      {/* Center Spindle Hole */}
      <circle cx="40" cy="40" r="2" fill="#0c0a12" stroke={`url(#${goldGradId})`} strokeWidth="0.75" />

      {/* Subtle Outer Perforation Accents */}
      {[30, 90, 150, 210, 270, 330].map((deg) => (
        <circle
          key={deg}
          cx={40 + 35 * Math.cos((deg * Math.PI) / 180)}
          cy={40 + 35 * Math.sin((deg * Math.PI) / 180)}
          r="0.9"
          fill="#085953"
        />
      ))}
    </svg>
  );
};

/**
 * Logo Option 1 Wordmark:
 * Serif "NCA" with the iconic Film Reel inside the "A",
 * accompanied by "NIGERIA CINEMA AWARDS" tracking underneath.
 */
export const LogoWordmark: React.FC<{
  size?: number;
  className?: string;
  showSubtitle?: boolean;
}> = ({ size = 160, className = '', showSubtitle = true }) => {
  return (
    <div
      className={`nca-wordmark-container ${className}`}
      style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', width: size }}
    >
      <div style={{ display: 'flex', alignItems: 'baseline', lineHeight: 1, gap: '2px' }}>
        <span
          style={{
            fontFamily: "'Playfair Display', 'Cinzel', 'Times New Roman', serif",
            fontWeight: 800,
            fontSize: `${size * 0.38}px`,
            letterSpacing: '0.04em',
            background: 'linear-gradient(135deg, #f5dfa8 0%, #d19f4a 50%, #b87950 85%, #9c742e 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'inline-block',
          }}
        >
          NC
        </span>
        <div style={{ position: 'relative', display: 'inline-block', marginLeft: '-2px' }}>
          <span
            style={{
              fontFamily: "'Playfair Display', 'Cinzel', 'Times New Roman', serif",
              fontWeight: 800,
              fontSize: `${size * 0.38}px`,
              letterSpacing: '0.04em',
              background: 'linear-gradient(135deg, #f5dfa8 0%, #d19f4a 50%, #b87950 85%, #9c742e 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block',
            }}
          >
            A
          </span>
          {/* Embedded Reel icon in the 'A' crossbar/counter */}
          <div
            style={{
              position: 'absolute',
              bottom: '18%',
              left: '50%',
              transform: 'translateX(-50%)',
              pointerEvents: 'none',
            }}
          >
            <Logo size={size * 0.16} />
          </div>
        </div>
      </div>
      {showSubtitle && (
        <span
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 600,
            fontSize: `${Math.max(8, size * 0.055)}px`,
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: '#d19f4a',
            marginTop: `${size * 0.02}px`,
            whiteSpace: 'nowrap',
          }}
        >
          Nigeria Cinema Awards
        </span>
      )}
    </div>
  );
};

/**
 * Logo Option 1 Plaque / Trophy:
 * The Reel statuette mounted on a dark tiered marble circular base with an engraved
 * brushed gold nameplate reading "NIGERIA CINEMA AWARDS".
 */
export const LogoPlaque: React.FC<{
  size?: number;
  className?: string;
  usePhoto?: boolean;
}> = ({ size = 200, className = '', usePhoto = true }) => {
  if (usePhoto) {
    return (
      <div
        className={`nca-plaque-graphic ${className}`}
        style={{
          width: size,
          display: 'inline-flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <img
          src="/images/trophy-plaque-opt1.png"
          alt="The Nigerian Cinema Awards Official Trophy Plaque — The Reel"
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'contain',
            filter: 'drop-shadow(0 14px 28px rgba(0,0,0,0.65)) drop-shadow(0 0 16px rgba(209,159,74,0.3))',
          }}
        />
      </div>
    );
  }

  return (
    <svg
      width={size}
      height={size * 1.4}
      viewBox="0 0 120 168"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`nca-plaque-svg ${className}`}
    >
      <defs>
        <linearGradient id="plaque-gold" x1="0" y1="0" x2="120" y2="168" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#f5dfa8" />
          <stop offset="45%" stopColor="#d19f4a" />
          <stop offset="75%" stopColor="#b87950" />
          <stop offset="100%" stopColor="#9c742e" />
        </linearGradient>
        <radialGradient id="plaque-marble" cx="60" cy="140" r="50" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#25232d" />
          <stop offset="70%" stopColor="#121019" />
          <stop offset="100%" stopColor="#08070b" />
        </radialGradient>
      </defs>

      {/* The Reel Statuette Top */}
      <g transform="translate(20, 8)">
        <Logo size={80} />
      </g>

      {/* Trophy Stem & Neck Mount */}
      <rect x="52" y="90" width="16" height="8" rx="2" fill="url(#plaque-gold)" />
      <path d="M48 98 L72 98 L76 106 L44 106 Z" fill="#b87950" />

      {/* Tiered Obsidian / Black Marble Circular Base */}
      <path d="M30 106 L90 106 L94 122 L26 122 Z" fill="url(#plaque-marble)" stroke="#d19f4a" strokeWidth="0.8" />
      <rect x="20" y="122" width="80" height="34" rx="3" fill="url(#plaque-marble)" stroke="#3a3447" strokeWidth="1" />
      <rect x="16" y="156" width="88" height="6" rx="2" fill="#08070b" stroke="#d19f4a" strokeWidth="0.5" />

      {/* Engraved Brushed Gold Plaque Nameplate */}
      <rect x="28" y="130" width="64" height="18" rx="1.5" fill="url(#plaque-gold)" stroke="#743e22" strokeWidth="0.75" />
      <text
        x="60"
        y="142"
        textAnchor="middle"
        fontFamily="'Montserrat', sans-serif"
        fontSize="4.8"
        fontWeight="800"
        letterSpacing="0.8"
        fill="#08070b"
      >
        NIGERIA CINEMA AWARDS
      </text>
    </svg>
  );
};
