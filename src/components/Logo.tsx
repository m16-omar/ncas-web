import React from 'react';

// Placeholder emblem (lens aperture + star) until the final NCAs mark is approved.
export const Logo: React.FC<{ size?: number }> = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden="true">
    <defs>
      <linearGradient id="nca-gold" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#ecd59a" />
        <stop offset="0.55" stopColor="#d4af5f" />
        <stop offset="1" stopColor="#9c7a35" />
      </linearGradient>
    </defs>
    <circle cx="32" cy="32" r="30" stroke="url(#nca-gold)" strokeWidth="2" />
    <circle cx="32" cy="32" r="22" stroke="url(#nca-gold)" strokeWidth="1" opacity="0.5" />
    {[0, 60, 120, 180, 240, 300].map((deg) => (
      <path
        key={deg}
        d="M32 10 L40 26"
        stroke="url(#nca-gold)"
        strokeWidth="1.5"
        strokeLinecap="round"
        transform={`rotate(${deg} 32 32)`}
      />
    ))}
    <path d="M32 22 L34.6 29.4 L42 29.4 L36 34 L38.3 41.5 L32 37 L25.7 41.5 L28 34 L22 29.4 L29.4 29.4 Z" fill="url(#nca-gold)" />
    <rect x="24" y="48" width="16" height="2" rx="1" fill="#0f8a54" />
  </svg>
);
