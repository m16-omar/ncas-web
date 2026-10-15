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
  { name: 'Event', to: '/event' },
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
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
          <Logo size={42} />
          <span>
            <b>NCAs</b>
            <small>NIGERIAN CINEMA AWARDS</small>
          </span>
        </Link>

        <ul className="nav-links">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <NavLink className="nav-link" to={link.to} end={link.to === '/'}>
                <span>{link.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="nav-cta">
          <button className="theme-btn" onClick={onToggleTheme} aria-label={themeLabel} title={themeLabel}>
            <ThemeIcon size={18} />
          </button>
          <Link className="reg-btn" to="/tickets">Tickets</Link>
        </div>

        <div className="nav-mobile-actions">
          <button className="theme-btn" onClick={onToggleTheme} aria-label={themeLabel}>
            <ThemeIcon size={18} />
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
          <NavLink to="/live">Live</NavLink>
          <Link className="reg-btn" to="/tickets">Tickets</Link>
          <button className="reg-btn ghost" style={{ marginTop: 10 }} onClick={() => open('updates')}>Get Updates</button>
        </div>
      )}
    </nav>
  );
};
