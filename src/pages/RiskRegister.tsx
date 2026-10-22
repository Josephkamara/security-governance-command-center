import { dashboardKris, findings, risks } from '../data/risks';
import PageHeader from '../components/PageHeader';
import SampleBanner from '../components/SampleBanner';
import Section from '../components/Section';
import StatusBadge from '../components/StatusBadge';

const levels = [5, 4, 3, 2, 1] as const;
const impacts = [1, 2, 3, 4, 5] as const;

function cellTone(likelihood: number, impact: number): 'green' | 'amber' | 'red' {
  const score = likelihood * impact;
  if (score >= 15) return 'red';
  if (score >= 8) return 'amber';
  return 'green';
}

export default function RiskRegister({ embedded = false }: { embedded?: boolean }) {
  const body = (
    <>
      <Section
        title="Likelihood times impact heatmap"
        validate="Scoring scales should match the enterprise risk methodology so a 12 here means the same thing in the shared register."
      >
        <div className="heatmap-wrap">
          <table className="heatmap" aria-label="Risk heatmap">
            <thead>
              <tr>
                <th>L \ I</th>
                {impacts.map((impact) => (
                  <th key={impact}>I{impact}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {levels.map((likelihood) => (
                <tr key={likelihood}>
                  <th>L{likelihood}</th>
                  {impacts.map((impact) => {
                    const cellRisks = risks.filter(
                      (risk) => risk.likelihood === likelihood && risk.impact === impact && risk.status !== 'Closed',
                    );
                    return (
                      <td key={impact} className={`heat-${cellTone(likelihood, impact)}`}>
                        <span className="heat-score">{likelihood * impact}</span>
                        {cellRisks.map((risk) => (
                          <span key={risk.id} className="heat-chip">
                            {risk.id}
                          </span>
                        ))}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
          <p className="muted">Open and treating risks only. Closed items drop off the heat map and stay in the table below.</p>
        </div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Risk</th>
                <th>Category</th>
                <th>L</th>
                <th>I</th>
                <th>Score</th>
                <th>Treatment</th>
                <th>Owner</th>
                <th>Due</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {risks.map((risk) => (
                <tr key={risk.id}>
                  <td>{risk.id}</td>
                  <td>
                    {risk.title}
                    <div className="muted">{risk.source}</div>
                  </td>
                  <td>{risk.category}</td>
                  <td>{risk.likelihood}</td>
                  <td>{risk.impact}</td>
                  <td>
                    <StatusBadge
                      label={String(risk.likelihood * risk.impact)}
                      tone={cellTone(risk.likelihood, risk.impact)}
                    />
                  </td>
                  <td>{risk.treatment}</td>
                  <td>{risk.owner}</td>
                  <td>{risk.due}</td>
                  <td>
                    <StatusBadge label={risk.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section
        title="Key risk indicators"
        validate="These eight numbers are the same set on the executive dashboard. Confirm owners and data sources before the first forum."
      >
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>KRI</th>
                <th>Definition</th>
                <th>Current</th>
                <th>Target</th>
                <th>Trend</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {dashboardKris.map((kri) => (
                <tr key={kri.id}>
                  <td>{kri.name}</td>
                  <td>{kri.definition}</td>
                  <td>{kri.value}</td>
                  <td>{kri.target}</td>
                  <td>{kri.trendLabel}</td>
                  <td>
                    <StatusBadge label={kri.status} tone={kri.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section
        title="Findings to closure"
        validate="Aging rules and who can accept residual risk should be written down before the first month-end."
      >
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Finding</th>
                <th>Source</th>
                <th>Severity</th>
                <th>Opened</th>
                <th>Due</th>
                <th>Owner</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {findings.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.source}</td>
                  <td>
                    <StatusBadge label={item.severity} />
                  </td>
                  <td>{item.opened}</td>
                  <td>{item.due}</td>
                  <td>{item.owner}</td>
                  <td>
                    <StatusBadge label={item.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
    </>
  );

  if (embedded) return body;

  return (
    <article>
      <PageHeader
        title="Risk register"
        lede="Security, vendor, and client risks in one place. Each item has a likelihood times impact score, an owner, a treatment decision, and a date. Findings stay visible until they close."
      />
      <SampleBanner />
      {body}
    </article>
  );
}
