import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import SampleBanner from '../components/SampleBanner';
import Section from '../components/Section';
import StatusBadge from '../components/StatusBadge';
import {
  intakeSteps,
  riskQuestions,
  socChecklist,
  tierFromScore,
  vendorFindings,
  vendorTiers,
  vendors,
} from '../data/vendors';

export default function VendorRisk() {
  const [scores, setScores] = useState<Record<string, number>>({
    q1: 0,
    q2: 0,
    q3: 0,
    q4: 0,
    q5: 0,
    q6: 0,
  });

  const total = Object.values(scores).reduce((sum, value) => sum + value, 0);
  const tier = tierFromScore(total);
  const tierMeta = vendorTiers.find((item) => item.tier === tier);

  return (
    <article>
      <PageHeader
        title="Vendor risk"
        lede="A four-tier model, a ten-minute inherent risk score, a seven-step intake, a SOC report checklist that includes bridge letters and CUECs, and a remediation tracker. The tier, not the brand name, sets the work."
      />
      <SampleBanner />

      <Section
        title="Four-tier model"
        validate="Typical healthcare examples and diligence packages should be confirmed against the parent TPRM standard."
      >
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Tier</th>
                <th>Typical healthcare examples</th>
                <th>Due diligence</th>
                <th>Reassess</th>
                <th>Contract terms</th>
              </tr>
            </thead>
            <tbody>
              {vendorTiers.map((item) => (
                <tr key={item.tier}>
                  <td>
                    <strong>
                      {item.tier} {item.name}
                    </strong>
                  </td>
                  <td>{item.examples}</td>
                  <td>{item.diligence}</td>
                  <td>{item.reassess}</td>
                  <td>{item.contract}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section
        title="Inherent risk scoring calculator"
        validate="Question weights and cut scores should match parent scoring if a TPRM tool already exists. Do not stand up a second system."
      >
        <div className="split">
          <form className="score-form" onSubmit={(event) => event.preventDefault()}>
            {riskQuestions.map((question) => (
              <fieldset key={question.id}>
                <legend>{question.label}</legend>
                {question.options.map((option) => (
                  <label key={option.label} className="radio">
                    <input
                      type="radio"
                      name={question.id}
                      value={option.score}
                      checked={scores[question.id] === option.score}
                      onChange={() => setScores((current) => ({ ...current, [question.id]: option.score }))}
                    />
                    {option.label} <span className="muted">({option.score})</span>
                  </label>
                ))}
              </fieldset>
            ))}
          </form>
          <aside className="score-result">
            <p className="muted">Illustrative sample score</p>
            <p className="kri-value">{total}</p>
            <p>
              Proposed tier: <strong>Tier {tier} {tierMeta?.name}</strong>
            </p>
            <p>{tierMeta?.diligence}</p>
          </aside>
        </div>
      </Section>

      <Section
        title="Seven-step intake"
        validate="Business owners, Legal, and Procurement need to confirm who moves a vendor from request to go-live."
      >
        <ol className="playbook">
          {intakeSteps.map((step) => (
            <li key={step.step}>
              <strong>
                {step.step}. {step.title}
              </strong>
              <p>{step.detail}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section
        title="SOC report review checklist"
        validate="Bridge-letter timing and CUEC mapping should follow the parent SOX playbook."
      >
        <ol className="plain-list">
          {socChecklist.map((item) => (
            <li key={item.id}>
              <strong>{item.item}.</strong> {item.detail}
            </li>
          ))}
        </ol>
        <div className="table-wrap">
          <table>
            <caption>Sample vendor register</caption>
            <thead>
              <tr>
                <th>Vendor</th>
                <th>Service</th>
                <th>Tier</th>
                <th>Score</th>
                <th>BAA</th>
                <th>Rating</th>
                <th>Last / next review</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {vendors.map((vendor) => (
                <tr key={vendor.id}>
                  <td>{vendor.name}</td>
                  <td>{vendor.service}</td>
                  <td>{vendor.tier}</td>
                  <td>{vendor.inherentScore}</td>
                  <td>{vendor.baa ? 'Yes' : 'No'}</td>
                  <td>{vendor.rating}</td>
                  <td>
                    {vendor.lastReview} / {vendor.nextReview}
                  </td>
                  <td>
                    <StatusBadge label={vendor.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section
        title="Remediation tracker"
        validate="Aging and severity should roll into the single risk register, not live only in a vendor spreadsheet."
      >
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Vendor</th>
                <th>Finding</th>
                <th>Severity</th>
                <th>Opened</th>
                <th>Due</th>
                <th>Owner</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {vendorFindings.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.vendor}</td>
                  <td>{item.finding}</td>
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
    </article>
  );
}
