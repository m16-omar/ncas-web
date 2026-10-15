import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Fade `.reveal` elements in as they scroll into view; re-run on each route change.
export function useReveal() {
  const { pathname } = useLocation();
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );
    // Wait a frame so the new route's DOM is in place.
    const id = requestAnimationFrame(() =>
      document.querySelectorAll('.reveal:not(.in)').forEach((el) => observer.observe(el)),
    );
    return () => {
      cancelAnimationFrame(id);
      observer.disconnect();
    };
  }, [pathname]);
}
