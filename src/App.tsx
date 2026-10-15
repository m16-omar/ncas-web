import { useCallback, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import type { ModalType } from './data';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { EnquiryModal } from './components/EnquiryModal';
import { StickyCta } from './components/StickyCta';
import { Logo } from './components/Logo';
import { ModalContext } from './lib/modal';
import { usePhase } from './lib/phase';
import { useReveal } from './lib/reveal';
import { useTheme } from './lib/theme';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Categories } from './pages/Categories';
import { Submit } from './pages/Submit';
import { Nominees, NomineeProfile } from './pages/Nominees';
import { Tickets } from './pages/Tickets';
import { Event } from './pages/Event';
import { SponsorsPage } from './pages/SponsorsPage';
import { Press } from './pages/Press';
import { Live } from './pages/Live';
import { NotFound } from './pages/NotFound';

// Scroll to top on page change, unless the URL targets an anchor.
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

function Shell() {
  const [modal, setModal] = useState<ModalType | null>(null);
  const [loaded, setLoaded] = useState(false);
  const closeModal = useCallback(() => setModal(null), []);
  const { theme, toggle } = useTheme();
  const phase = usePhase();

  useReveal();

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ModalContext.Provider value={setModal}>
      <div className={`loader${loaded ? ' done' : ''}`} aria-hidden="true">
        <Logo size={96} />
      </div>

      <a className="skip-link" href="#main">Skip to content</a>
      <ScrollToTop />
      <Navbar theme={theme} onToggleTheme={toggle} />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home phase={phase} />} />
          <Route path="/about" element={<About />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/submit" element={<Submit phase={phase} />} />
          <Route path="/nominees" element={<Nominees />} />
          <Route path="/nominees/:id" element={<NomineeProfile />} />
          <Route path="/tickets" element={<Tickets phase={phase} />} />
          <Route path="/event" element={<Event />} />
          <Route path="/sponsors" element={<SponsorsPage />} />
          <Route path="/press" element={<Press />} />
          <Route path="/live" element={<Live phase={phase} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <StickyCta phase={phase} />
      <EnquiryModal key={modal ?? 'closed'} type={modal} onClose={closeModal} />
    </ModalContext.Provider>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <Shell />
    </BrowserRouter>
  );
}

export default App;
