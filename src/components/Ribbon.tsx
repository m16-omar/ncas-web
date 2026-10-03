import React from 'react';
import { RIBBON } from '../data';

export const Ribbon: React.FC = () => {
  // Rendered twice so the -50% marquee loops seamlessly.
  const items = [...RIBBON, ...RIBBON];
  return (
    <div className="ribbon" aria-hidden="true">
      <div className="ribbon-track">
        {items.map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </div>
  );
};
