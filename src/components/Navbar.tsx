import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import type { ModalType } from '../data';

interface NavbarProps {
  onOpen: (type: ModalType) => void;
}

const LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Why Cinema', href: '#why-cinema' },
  { name: 'Categories', href: '#categories' },
  { name: 'Integrity', href: '#integrity' },
  { name: 'Roadmap', href: '#roadmap' },
  { name: 'Partners', href: '#partners' },
  { name: 'Press', href: '#press' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const open = (type: ModalType) => {
    setMenuOpen(false);
    onOpen(type);
  };

  return (
    <nav className={`nav${scrolled || menuOpen ? ' scrolled' : ''}`} aria-label="Main">
      <div className="nav-inner">
        <a href="#home" className="brand" aria-label="Nigerian Cinema Awards home">
          <Logo />
          <span>
            <span className="brand-name">Nigerian Cinema Awards</span>
            <span className="brand-sub">NCAs · 2026/27</span>
          </span>
        </a>

        <ul className="nav-links">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>

        <div className="nav-cta">
          <button className="btn btn-ghost" onClick={() => open('partner')}>Partner</button>
          <button className="btn btn-gold" onClick={() => open('updates')}>Get Updates</button>
        </div>

        <button
          className="nav-toggle"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.name}
            </a>
          ))}
          <button className="btn btn-gold" onClick={() => open('updates')}>Get Updates</button>
          <button className="btn btn-ghost" onClick={() => open('partner')}>Partner With Us</button>
        </div>
      )}
    </nav>
  );
};
