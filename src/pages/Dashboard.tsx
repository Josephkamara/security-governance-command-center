import { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import RiskRegister from './RiskRegister';
import SampleBanner from '../components/SampleBanner';
import StatusBadge from '../components/StatusBadge';
import Term from '../components/Term';
import { additionalKris, kriThresholds, risks, vitalKris } from '../data/risks';
import { operatingRhythm, stakeholders } from '../data/stakeholders';

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
  const onTarget = vitalKris.filter((kri) => kri.status === 'green').length;
  const red = vitalKris.filter((kri) => kri.status === 'red');
  const decisions = risks.filter(
    (risk) => risk.status !== 'Closed' && risk.category === 'Vendor' && /overdue|past/i.test(risk.title),
  );
  const decisionCount = Math.max(red.length, decisions.length);
  const [params] = useSearchParams();

  useEffect(() => {
    const view = params.get('view') || window.location.hash.replace('#', '');
    if (view !== 'register' && view !== 'stakeholders') return;
    const panel = document.getElementById(view);
    if (panel instanceof HTMLDetailsElement) panel.open = true;
    panel?.scrollIntoView({ block: 'start' });
  }, [params]);

  return (
    <article className="dashboard-page">
      <div className="print-masthead">
        <p>Security Governance Command Center</p>
        <p>Leadership summary | October 2026 | Sample data</p>
      </div>

      <PageHeader
        title="Leadership dashboard"
        lede={
          <>
            Six numbers a healthcare security leader can act on. Each is a{' '}
            <Term
              term="KRI"
              definition="Key risk indicator: a short list of numbers watched against a target, with a trend and an owner."
            />{' '}
            with a target, a six-month trend, and a named owner.
          </>
        }
      />

      <p className="status-line" role="status">
        {onTarget} of {vitalKris.length} vital indicators on target; {decisionCount}{' '}
        {decisionCount === 1 ? 'decision' : 'decisions'} needed.
      </p>
      <SampleBanner />

      <section className="card decision-card">
        <div className="card-header">
          <h2>Decision needed</h2>
          <p className="pill">{decisionCount} now</p>
        </div>
        {decisions.length ? (
          <ul className="brief">
            {decisions.map((risk) => (
              <li key={risk.id}>
                <p className="decision-ask">
                  Approve a dated SOC 2 Type II review for the overdue Tier 1 processing vendor by {risk.due},
                  or accept the residual risk in writing.
                </p>
                <p>
                  {risk.title}. Score {risk.likelihood * risk.impact} · Owner {risk.owner} · Due {risk.due}.
                  This is the only overdue Tier 1 vendor. Year-end opinions will ask for a current report or a
                  signed acceptance.
                </p>
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
          <h2>Vital indicators</h2>
          <p className="pill">
            {onTarget} on target · {vitalKris.length - onTarget} off target
          </p>
        </div>
        <div className="kri-grid kri-grid-vital">
          {vitalKris.map((kri) => (
            <div key={kri.id} className={`kri-card tone-${kri.status}`}>
              <div className="kri-top">
                <h3>{kri.name}</h3>
                <StatusBadge label={kri.status} tone={kri.status} />
              </div>
              <p className="kri-value">{kri.value}</p>
              <dl className="kri-meta">
                <div>
                  <dt>Target</dt>
                  <dd>{kri.target}</dd>
                </div>
                <div>
                  <dt>Trend</dt>
                  <dd>{kri.trendLabel}</dd>
                </div>
                <div>
                  <dt>Owner</dt>
                  <dd>{kri.owner}</dd>
                </div>
              </dl>
              <p className="kri-def">{kri.definition}</p>
              <svg className="spark" viewBox="0 0 100 32" aria-hidden="true">
                <polyline fill="none" stroke="currentColor" strokeWidth="2" points={sparkPoints(kri.history)} />
              </svg>
              <p className="trend-label">
                {months[0]} to {months[months.length - 1]}
              </p>
            </div>
          ))}
        </div>
        <p className="validate-note">Thresholds and owners are a sample operating set, not a live report.</p>
      </section>

      <details className="card expander no-print">
        <summary>Additional indicators</summary>
        <p>Useful for operators. Not required for the monthly leadership page.</p>
        <div className="kri-grid kri-grid-extra">
          {additionalKris.map((kri) => (
            <div key={kri.id} className={`kri-card tone-${kri.status}`}>
              <div className="kri-top">
                <h3>{kri.name}</h3>
                <StatusBadge label={kri.status} tone={kri.status} />
              </div>
              <p className="kri-value">{kri.value}</p>
              <dl className="kri-meta">
                <div>
                  <dt>Target</dt>
                  <dd>{kri.target}</dd>
                </div>
                <div>
                  <dt>Trend</dt>
                  <dd>{kri.trendLabel}</dd>
                </div>
                <div>
                  <dt>Owner</dt>
                  <dd>{kri.owner}</dd>
                </div>
              </dl>
            </div>
          ))}
        </div>
      </details>

      <section id="stakeholders" className="card no-print">
        <div className="card-header">
          <h2>Stakeholder map</h2>
          <p className="pill">Sample operating set</p>
        </div>
        <p className="operating-rhythm">
          <strong>Operating rhythm.</strong> {operatingRhythm}
        </p>
        <div className="stakeholder-grid">
          {stakeholders.map((item) => (
            <article key={item.role} className="stakeholder-card">
              <h3>{item.role}</h3>
              <dl>
                <div>
                  <dt>Needs from the program</dt>
                  <dd>{item.needs}</dd>
                </div>
                <div>
                  <dt>Cadence</dt>
                  <dd>{item.cadence}</dd>
                </div>
                <div>
                  <dt>Format</dt>
                  <dd>{item.format}</dd>
                </div>
                <div>
                  <dt>Gives back</dt>
                  <dd>{item.gives}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
        <p className="validate-note">
          Roles, cadence, and formats are illustrative fictional sample data, not a live RACI.
        </p>
      </section>

      <div className="toolbar no-print">
        <p className="muted">Print this page for a one-page leadership summary: status, the decision, and the six indicators.</p>
        <button type="button" className="btn btn-primary" onClick={() => window.print()}>
          Print summary
        </button>
      </div>

      <details className="card expander no-print">
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

      <details id="register" className="card expander no-print">
        <summary>Full risk register</summary>
        <p>
          Security, vendor, and client items in one scored list. This is the dashboard drill-down, not a
          separate program.
        </p>
        <RiskRegister embedded />
        <p>
          <Link to="/30-60-90">First-90-days roadmap</Link>
        </p>
      </details>
    </article>
  );
}
