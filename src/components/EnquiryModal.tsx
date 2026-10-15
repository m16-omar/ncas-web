import React, { useEffect, useState } from 'react';
import { CheckCircle2, X } from 'lucide-react';
import { SITE, type ModalType } from '../data';

interface EnquiryModalProps {
  type: ModalType | null;
  onClose: () => void;
}

const CONTENT: Record<ModalType, { title: string; intro: string; to: string; subject: string; cta: string }> = {
  updates: {
    title: 'Get updates',
    intro: 'Hear first about the announcement, categories, jury and submission dates.',
    to: SITE.emails.general,
    subject: 'NCAs mailing list sign-up',
    cta: 'Sign me up',
  },
  partner: {
    title: 'Partnership enquiry',
    intro: 'Tell us about your organisation and our partnerships team will be in touch.',
    to: SITE.emails.partnerships,
    subject: 'NCAs partnership enquiry',
    cta: 'Send enquiry',
  },
  submission: {
    title: 'Submission alerts',
    intro: 'We will let you know when the submission portal opens and the eligibility rules are published.',
    to: SITE.emails.general,
    subject: 'NCAs submission alert request',
    cta: 'Notify me',
  },
  tickets: {
    title: 'Ticket enquiry',
    intro: 'Tell us what you need. We will contact you first when sales open, or arrange your corporate table.',
    to: SITE.emails.tickets,
    subject: 'NCAs ticket enquiry',
    cta: 'Send enquiry',
  },
  press: {
    title: 'Press accreditation',
    intro: 'Apply for ceremony and press-wall access. The PR & Media team reviews every request.',
    to: SITE.emails.press,
    subject: 'NCAs press accreditation request',
    cta: 'Apply',
  },
};

// Keyed by type in App, so `sent` resets each time the modal opens.
// No backend yet: submissions open the visitor's mail client with the details prefilled.
export const EnquiryModal: React.FC<EnquiryModalProps> = ({ type, onClose }) => {
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!type) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [type, onClose]);

  if (!type) return null;
  const content = CONTENT[type];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = [...data.entries()]
      .filter(([key]) => key !== 'consent')
      .map(([key, value]) => `${key}: ${value}`)
      .join('\n');
    window.location.href = `mailto:${content.to}?subject=${encodeURIComponent(content.subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <X size={18} />
        </button>

        <div className="modal-top">
          <h2 id="modal-title">{content.title}</h2>
          <p>{content.intro}</p>
        </div>

        <div className="modal-body">
          {sent ? (
            <div className="form-success">
              <CheckCircle2 size={56} />
              <h3>Almost done</h3>
              <p>
                Your email app should now open with your details filled in. Send the message to finish. If it did
                not open, email us at <a href={`mailto:${content.to}`}>{content.to}</a>.
              </p>
              <button className="reg-btn ghost" onClick={onClose}>Close</button>
            </div>
          ) : (
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <label>
                    Full name
                    <input name="Name" required autoComplete="name" />
                  </label>
                  <label>
                    Email
                    <input name="Email" type="email" required autoComplete="email" />
                  </label>
                </div>

                {type === 'partner' && (
                  <>
                    <div className="form-row">
                      <label>
                        Organisation
                        <input name="Organisation" required autoComplete="organization" />
                      </label>
                      <label>
                        Phone
                        <input name="Phone" type="tel" autoComplete="tel" />
                      </label>
                    </div>
                    <label>
                      Interest
                      <select name="Interest" defaultValue="Category partnership">
                        <option>Category partnership</option>
                        <option>Institutional partner</option>
                        <option>Cinema &amp; exhibition partner</option>
                        <option>Media partner</option>
                        <option>Other</option>
                      </select>
                    </label>
                    <label>
                      Message
                      <textarea name="Message" />
                    </label>
                  </>
                )}

                {type === 'submission' && (
                  <div className="form-row">
                    <label>
                      Role
                      <select name="Role" defaultValue="Producer">
                        <option>Producer</option>
                        <option>Director</option>
                        <option>Distributor</option>
                        <option>Exhibitor</option>
                        <option>Other</option>
                      </select>
                    </label>
                    <label>
                      Film title (optional)
                      <input name="Film title" />
                    </label>
                  </div>
                )}

                {type === 'tickets' && (
                  <div className="form-row">
                    <label>
                      Ticket type
                      <select name="Ticket type" defaultValue="Standard">
                        <option>Early Bird</option>
                        <option>Standard</option>
                        <option>VIP</option>
                        <option>Corporate Table (10)</option>
                      </select>
                    </label>
                    <label>
                      Quantity
                      <input name="Quantity" type="number" min={1} defaultValue={1} />
                    </label>
                  </div>
                )}

                {type === 'press' && (
                  <div className="form-row">
                    <label>
                      Media outlet
                      <input name="Media outlet" required />
                    </label>
                    <label>
                      Role
                      <input name="Role" placeholder="Reporter, photographer…" />
                    </label>
                  </div>
                )}

                <label className="consent">
                  <input type="checkbox" name="consent" required />
                  I agree to be contacted by the Nigerian Cinema Awards about this request.
                </label>

                <button type="submit" className="reg-btn">{content.cta}</button>
              </form>
          )}
        </div>
      </div>
    </div>
  );
};
