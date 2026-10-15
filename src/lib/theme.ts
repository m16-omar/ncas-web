import { useEffect, useState } from 'react';

export type Theme = 'dark' | 'light';
const KEY = 'ncas-theme';

function initialTheme(): Theme {
  // `?theme=light` forces a theme, handy for previews and screenshots.
  const forced = new URLSearchParams(window.location.search).get('theme');
  if (forced === 'dark' || forced === 'light') return forced;
  try {
    const saved = localStorage.getItem(KEY);
    if (saved === 'dark' || saved === 'light') return saved;
  } catch {
    // Storage blocked; fall through to the default.
  }
  // Dark is the brand default, matching the cinema look.
  return 'dark';
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(initialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem(KEY, theme);
    } catch {
      // Ignore: the choice just won't persist.
    }
  }, [theme]);

  return { theme, toggle: () => setTheme((v) => (v === 'dark' ? 'light' : 'dark')) };
}
