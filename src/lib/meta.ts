import { useEffect } from 'react';
import { SITE } from '../data';

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.content = content;
}

// Sets the page title plus description and Open Graph / Twitter tags.
// Note: crawlers that don't run JavaScript only see index.html's defaults; per-nominee
// share cards need prerendering or server rendering (see README).
export function useMeta(title: string, description: string = SITE.tagline) {
  useEffect(() => {
    const full = title ? `${title} | ${SITE.name}` : `${SITE.name} (${SITE.short})`;
    document.title = full;
    setMeta('name', 'description', description);
    setMeta('property', 'og:title', full);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', SITE.url + window.location.pathname);
    setMeta('name', 'twitter:title', full);
    setMeta('name', 'twitter:description', description);
  }, [title, description]);
}
