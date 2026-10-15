import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bell, Clapperboard, Radio, Ticket } from 'lucide-react';
import { SITE } from '../data';
import { useOpenModal } from '../lib/modal';
import type { Phase } from '../lib/phase';

// Floating call to action that follows the visitor, matching the current campaign phase.
export const StickyCta: React.FC<{ phase: Phase }> = ({ phase }) => {
  const open = useOpenModal();
  const { pathname } = useLocation();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const cls = `sticky-cta${show ? ' show' : ''}`;

  if (phase === 'entries') {
    if (pathname === '/submit') return null;
    return SITE.submissionPortalUrl ? (
      <a className={cls} href={SITE.submissionPortalUrl} target="_blank" rel="noreferrer">
        <Clapperboard size={18} /> Submit Entry
      </a>
    ) : (
      <Link className={cls} to="/submit"><Clapperboard size={18} /> Submit Entry</Link>
    );
  }
  if (phase === 'shortlist') {
    if (pathname === '/tickets') return null;
    return <Link className={cls} to="/tickets"><Ticket size={18} /> Buy Tickets</Link>;
  }
  if (phase === 'live') {
    if (pathname === '/live') return null;
    return <Link className={`${cls} live`} to="/live"><Radio size={18} /> Watch Live</Link>;
  }
  return (
    <button className={cls} onClick={() => open('updates')}>
      <Bell size={18} /> Get Updates
    </button>
  );
};
