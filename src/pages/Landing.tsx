import { Link } from 'react-router-dom';
import dashShot from '../../docs/screenshots/01-dashboard.png';
import controlsShot from '../../docs/screenshots/02-controls.png';
import soxShot from '../../docs/screenshots/03-sox.png';
import trustShot from '../../docs/screenshots/04-client-trust.png';
import vendorShot from '../../docs/screenshots/05-vendor-risk.png';
import riskShot from '../../docs/screenshots/06-risk-register.png';
import parentShot from '../../docs/screenshots/07-parent-alignment.png';
import planShot from '../../docs/screenshots/08-30-60-90.png';
import './Landing.css';

const modules = [
  {
    to: '/dashboard',
    title: 'Executive dashboard',
    type: 'Leadership view',
    shot: dashShot,
    alt: 'Sample executive dashboard with eight KRIs',
    shows: 'How eight KRIs, top risks, and a printable summary fit on one page.',
    body: 'Targets, trends, and status sit together so a monthly readout has a short list of decisions, not a slide deck of mixed metrics.',
  },
  {
    to: '/controls',
    title: 'Unified control framework',
    type: 'Control map',
    shot: controlsShot,
    alt: 'Searchable control matrix mapped across six frameworks',
    shows: 'How one owner and one evidence set can answer several public frameworks.',
    body: 'SOX ITGC, SOC 2, the HIPAA Security Rule, NIST CSF 2.0, ISO 27001:2022, and public HITRUST numbering share a single row.',
  },
  {
    to: '/sox',
    title: 'SOX ITGC tracker',
    type: 'Test cycle',
    shot: soxShot,
    alt: 'SOX ITGC exception workflow',
    shows: 'How an exception moves from finding to close.',
    body: 'Scope, Impact, Evidence, Communicate, Close. A named owner and a date, not a status field that never dies.',
  },
  {
    to: '/client-trust',
    title: 'Client security trust center',
    type: 'Answer library',
    shot: trustShot,
    alt: 'Client questionnaire library and SLA tracker',
    shows: 'How standard questions get reused and hard ones stay visible.',
    body: 'SIG Lite and HECVAT-style answers tied to controls, plus intake and turnaround tracking.',
  },
  {
    to: '/vendor-risk',
    title: 'Vendor risk',
    type: 'Program design',
    shot: vendorShot,
    alt: 'Vendor tier model and inherent risk calculator',
    shows: 'How inherent risk, not the loudest request, sets the work.',
    body: 'Four tiers, a short scorer, a seven-step intake, and a SOC checklist that includes bridge letters and CUECs.',
  },
  {
    to: '/risk-register',
    title: 'Risk register',
    type: 'Risk view',
    shot: riskShot,
    alt: 'Likelihood times impact heatmap',
    shows: 'How security, vendor, and client items share one scored list.',
    body: 'Likelihood times impact, treatment, and findings that stay open until they close.',
  },
  {
    to: '/parent-alignment',
    title: 'Parent-enterprise alignment',
    type: 'Governance',
    shot: parentShot,
    alt: 'Forum charter and RACI',
    shows: 'How a local organization adopts parent standards without a second control universe.',
    body: 'A sample forum charter, a RACI, and a standards crosswalk with Parent Enterprise Security.',
  },
  {
    to: '/30-60-90',
    title: '30-60-90 plan',
    type: 'Operating plan',
    shot: planShot,
    alt: 'Three-phase 30-60-90 plan',
    shows: 'How the first quarter maps reality before it automates evidence.',
    body: 'Listen and map, stand up intake and the first forum, then publish a first dashboard and a 12-month roadmap.',
  },
];

