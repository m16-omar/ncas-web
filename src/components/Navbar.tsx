import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenTickets: () => void;
  onOpenExhibit: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTickets, onOpenExhibit }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'WHO ATTENDS', href: '#attend' },
    { name: 'THEMES', href: '#themes' },
    { name: 'WHY NIGERIA', href: '#market' },
    { name: 'SPEAKERS', href: '#speakers' },
    { name: 'SPONSORS', href: '#sponsors' },
    { name: 'AGENDA', href: '#agenda' },
    { name: 'GALLERY', href: '#gallery' },
  ];

  return (
    <nav
      id="navbar"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 900,
        transition: 'all 0.35s ease',
        background: scrolled ? 'rgba(5, 8, 14, 0.92)' : 'rgba(5, 8, 14, 0.65)',
        backdropFilter: 'blur(16px)',
        borderBottom: scrolled ? '1px solid rgba(58, 213, 159, 0.2)' : '1px solid rgba(255, 255, 255, 0.08)',
        boxShadow: scrolled ? '0 10px 30px rgba(0, 0, 0, 0.5)' : 'none'
      }}
    >
      <div
        style={{
          maxWidth: '1380px',
          margin: '0 auto',
          padding: '14px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Brand Logo & Edition */}
        <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '14px', textDecoration: 'none' }}>
          <img
            src="https://fintechrevolutionseries.com/nigeria/assets/images/FRS-nigeria.svg"
            alt="Fintech Revolution Summit Nigeria Logo"
            style={{ height: '42px', width: 'auto', display: 'block' }}
            onError={(e) => {
              // Fallback text if network blocked
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.05rem', color: '#fff', letterSpacing: '0.04em' }}>
              FINTECH REVOLUTION
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--accent-bright)', letterSpacing: '0.12em' }}>
              NIGERIA 2026
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <ul
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '22px',
            listStyle: 'none',
            margin: 0,
            padding: 0,
          }}
          className="desktop-nav-links"
        >
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  color: 'var(--text-muted)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                  padding: '6px 4px',
                  position: 'relative'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-bright)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Region & CTA Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          {/* Welcome Nigeria pill */}
          <div
            className="region-badge-pill"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '9999px',
              padding: '6px 14px',
              fontSize: '0.78rem',
              color: 'var(--text-muted)',
              fontFamily: 'var(--font-mono)'
            }}
          >
            <span style={{ color: '#fff', fontWeight: 600 }}>Welcome</span>
            <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--accent-bright)' }} />
            <span style={{ color: 'var(--accent-neon)', fontWeight: 700 }}>Nigeria (NG)</span>
          </div>

          {/* Quick Action Buttons */}
          <div style={{ display: 'flex', gap: '10px' }} className="nav-buttons-desktop">
            <button
              onClick={onOpenExhibit}
              className="btn btn-secondary"
              style={{ padding: '8px 18px', fontSize: '0.82rem' }}
            >
              EXHIBIT NOW
            </button>
            <button
              onClick={onOpenTickets}
              className="btn btn-primary"
              style={{ padding: '8px 18px', fontSize: '0.82rem' }}
            >
              GET TICKETS
            </button>
          </div>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle-btn"
            style={{
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '8px',
              color: '#fff',
              padding: '8px',
              cursor: 'pointer',
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            background: 'rgba(5, 8, 14, 0.98)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(58, 213, 159, 0.3)',
            padding: '24px 20px 32px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1rem',
                fontWeight: 600,
                color: '#fff',
                textDecoration: 'none',
                padding: '8px 0',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <span>{link.name}</span>
              <ArrowUpRight size={16} color="var(--accent-bright)" />
            </a>
          ))}

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginTop: '12px' }}>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenExhibit();
              }}
              className="btn btn-secondary"
              style={{ width: '100%', padding: '12px' }}
            >
              EXHIBIT NOW
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTickets();
              }}
              className="btn btn-primary"
              style={{ width: '100%', padding: '12px' }}
            >
              GET TICKETS
            </button>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 1080px) {
          .desktop-nav-links {
            display: none !important;
          }
          .region-badge-pill {
            display: none !important;
          }
          .mobile-toggle-btn {
            display: flex !important;
          }
        }
        @media (max-width: 600px) {
          .nav-buttons-desktop {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
};
