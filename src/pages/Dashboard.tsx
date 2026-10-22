import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import SampleBanner from '../components/SampleBanner';
import Section from '../components/Section';
import StatusBadge from '../components/StatusBadge';
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
  const topRisks = [...risks]
    .filter((risk) => risk.status !== 'Closed')
    .sort((a, b) => b.likelihood * b.impact - a.likelihood * a.impact)
    .slice(0, 4);

  const green = dashboardKris.filter((kri) => kri.status === 'green').length;
  const amber = dashboardKris.filter((kri) => kri.status === 'amber').length;
  const red = dashboardKris.filter((kri) => kri.status === 'red').length;

  return (
    <article className="dashboard-page">
      <div className="print-masthead">
        <p>Security Governance Command Center</p>
        <p>Board-style summary | October 2026 | Prepared by Joseph Kamara</p>
      </div>

      <PageHeader
        title="One page for leadership"
        lede="Eight numbers with targets and trends, the top risks, and the decisions needed. Amber KRIs and scored risks are the items that need a closer look."
      />
      <SampleBanner />

      <div className="toolbar no-print">
        <p className="muted">Print this page for a board-style one-pager.</p>
        <button type="button" className="btn btn-primary" onClick={() => window.print()}>
          Print summary
        </button>
      </div>

      <section className="card">
        <div className="card-header">
          <h2>Key risk indicators</h2>
          <p className="pill">
            {green} green · {amber} amber · {red} red
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
        <p className="validate-note">
          Thresholds and owners are a sample operating set, not a live report.
        </p>
      </section>

      <div className="split">
        <Section
          title="Top risks that need a decision"
          validate="Names, scores, and dates are synthetic. The point is a short list leadership can act on."
        >
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Risk</th>
                  <th>Score</th>
                  <th>Owner</th>
                  <th>Treatment</th>
                  <th>Due</th>
                </tr>
              </thead>
              <tbody>
                {topRisks.map((risk) => (
                  <tr key={risk.id}>
                    <td>
                      <strong>{risk.title}</strong>
                      <div className="muted">{risk.category}</div>
                    </td>
                    <td>
                      <StatusBadge
                        label={String(risk.likelihood * risk.impact)}
                        tone={risk.likelihood * risk.impact >= 12 ? 'red' : 'amber'}
                      />
                    </td>
                    <td>{risk.owner}</td>
                    <td>{risk.treatment}</td>
                    <td>{risk.due}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section
          title="Sample monthly readout"
          validate="This readout is a sample of tone and structure, not a report on a live program."
        >
          <ul className="brief">
            <li>
              <strong>Overall:</strong> six of eight KRIs are green. One is amber. One is red.
            </li>
            <li>
              <strong>Working:</strong> client review cycle time and MFA coverage are moving the right way.
            </li>
            <li>
              <strong>Attention:</strong> Tier 1 vendor currency is red because one offshore coding vendor is past its 12-month review. Two high findings have dated plans.
            </li>
            <li>
              <strong>Ask:</strong> confirm the November 15 vendor review date and the Q1 MFA pilot so the SOX exception does not linger into year-end opinions.
            </li>
            <li>
              <strong>Calendar:</strong> next governance forum 8 November 2026. Parent SOX ITGC testing in Q4. One client annual security review in December.
            </li>
          </ul>
          <p className="no-print">
            <Link to="/risk-register">Open the full risk register</Link>
            {' · '}
            <Link to="/30-60-90">See the 30-60-90 plan</Link>
          </p>
        </Section>
      </div>

      <Section
        title="Proposed KRI thresholds"
        validate="Green, amber, and red lines should match parent appetite and local contract clocks."
      >
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>KRI</th>
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
      </Section>
    </article>
  );
}
