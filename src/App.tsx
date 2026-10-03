import { useCallback, useState } from 'react';
import type { ModalType } from './data';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Ribbon } from './components/Ribbon';
import { About, Stats } from './components/About';
import { WhyCinema, Process } from './components/WhyCinema';
import { Categories } from './components/Categories';
import { Audiences } from './components/Audiences';
import { Integrity } from './components/Integrity';
import { Jury } from './components/Jury';
import { Roadmap } from './components/Roadmap';
import { Partners } from './components/Partners';
import { Press, Faq, CtaBand } from './components/Press';
import { Footer } from './components/Footer';
import { EnquiryModal } from './components/EnquiryModal';

export function App() {
  const [modal, setModal] = useState<ModalType | null>(null);
  const closeModal = useCallback(() => setModal(null), []);

  return (
    <>
      <Navbar onOpen={setModal} />
      <main>
        <Hero onOpen={setModal} />
        <Ribbon />
        <About />
        <Stats />
        <WhyCinema />
        <Process />
        <Categories />
        <Audiences />
        <Integrity />
        <Jury />
        <Roadmap />
        <Partners onOpen={setModal} />
        <Press />
        <Faq />
        <CtaBand onOpen={setModal} />
      </main>
      <Footer onOpen={setModal} />
      <EnquiryModal key={modal ?? 'closed'} type={modal} onClose={closeModal} />
    </>
  );
}

export default App;
