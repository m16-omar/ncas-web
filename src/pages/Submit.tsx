import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, CircleAlert } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { SubmitButton } from '../components/Hero';
import { SITE, SUBMISSION_CHECKLIST, SUBMISSION_RULES } from '../data';
import { useMeta } from '../lib/meta';
import { useOpenModal } from '../lib/modal';
import type { Phase } from '../lib/phase';

const STATUS: Record<Phase, string> = {
  launch: 'Submissions open on 1 January 2027 and close on 31 January 2027.',
  entries: 'Submissions are open until 31 January 2027.',
  shortlist: 'Submissions for this cycle are closed. Nominees have been announced.',
  live: 'Submissions for this cycle are closed.',
  winners: 'Submissions for this cycle are closed. Sign up to hear when the next cycle opens.',
};

export const Submit: React.FC<{ phase: Phase }> = ({ phase }) => {
  useMeta('Submit a Film', 'Rules, checklist and guidelines for submitting a film to the Nigerian Cinema Awards.');
  const open = useOpenModal();
  const isOpen = phase === 'entries';

  return (
    <>
      <PageHeader
        title="Submit a"
        accent="Film"
        intro="Welcome to our film submission page. Please follow the guidelines below to make sure your submission goes smoothly. We are excited to receive your films."
      >
        <div className={`status-pill${isOpen ? ' open' : ''}`}>
          {isOpen ? <CheckCircle2 size={16} /> : <CircleAlert size={16} />}
          {STATUS[phase]}
        </div>
        <div className="cover-btns" style={{ marginTop: 28 }}>
          {isOpen && SITE.submissionPortalUrl ? (
            <SubmitButton>Go to Submission Portal</SubmitButton>
          ) : (
            <button className="reg-btn" onClick={() => open('submission')}>
              {isOpen ? 'Request Submission Pack' : 'Notify Me When Entries Open'}
            </button>
          )}
          <Link className="reg-btn ghost" to="/categories">View Categories</Link>
        </div>
      </PageHeader>

      <section className="page-section">
        <div className="wrap submit-grid">
          <div>
            <h2 className="title small reveal">Submission <span>Rules</span></h2>
            <ol className="rules">
              {SUBMISSION_RULES.map((rule, i) => (
                <li className="reveal" key={i}>
                  <span className="rule-num grad-text">{String(i + 1).padStart(2, '0')}</span>
                  <p>{rule}</p>
                </li>
              ))}
            </ol>
          </div>

          <aside className="checklist reveal">
            <h2>What you'll need</h2>
            <ul>
              {SUBMISSION_CHECKLIST.map((item) => (
                <li key={item}><CheckCircle2 size={18} /> {item}</li>
              ))}
            </ul>
            <p>
              Questions about your entry? Email{' '}
              <a className="link" href={`mailto:${SITE.emails.entries}`}>{SITE.emails.entries}</a>.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
};
