import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { Logo } from './Logo';
import { useOpenModal } from '../lib/modal';
import type { Theme } from '../lib/theme';

const NAV_LINKS = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Categories', to: '/categories' },
  { name: 'Submit', to: '/submit' },
  { name: 'Nominees', to: '/nominees' },
  { name: 'Tickets', to: '/tickets' },
  { name: 'Sponsors', to: '/sponsors' },
  { name: 'Press', to: '/press' },
];

interface NavbarProps {
  theme: Theme;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, onToggleTheme }) => {
  const open = useOpenModal();
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu whenever the route changes.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setMenuOpen(false);
  }

  const ThemeIcon = theme === 'dark' ? Sun : Moon;
  const themeLabel = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';

  return (
    <nav className={`nav always-dark${scrolled ? ' scrolled' : ''}${menuOpen ? ' open' : ''}`} aria-label="Main">
      <div className="nav-cont">
        <Link to="/" className="nav-logo" aria-label="Nigerian Cinema Awards home">
          <Logo size={44} />
          <span>
            <b>Cinema</b>
            <small>nigerian awards</small>
          </span>
        </Link>

        <ul className="nav-links">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <NavLink className="nav-link" to={link.to} end={link.to === '/'}>{link.name}</NavLink>
            </li>
          ))}
        </ul>

        <div className="nav-right">
          <div className="nav-welcome" aria-hidden="true">
            <span className="script">Welcome</span>
            <i />
            <span className="edition">
              <b>NCAs</b>
              <small>2026 · 27</small>
            </span>
          </div>
          <button className="theme-btn" onClick={onToggleTheme} aria-label={themeLabel} title={themeLabel}>
            <ThemeIcon size={16} />
          </button>
          <button
            className="nav-toggle"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'}>{link.name}</NavLink>
          ))}
          <NavLink to="/event">Event &amp; Agenda</NavLink>
          <NavLink to="/live">Live</NavLink>
          <button className="reg-btn" onClick={() => open('updates')}>Get Updates</button>
        </div>
      )}
    </nav>
  );
};
