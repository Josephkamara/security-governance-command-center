import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import RiskRegister from './RiskRegister';
import SampleBanner from '../components/SampleBanner';
import StatusBadge from '../components/StatusBadge';
import Term from '../components/Term';
import { dashboardKris, kriThresholds, risks } from '../data/risks';

const months = ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];

function sparkPoints(history: number[]): string {
  const max = Math.max(...history, 1);
  const min = Math.min(...history, 0);
  const span = max - min || 1;
  return history
    .map((value, index) => {
      const x = (index / (history.length - 1)) * 100;
      const y = 28 - ((value - min) / span) * 24;
      return `${x},${y}`;
    })
    .join(' ');
}

export default function Dashboard() {
  const onTarget = dashboardKris.filter((kri) => kri.status === 'green').length;
  const red = dashboardKris.filter((kri) => kri.status === 'red');
  const decisions = risks.filter(
    (risk) => risk.status !== 'Closed' && risk.category === 'Vendor' && /overdue|past/i.test(risk.title),
  );
  const decisionCount = Math.max(red.length, decisions.length);

  useEffect(() => {
    if (window.location.hash === '#register') {
      const panel = document.getElementById('register');
      if (panel instanceof HTMLDetailsElement) panel.open = true;
    }
  }, []);

  return (
    <article className="dashboard-page">
      <div className="print-masthead">
        <p>Security Governance Command Center</p>
        <p>Board-style summary | October 2026 | Prepared by Joseph Kamara</p>
      </div>

      <PageHeader
        title="Leadership dashboard"
        lede={
          <>
            Numbers below are{' '}
            <Term
              term="KRIs"
              definition="Key risk indicators: a short list of numbers watched against a target, with a trend."
            />{' '}
            (key risk indicators).
          </>
        }
      />

      <p className="status-line" role="status">
        {onTarget} of {dashboardKris.length} indicators on target; {decisionCount}{' '}
        {decisionCount === 1 ? 'decision' : 'decisions'} needed.
      </p>
      <SampleBanner />

      <section className="card">
        <div className="card-header">
          <h2>Decisions needed</h2>
          <p className="pill">{decisionCount} now</p>
        </div>
        {decisions.length ? (
          <ul className="brief">
            {decisions.map((risk) => (
              <li key={risk.id}>
                <strong>{risk.title}.</strong> Score {risk.likelihood * risk.impact} · Owner {risk.owner} · Due{' '}
                {risk.due}. Confirm the dated review so the overdue Tier 1 vendor does not linger into year-end
                opinions.
              </li>
            ))}
          </ul>
        ) : (
          <p>No leadership decisions are queued in this sample.</p>
        )}
        <p className="validate-note">Names, scores, and dates are synthetic. The point is a short list leadership can act on.</p>
      </section>

      <section className="card">
        <div className="card-header">
          <h2>Indicators</h2>
          <p className="pill">
            {onTarget} on target · {dashboardKris.length - onTarget} off target
          </p>
        </div>
        <div className="kri-grid">
          {dashboardKris.map((kri) => (
            <div key={kri.id} className={`kri-card tone-${kri.status}`}>
              <div className="kri-top">
                <h3>{kri.name}</h3>
                <StatusBadge label={kri.status} tone={kri.status} />
              </div>
              <p className="kri-value">{kri.value}</p>
              <p className="muted">Target: {kri.target}</p>
              <p className="kri-def">{kri.definition}</p>
              <svg className="spark" viewBox="0 0 100 32" aria-hidden="true">
                <polyline fill="none" stroke="currentColor" strokeWidth="2" points={sparkPoints(kri.history)} />
              </svg>
              <p className="trend-label">
                {months[0]} to {months[months.length - 1]} · {kri.trendLabel}
              </p>
            </div>
          ))}
        </div>
        <p className="validate-note">Thresholds and owners are a sample operating set, not a live report.</p>
      </section>

      <div className="toolbar no-print">
        <p className="muted">Print this page for a board-style one-pager.</p>
        <button type="button" className="btn btn-primary" onClick={() => window.print()}>
          Print summary
        </button>
      </div>

      <details className="card expander">
        <summary>How thresholds are set</summary>
        <p>
          Green, amber, and red lines should match enterprise appetite and local contract clocks. They are
          shown here so a reviewer can see the method, not as a second dashboard.
        </p>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Indicator</th>
                <th>Green</th>
                <th>Amber</th>
                <th>Red</th>
              </tr>
            </thead>
            <tbody>
              {kriThresholds.map((row) => (
                <tr key={row.name}>
                  <td>{row.name}</td>
                  <td>{row.green}</td>
                  <td>{row.amber}</td>
                  <td>{row.red}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </details>

      <details id="register" className="card expander">
        <summary>Full risk register</summary>
        <p>
          Security, vendor, and client items in one scored list. This is the dashboard drill-down, not a
          separate program.
        </p>
        <RiskRegister embedded />
        <p className="no-print">
          <Link to="/30-60-90">First-90-days roadmap</Link>
        </p>
      </details>
    </article>
  );
}