export default function Landing() {
  return (
    <div className="landing">
      <a className="landing-skip" href="#landing-main">
        Skip to content
      </a>
      <header className="landing-header">
        <h1>Joseph Kamara</h1>
        <p>SECURITY GOVERNANCE PORTFOLIO · CPA, CISA, CISSP</p>
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
        <div className="landing-intro">
          <p>
            <strong>About:</strong> Fifteen years in IT audit, SOX ITGC, vendor risk, and security
            governance across healthcare and medtech. CPA, CISA, and CISSP. Work includes Big Four
            and national-firm attestation, SOX ITGC program leadership, hospital-system IT audit,
            and vendor-risk reviews that used security ratings such as BitSight.
          </p>
          <p>
            <strong>What this project demonstrates:</strong> How to run one control set, one evidence
            path, one risk register, and one leadership page for a healthcare services organization
            and its parent enterprise. The judgment is in what to share, what to keep local, and
            what not to rebuild.
          </p>
          <p>
            <strong>Note:</strong> Every number, vendor, client, and finding is illustrative fictional
            sample data. No real employer or client is named.
          </p>
        </div>

        <article className="landing-card landing-featured">
          <h2>
            Security Governance Command Center
            <span className="landing-type">Program Design</span>
          </h2>
          <p className="landing-shows">
            What this shows: How a local organization can adopt parent standards, test a control
            once, and still answer clients and auditors without standing up a second GRC program.
          </p>
          <p>
            A static working model for intake, single-pass control testing, a client answer library,
            vendor tiering, a scored risk register, and a printable leadership page. Parent
            Enterprise Security owns the standard. The local organization operates it and adds only
            what a contract requires.
          </p>
          <span className="landing-tag">SOX ITGC</span>
          <span className="landing-tag">SOC 2</span>
          <span className="landing-tag">HIPAA</span>
          <span className="landing-tag">NIST CSF 2.0</span>
          <span className="landing-tag">ISO 27001</span>
          <p>
            <Link to="/dashboard">Open the interactive workspace →</Link>
          </p>
        </article>

        <p className="landing-fictional">
          Fictional scenario. Organization names, people, and data are invented for demonstration.
        </p>

        <div className="landing-summary">
          <h3>Scenario</h3>
          <p>
            A healthcare services organization and its parent enterprise need one way to test
            controls, answer clients, tier vendors, and give leadership a monthly page. Evidence
            lives with many owners. Client contracts add a few extras. Parent standards already
            exist and should stay the source of truth.
          </p>
          <h3>Frameworks</h3>
          <p>
            SOX ITGC, SOC 2, the HIPAA Security Rule, NIST CSF 2.0, ISO 27001:2022, and public
            HITRUST CSF numbering. HITRUST IDs should be checked against the licensed version
            before anyone treats them as an official crosswalk.
          </p>
          <h3>Key artifacts</h3>
          <p>
            Searchable control matrix, SOX exception path, SIG Lite / HECVAT-style library and SLA
            tracker, four-tier vendor model with an inherent-risk calculator, likelihood times
            impact register, parent RACI and standards crosswalk, 30-60-90 outline, printable
            eight-KRI dashboard.
          </p>
          <h3>Takeaway</h3>
          <p>
            One well-designed control, with one owner and one evidence set, can support several
            assessments. The workspace shows how that looks in practice, and where a second local
            program would only add drift.
          </p>
        </div>

        <h2 className="landing-section">The judgment</h2>

        <h3>Constraint</h3>
        <p>
          Parent Enterprise Security already publishes standards, a TPRM approach, and a SOX
          calendar. Client contracts still require a few local extras. Building a parallel policy
          set would look complete and would be wrong. Doing nothing leaves client reviews and
          vendor diligence in mailboxes.
        </p>

        <h3>Options</h3>
        <p>
          <strong>Option A. Adopt the parent control universe.</strong> Map local systems to parent
          standards. Add extras only where a contract requires more. Test once and reuse the
          evidence for SOX, SOC 2, HIPAA, and client questionnaires.
        </p>
        <p>
          <strong>Option B. Stand up a separate local GRC program.</strong> New policies, a new
          tool, and a second test calendar. Fast to announce. It creates a control map the parent
          cannot attest and doubles the evidence burden.
        </p>
        <p>
          <strong>Option C. Wait for a platform purchase.</strong> Keep answering work from
          spreadsheets until a GRC tool is funded. Cheap until the first audit sample or client
          deadline lands on an undocumented control.
        </p>

        <h3>Tradeoff</h3>
        <p>
          Option A is slower to look new. It keeps one source of truth and one owner per control.
          Option B looks finished locally and splits the enterprise into two programs. Option C
          avoids a decision and hides aging exceptions until someone else finds them.
        </p>

        <h3>Judgment call</h3>
        <p>
          Choose A. Map first. One front door for intake, one control set, one risk register, and
          one page for leadership. Automate evidence only after a control is owned. The interactive
          workspace is the operating picture of that choice, filled with fictional sample data.
        </p>

        <p>
          <Link className="landing-cta" to="/dashboard">
            Open the interactive workspace →
          </Link>
        </p>

        <h2 className="landing-section">Modules</h2>
        <p>
          Each module is a working screen, not a slide. Open any of them from here, or start at the
          dashboard and move through the nav.
        </p>

        <div className="landing-modules">
          {modules.map((item) => (
            <article key={item.to} className="landing-card">
              <h3>
                {item.title}
                <span className="landing-type">{item.type}</span>
              </h3>
              <p className="landing-shows">What this shows: {item.shows}</p>
              <p>{item.body}</p>
              <Link to={item.to} className="landing-shot-link">
                <img src={item.shot} alt={item.alt} />
              </Link>
              <p>
                <Link to={item.to}>Open {item.title} →</Link>
              </p>
            </article>
          ))}
        </div>

        <p className="landing-updated">Illustrative fictional sample data · Public frameworks only</p>
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
