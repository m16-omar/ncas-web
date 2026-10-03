import React from 'react';
import { Mail, MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  const contactChannels = [
    { title: 'SPONSOR OUR EVENT', email: 'shyuj@traiconevents.com' },
    { title: 'SPEAK IN OUR EVENT', email: 'prasanna@traiconevents.com' },
    { title: 'PARTICIPATE IN OUR EVENT', email: 'reena@traiconevents.com' },
  ];

  return (
    <footer
      id="footer"
      style={{
        background: '#030508',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '70px 24px 40px',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div className="max-w-content">
        
        {/* Top Direct Mail Inquiries */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '20px',
            marginBottom: '56px',
          }}
        >
          {contactChannels.map((channel, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '24px',
                background: 'rgba(10, 16, 26, 0.8)',
                border: '1px solid rgba(58, 213, 159, 0.2)',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.12em',
                  color: 'var(--text-dim)',
                  marginBottom: '8px',
                }}
              >
                {channel.title}
              </div>
              <a
                href={`mailto:${channel.email}`}
                style={{
                  color: 'var(--accent-bright)',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-neon)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--accent-bright)')}
              >
                <Mail size={16} />
                <span>{channel.email}</span>
              </a>
            </div>
          ))}
        </div>

        {/* Brand, Social & Copyright Footer Row */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '28px',
            paddingTop: '36px',
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
          }}
        >
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
              <img
                src="https://fintechrevolutionseries.com/nigeria/assets/images/FRS-nigeria.svg"
                alt="Fintech Revolution Summit"
                style={{ height: '36px' }}
              />
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, color: '#fff', fontSize: '1rem' }}>
                FRS NIGERIA 2026
              </span>
            </div>
            <p style={{ color: 'var(--text-dim)', fontSize: '0.85rem' }}>
              © 2026 All rights reserved by{' '}
              <a
                href="https://traiconevents.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--accent-bright)', textDecoration: 'none', fontWeight: 600 }}
              >
                TRAICON EVENTS
              </a>
            </p>
          </div>

          {/* Social Icons */}
          <div style={{ display: 'flex', gap: '12px' }}>
            <a
              href="https://www.linkedin.com/company/traiconevents"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="social-link-btn"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-muted)',
                textDecoration: 'none'
              }}
            >
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>

            <a
              href="https://www.instagram.com/traiconglobal/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="social-link-btn"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-muted)',
                textDecoration: 'none'
              }}
            >
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            <a
              href="https://www.youtube.com/@traiconevents"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="social-link-btn"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-muted)',
                textDecoration: 'none'
              }}
            >
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </a>

            <a
              href="https://www.whatsapp.com/channel/0029Va9TxnN7oQhWiuLXUE1h"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Channel"
              className="social-link-btn"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-muted)',
                textDecoration: 'none'
              }}
            >
              <MessageCircle size={20} />
            </a>
          </div>

          {/* Organiser Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>Organised by:</span>
            <a href="https://traiconevents.com/" target="_blank" rel="noopener noreferrer">
              <img
                src="https://fintechrevolutionseries.com/nigeria/assets/images/tce-logo.png"
                alt="TraiCon Events"
                style={{ height: '34px', objectFit: 'contain' }}
              />
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};
