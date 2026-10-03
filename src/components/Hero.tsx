import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, ExternalLink, Sparkles } from 'lucide-react';
import { EVENT_DATA } from '../data';

interface HeroProps {
  onOpenTickets: () => void;
  onOpenExhibit: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTickets, onOpenExhibit }) => {
  // Live Countdown to November 15, 2026
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const target = new Date('2026-11-15T09:00:00Z').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        paddingTop: '120px',
        paddingBottom: '80px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background Ambient Video Stream */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.28,
          filter: 'saturate(1.2) contrast(1.1)',
          zIndex: 0,
        }}
      >
        <source src="https://fintechrevolutionseries.com/nigeria/assets/video/cover_video.mp4" type="video/mp4" />
      </video>

      {/* Futuristic Mesh & Gradient Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 50% 30%, rgba(5, 174, 112, 0.18) 0%, rgba(5, 8, 14, 0.85) 60%, #05080e 100%)',
          zIndex: 1,
        }}
      />

      {/* Floating Glow Orbs */}
      <div className="glow-orb glow-orb-green" style={{ top: '15%', left: '10%', width: '450px', height: '450px' }} />
      <div className="glow-orb glow-orb-blue" style={{ bottom: '10%', right: '15%', width: '500px', height: '500px' }} />

      {/* Main Content Container */}
      <div className="max-w-content" style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 20px' }}>
        
        {/* Edition Pill Badge */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
          <span className="section-tag pulse-badge" style={{ margin: 0, background: 'rgba(5, 174, 112, 0.18)', border: '1px solid rgba(0, 240, 155, 0.4)' }}>
            <Sparkles size={14} color="var(--accent-bright)" />
            AFRICA'S LEADING FINTECH SUMMIT • 15TH GLOBAL EDITION
          </span>
        </div>

        {/* Hero Main Tagline */}
        <h1
          style={{
            fontSize: 'clamp(2.4rem, 5.5vw, 4.4rem)',
            fontWeight: 900,
            lineHeight: 1.08,
            letterSpacing: '-0.02em',
            maxWidth: '1050px',
            margin: '0 auto 20px',
            textTransform: 'uppercase',
          }}
        >
          <span className="stroke-text" style={{ display: 'block', fontSize: '0.88em' }}>
            TRANSFORMING AFRICA'S
          </span>
          <span className="gradient-text">
            FINANCIAL & PAYMENTS
          </span>
          <span style={{ display: 'block', color: 'var(--accent-neon)' }}>
            REVOLUTION
          </span>
        </h1>

        {/* Sub-tagline */}
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            color: 'var(--accent-bright)',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            marginBottom: '32px',
          }}
        >
          Connect • Transform • Lead
        </p>

        {/* Event Date & Location Card */}
        <div
          style={{
            display: 'inline-flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px 28px',
            background: 'rgba(13, 22, 35, 0.8)',
            border: '1px solid rgba(58, 213, 159, 0.25)',
            borderRadius: '14px',
            padding: '12px 24px',
            backdropFilter: 'blur(12px)',
            marginBottom: '40px',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.5)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#fff', fontSize: '0.98rem' }}>
            <Calendar size={18} color="var(--accent-bright)" />
            <span style={{ fontWeight: 700 }}>NOVEMBER 2026</span>
          </div>

          <div style={{ width: '1px', height: '20px', background: 'rgba(255, 255, 255, 0.15)' }} />

          <a
            href={EVENT_DATA.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: 'var(--text-main)',
              textDecoration: 'none',
              fontSize: '0.95rem',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-neon)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-main)')}
          >
            <MapPin size={18} color="var(--accent-bright)" />
            <span>Balmoral Convention Centre Ikeja - Sheraton Lagos</span>
            <ExternalLink size={14} style={{ opacity: 0.6 }} />
          </a>
        </div>

        {/* Live Countdown Display */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '14px',
            flexWrap: 'wrap',
            marginBottom: '44px',
          }}
        >
          {[
            { label: 'DAYS', val: timeLeft.days },
            { label: 'HOURS', val: timeLeft.hours },
            { label: 'MINUTES', val: timeLeft.minutes },
            { label: 'SECONDS', val: timeLeft.seconds },
          ].map((item, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                width: '100px',
                padding: '16px 8px',
                textAlign: 'center',
                background: 'rgba(8, 14, 24, 0.85)',
                border: '1px solid rgba(58, 213, 159, 0.25)',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '2.1rem',
                  fontWeight: 800,
                  color: 'var(--accent-neon)',
                  lineHeight: 1,
                  marginBottom: '6px',
                  textShadow: '0 0 15px rgba(0, 240, 155, 0.4)',
                }}
              >
                {String(item.val).padStart(2, '0')}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.12em',
                  color: 'var(--text-dim)',
                  fontWeight: 600,
                }}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Primary Action Buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '18px', flexWrap: 'wrap', marginBottom: '56px' }}>
          <button
            onClick={onOpenExhibit}
            className="btn btn-secondary"
            style={{ minWidth: '180px', padding: '16px 32px', fontSize: '1rem' }}
          >
            EXHIBIT NOW
          </button>
          <button
            onClick={onOpenTickets}
            className="btn btn-primary"
            style={{ minWidth: '180px', padding: '16px 32px', fontSize: '1rem' }}
          >
            GET TICKETS
          </button>
        </div>

        {/* Patronage & Organised by strip */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '40px',
            flexWrap: 'wrap',
            paddingTop: '28px',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          {/* Under Patronage */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '0.15em', color: 'var(--text-dim)', textTransform: 'uppercase' }}>
              UNDER THE PATRONAGE
            </span>
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '8px',
                padding: '8px 20px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}
            >
              <img
                src="https://fintechrevolutionseries.com/nigeria/assets/images/sponsors/new/securities%20and%20exchange%20commission.svg"
                alt="Securities and Exchange Commission Nigeria"
                style={{ height: '36px', maxWidth: '240px', objectFit: 'contain' }}
              />
            </div>
          </div>

          {/* Awards Badge */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '0.15em', color: 'var(--text-dim)', textTransform: 'uppercase' }}>
              CO-LOCATED WITH
            </span>
            <img
              src="https://fintechrevolutionseries.com/assets/images/ft26-awards.webp"
              alt="Fintech Revolution Awards 2026"
              style={{ height: '38px', objectFit: 'contain' }}
            />
          </div>

          {/* Organised by */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '0.15em', color: 'var(--text-dim)', textTransform: 'uppercase' }}>
              ORGANISED BY
            </span>
            <a href="https://traiconevents.com/" target="_blank" rel="noopener noreferrer">
              <img
                src="https://fintechrevolutionseries.com/nigeria/assets/images/tce-logo.png"
                alt="TraiCon Events Logo"
                style={{ height: '36px', objectFit: 'contain', filter: 'brightness(1.1)' }}
              />
            </a>
          </div>
        </div>

      </div>
    </header>
  );
};
