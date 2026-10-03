import React, { useState } from 'react';
import { Layers } from 'lucide-react';
import { THEMES } from '../data';

export const ThemesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Core Banking',
    'Transactions',
    'Compliance',
    'Cyber Risk',
    'Cognitive Tech',
    'Infrastructure',
    'Web3'
  ];

  const filteredThemes = selectedCategory === 'All'
    ? THEMES
    : THEMES.filter(t => t.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <section id="themes" className="section" style={{ background: '#05080e' }}>
      <div className="max-w-content">
        <div className="section-header">
          <div className="section-tag">
            <Layers size={14} /> KEY FOCUS AREAS
          </div>
          <h2 className="section-title">
            SUMMIT <span>THEMES</span>
          </h2>
          <p className="section-desc">
            Exploring the technological, architectural, and regulatory pillars defining the next era of African financial services.
          </p>
        </div>

        {/* Filter Pills */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '10px',
            marginBottom: '40px',
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: '8px 18px',
                borderRadius: '9999px',
                border: '1px solid',
                borderColor: selectedCategory === cat ? 'var(--accent-bright)' : 'rgba(255, 255, 255, 0.12)',
                background: selectedCategory === cat ? 'rgba(58, 213, 159, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                color: selectedCategory === cat ? '#fff' : 'var(--text-muted)',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.85rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Themes Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '20px',
          }}
        >
          {filteredThemes.map((theme) => (
            <div
              key={theme.id}
              className="glass-card"
              style={{
                borderRadius: '14px',
                height: '200px',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'flex-end',
                padding: '20px',
                textDecoration: 'none',
              }}
            >
              {/* Card Image */}
              <img
                src={theme.image}
                alt={theme.title}
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.4s ease',
                }}
                className="theme-bg-img"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&auto=format&fit=crop';
                }}
              />

              {/* Gradient Dark Overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(5, 8, 14, 0.95) 0%, rgba(5, 8, 14, 0.45) 50%, rgba(5, 8, 14, 0.2) 100%)',
                  zIndex: 1,
                }}
              />

              {/* Content */}
              <div style={{ position: 'relative', zIndex: 2, width: '100%' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: 'var(--accent-bright)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    fontWeight: 600,
                    display: 'block',
                    marginBottom: '4px',
                  }}
                >
                  {theme.category}
                </span>
                <h3 style={{ fontSize: '1.15rem', color: '#fff', fontWeight: 700 }}>
                  {theme.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
