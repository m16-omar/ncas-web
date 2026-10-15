import { useEffect, useState } from 'react';
import { DATES } from '../data';

// Campaign lifecycle from the PRD (section 6), plus a pre-launch state before entries open.
export type Phase = 'launch' | 'entries' | 'shortlist' | 'live' | 'winners';

export const PHASES: Phase[] = ['launch', 'entries', 'shortlist', 'live', 'winners'];

export const PHASE_LABELS: Record<Phase, string> = {
  launch: 'Coming soon',
  entries: 'Entries open',
  shortlist: 'Nominees announced',
  live: 'Live tonight',
  winners: 'Winners revealed',
};

const t = (iso: string) => new Date(iso).getTime();

export function phaseAt(now: number): Phase {
  const ceremony = t(DATES.ceremony);
  if (now < t(DATES.entriesOpen)) return 'launch';
  if (now <= t(DATES.entriesClose)) return 'entries';
  if (now < ceremony) return 'shortlist';
  if (now < ceremony + DATES.liveHours * 3_600_000) return 'live';
  return 'winners';
}

// What the hero counts down to in each phase.
export function countdownFor(phase: Phase): { label: string; target: number } | null {
  switch (phase) {
    case 'launch':
      return { label: 'Entries open in', target: t(DATES.entriesOpen) };
    case 'entries':
      return { label: 'Entries close in', target: t(DATES.entriesClose) };
    case 'shortlist':
      return { label: 'Ceremony begins in', target: t(DATES.ceremony) };
    default:
      return null;
  }
}

// `?phase=entries` previews another phase, so the team can check every state before it goes live.
function readOverride(): Phase | null {
  const value = new URLSearchParams(window.location.search).get('phase');
  return PHASES.includes(value as Phase) ? (value as Phase) : null;
}

export function usePhase(): Phase {
  const [phase, setPhase] = useState<Phase>(() => readOverride() ?? phaseAt(Date.now()));

  useEffect(() => {
    if (readOverride()) return;
    // Re-check every minute so an open tab flips over at the boundary.
    const interval = setInterval(() => setPhase(phaseAt(Date.now())), 60_000);
    return () => clearInterval(interval);
  }, []);

  return phase;
}

export function useCountdown(target: number) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const interval = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(interval);
  }, []);
  const diff = Math.max(0, target - now);
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff / 3_600_000) % 24),
    minutes: Math.floor((diff / 60_000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}
