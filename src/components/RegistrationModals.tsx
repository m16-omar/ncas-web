import React, { useState } from 'react';
import { X, CheckCircle, Send } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'tickets' | 'exhibit' | 'agenda' | null;
}

export const RegistrationModals: React.FC<ModalProps> = ({ isOpen, onClose, type }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    jobTitle: '',
    company: '',
    agreeShare: true,
    agreeTerms: true,
    interests: {
      boothSpace: false,
      speaking: false,
      panel: false,
      oneToOne: false,
    }
  });

  if (!isOpen || !type) return null;

  const handleInterestChange = (key: keyof typeof formData.interests) => {
    setFormData({
      ...formData,
      interests: {
        ...formData.interests,
        [key]: !formData.interests[key]
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Fire celebratory confetti!
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    setTimeout(() => {
      // Auto-reset after a short while or user can close
    }, 4000);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  const getHeading = () => {
    if (type === 'tickets') return 'SOLUTIONS PROVIDER PASS (USD $499)';
    if (type === 'exhibit') return 'SPONSORS & EXHIBITOR ENQUIRY';
    return 'COMPLETE AGENDA & BROCHURE ACCESS';
  };

  return (
    <div className="modal-backdrop" onClick={resetAndClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        
        {/* Modal Header */}
        <div
          style={{
            padding: '24px 28px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'rgba(5, 8, 14, 0.6)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-bright)' }} />
            <h3 style={{ fontSize: '1.15rem', color: '#fff', fontWeight: 800, letterSpacing: '0.04em' }}>
              {getHeading()}
            </h3>
          </div>
          <button
            onClick={resetAndClose}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-muted)',
              cursor: 'pointer',
              padding: '6px',
            }}
          >
            <X size={22} />
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '28px' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <div
                style={{
                  width: '70px',
                  height: '70px',
                  borderRadius: '50%',
                  background: 'rgba(0, 240, 155, 0.15)',
                  color: 'var(--accent-neon)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  boxShadow: '0 0 30px rgba(0, 240, 155, 0.3)',
                }}
              >
                <CheckCircle size={38} />
              </div>
              <h4 style={{ fontSize: '1.6rem', color: '#fff', marginBottom: '8px' }}>
                Thank You, {formData.firstName || 'Delegate'}!
              </h4>
              <p style={{ color: 'var(--text-muted)', maxWidth: '420px', margin: '0 auto 24px' }}>
                Your registration has been successfully received. Our TraiCon Events liaison will send confirmation details and the summit kit to <strong style={{ color: '#fff' }}>{formData.email}</strong> shortly.
              </p>
              <button onClick={resetAndClose} className="btn btn-primary" style={{ padding: '12px 32px' }}>
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              
              {/* Ticket pricing info if tickets */}
              {type === 'tickets' && (
                <div
                  style={{
                    background: 'rgba(5, 174, 112, 0.1)',
                    border: '1px solid rgba(58, 213, 159, 0.3)',
                    borderRadius: '12px',
                    padding: '16px 20px',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <span style={{ fontWeight: 700, color: '#fff' }}>Standard Solutions Provider Pass</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 800, color: 'var(--accent-neon)', fontSize: '1.15rem' }}>
                      USD $499 / Person
                    </span>
                  </div>
                  <ul style={{ fontSize: '0.82rem', color: 'var(--text-muted)', listStyle: 'none', paddingLeft: 0, display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <li>✓ One (1) Full Participant Pass to All 2026 Summit Sessions</li>
                    <li>✓ Pre-qualified 1:1 Networking & Executive Matchmaking Access</li>
                    <li>✓ Full Access to 5-Star Lunch, Tea Breaks & Networking Cocktails</li>
                  </ul>
                </div>
              )}

              {/* Input grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <input
                  type="text"
                  required
                  placeholder="FIRST NAME*"
                  className="form-input"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                />
                <input
                  type="text"
                  required
                  placeholder="LAST NAME*"
                  className="form-input"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <input
                  type="email"
                  required
                  placeholder="OFFICIAL WORK EMAIL*"
                  className="form-input"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <input
                  type="tel"
                  required
                  placeholder="PHONE / MOBILE*"
                  className="form-input"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <input
                  type="text"
                  required
                  placeholder="JOB TITLE*"
                  className="form-input"
                  value={formData.jobTitle}
                  onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                />
                <input
                  type="text"
                  required
                  placeholder="COMPANY / ORGANIZATION*"
                  className="form-input"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
              </div>

              {/* Sponsor Interests Checkboxes */}
              {type === 'exhibit' && (
                <div style={{ marginTop: '6px' }}>
                  <label style={{ display: 'block', color: '#fff', fontSize: '0.9rem', fontWeight: 600, marginBottom: '10px' }}>
                    I'm Interested in:
                  </label>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                    {[
                      { key: 'boothSpace', label: 'Exhibition Booth Space' },
                      { key: 'speaking', label: 'Keynote Speaking Opportunity' },
                      { key: 'panel', label: 'Executive Panel Discussion' },
                      { key: 'oneToOne', label: '1:1 Buyer Matchmaking Meetings' },
                    ].map((interest) => (
                      <label
                        key={interest.key}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          background: 'rgba(255, 255, 255, 0.03)',
                          padding: '8px 12px',
                          borderRadius: '8px',
                          fontSize: '0.85rem',
                          color: 'var(--text-muted)',
                          cursor: 'pointer',
                        }}
                      >
                        <input
                          type="checkbox"
                          checked={formData.interests[interest.key as keyof typeof formData.interests]}
                          onChange={() => handleInterestChange(interest.key as keyof typeof formData.interests)}
                        />
                        <span>{interest.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Policy Checkboxes */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '6px' }}>
                <label style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.78rem', color: 'var(--text-dim)', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    required
                    checked={formData.agreeShare}
                    onChange={(e) => setFormData({ ...formData, agreeShare: e.target.checked })}
                    style={{ marginTop: '3px' }}
                  />
                  <span>
                    I agree to my contact details being shared with event sponsors/partners to contact me as a follow-up to my participation.
                  </span>
                </label>

                <label style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.78rem', color: 'var(--text-dim)', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    required
                    checked={formData.agreeTerms}
                    onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                    style={{ marginTop: '3px' }}
                  />
                  <span>
                    I agree to the General Terms and Conditions and Privacy Policy of TraiCon Events.
                  </span>
                </label>
              </div>

              {/* Submit CTA */}
              <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '16px', marginTop: '10px' }}>
                <Send size={16} />
                <span>CONFIRM & SUBMIT REGISTRATION</span>
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
