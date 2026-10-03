import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PartnersMarquee } from './components/PartnersMarquee';
import { AboutSection } from './components/AboutSection';
import { ChiefGuest } from './components/ChiefGuest';
import { StatsCounter } from './components/StatsCounter';
import { RunningRibbon } from './components/RunningRibbon';
import { WhoAttends } from './components/WhoAttends';
import { ThemesSection } from './components/ThemesSection';
import { MarketData } from './components/MarketData';
import { SummitHighlights } from './components/SummitHighlights';
import { WhyExhibit } from './components/WhyExhibit';
import { SpeakersSection } from './components/SpeakersSection';
import { SponsorsSection } from './components/SponsorsSection';
import { AgendaSection } from './components/AgendaSection';
import { GallerySection } from './components/GallerySection';
import { Footer } from './components/Footer';
import { RegistrationModals } from './components/RegistrationModals';
import { WhatsAppButton } from './components/WhatsAppButton';

export function App() {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: 'tickets' | 'exhibit' | 'agenda' | null;
  }>({
    isOpen: false,
    type: null,
  });

  const openTickets = () => setModalState({ isOpen: true, type: 'tickets' });
  const openExhibit = () => setModalState({ isOpen: true, type: 'exhibit' });
  const openAgenda = () => setModalState({ isOpen: true, type: 'agenda' });
  const closeModal = () => setModalState({ isOpen: false, type: null });

  return (
    <div className="site-wrapper" style={{ minHeight: '100vh', position: 'relative' }}>
      {/* Background Cyber Grid */}
      <div className="cyber-grid" />

      {/* Navigation Bar */}
      <Navbar onOpenTickets={openTickets} onOpenExhibit={openExhibit} />

      {/* Main Page Flow */}
      <main>
        {/* Hero Section with Live Countdown */}
        <Hero onOpenTickets={openTickets} onOpenExhibit={openExhibit} />

        {/* Previous Editions Partners Marquee */}
        <PartnersMarquee />

        {/* About Summit & #FRSNIGERIA */}
        <AboutSection />

        {/* Chief Guest of Honor: SEC Nigeria Director-General */}
        <ChiefGuest />

        {/* Core Event Metrics */}
        <StatsCounter />

        {/* Running Marquee Ribbon */}
        <RunningRibbon />

        {/* Who Attends & Spending Budget */}
        <WhoAttends />

        {/* 21 Key Fintech Focus Themes */}
        <ThemesSection />

        {/* Why Nigeria Market Data */}
        <MarketData />

        {/* Summit Highlights (1:1, Keynotes, Showcase) */}
        <SummitHighlights onOpenTickets={openTickets} onOpenExhibit={openExhibit} />

        {/* Why Exhibit / Sponsor */}
        <WhyExhibit onOpenExhibit={openExhibit} />

        {/* Speakers Directory */}
        <SpeakersSection />

        {/* Sponsors Showcase */}
        <SponsorsSection />

        {/* Agenda Timetable */}
        <AgendaSection onOpenAgendaModal={openAgenda} />

        {/* Previous Edition Gallery Archive */}
        <GallerySection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Registration & Enquiry Modals */}
      <RegistrationModals
        isOpen={modalState.isOpen}
        onClose={closeModal}
        type={modalState.type}
      />

      {/* Floating WhatsApp Quick Action */}
      <WhatsAppButton />
    </div>
  );
}

export default App;
