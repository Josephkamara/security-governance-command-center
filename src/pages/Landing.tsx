import { Link } from 'react-router-dom';
import dashShot from '../../docs/screenshots/01-dashboard.png';
import controlsShot from '../../docs/screenshots/02-controls.png';
import trustShot from '../../docs/screenshots/04-client-trust.png';
import vendorShot from '../../docs/screenshots/05-vendor-risk.png';
import './Landing.css';

const cards = [
  {
    to: '/dashboard?tour=1',
    title: 'Leadership dashboard',
    verb: 'See the status line and the one decision.',
    shot: dashShot,
    alt: 'Sample leadership dashboard',
  },
  {
    to: '/controls?tour=2',
    title: 'One control, many frameworks',
    verb: 'See how one test answers six frameworks.',
    shot: controlsShot,
    alt: 'Control mapped across six frameworks',
  },
  {
    to: '/vendor-risk?tour=3',
    title: 'Vendors',
    verb: 'See how the tier, not the brand name, sets the work.',
    shot: vendorShot,
    alt: 'Vendor tier model',
  },
  {
    to: '/client-trust',
    title: 'Client security questionnaires',
    verb: 'See how standard answers stay fast and consistent.',
    shot: trustShot,
    alt: 'Client questionnaire library',
  },
];

export default function Landing() {
  return (
    <div className="landing">
      <a className="landing-skip" href="#landing-main">
        Skip to content
      </a>
      <header className="landing-header">
        <h1>Joseph Kamara, CPA, CISA, CISSP</h1>
        <p>SECURITY GOVERNANCE PORTFOLIO</p>
        <nav>
          <a href="https://github.com/Josephkamara" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/joseph-kamara" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://josefkamara.com" target="_blank" rel="noreferrer">
            josefkamara.com
          </a>
        </nav>
      </header>

      <main id="landing-main">
        <section className="landing-hero">
          <p className="page-kicker">Security Governance Command Center</p>
          <h2 className="landing-value">One control set, one risk register, one page for leadership</h2>
          <p className="landing-sub">
            Illustrative fictional sample data · Public frameworks only. Designed to sit on top of existing GRC
            and TPRM tools.
          </p>
          <p>
            <Link className="btn btn-primary landing-tour-btn" to="/dashboard?tour=1">
              Start the 3-minute tour
            </Link>
          </p>
        </section>

        <div className="landing-door-grid">
          {cards.map((card) => (
            <article key={card.to} className="landing-card">
              <h3>{card.title}</h3>
              <p>{card.verb}</p>
              <Link to={card.to} className="landing-shot-link">
                <img src={card.shot} alt={card.alt} />
              </Link>
              <p>
                <Link to={card.to}>Open {card.title} →</Link>
              </p>
            </article>
          ))}
        </div>

        <p className="landing-fictional">
          Fictional scenario. Organization names, people, and data are invented for demonstration.
        </p>

        <details className="landing-summary expander">
          <summary>Design decisions</summary>
          <h3>Constraint</h3>
          <p>
            Enterprise standards, a TPRM approach, and a SOX calendar already exist. Client contracts still
            require a few local extras. Building a parallel policy set would look complete and would be wrong.
            Doing nothing leaves client reviews and vendor diligence in mailboxes.
          </p>
          <h3>Options</h3>
          <p>
            <strong>Option A. Adopt the enterprise control universe.</strong> Map local systems to enterprise
            standards. Add extras only where a contract requires more. Test once and reuse the evidence for
            SOX, SOC 2, HIPAA, and client questionnaires.
          </p>
          <p>
            <strong>Option B. Stand up a separate local GRC program.</strong> New policies, a new tool, and a
            second test calendar. Fast to announce. It creates a control map the enterprise cannot attest and
            doubles the evidence burden.
          </p>
          <p>
            <strong>Option C. Wait for a platform purchase.</strong> Keep answering work from spreadsheets until
            a GRC tool is funded. Cheap until the first audit sample or client deadline lands on an undocumented
            control.
          </p>
          <h3>Tradeoff</h3>
          <p>
            Option A is slower to look new. It keeps one source of truth and one owner per control. Option B
            looks finished locally and splits the work into two programs. Option C avoids a decision and hides
            aging exceptions until someone else finds them.
          </p>
          <h3>Judgment call</h3>
          <p>
            Choose A. Map first. One front door for intake, one control set, one risk register, and one page
            for leadership. Automate evidence only after a control is owned.
          </p>
        </details>

        <p className="landing-updated">
          <Link to="/about">About Joseph and the first-90-days roadmap</Link>
        </p>
      </main>

      <footer className="landing-footer">
        Joseph Kamara, CPA, CISA, CISSP ·{' '}
        <a href="https://github.com/Josephkamara" target="_blank" rel="noreferrer">
          GitHub
        </a>{' '}
        ·{' '}
        <a href="https://www.linkedin.com/in/joseph-kamara" target="_blank" rel="noreferrer">
          LinkedIn
        </a>{' '}
        ·{' '}
        <a href="https://josefkamara.com" target="_blank" rel="noreferrer">
          josefkamara.com
        </a>
      </footer>
    </div>
  );
}
