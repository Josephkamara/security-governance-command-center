import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import SampleBanner from '../components/SampleBanner';
import Section from '../components/Section';
import StatusBadge from '../components/StatusBadge';
import Term from '../components/Term';
import {
  intakeSteps,
  recommendVendor,
  riskQuestions,
  socChecklist,
  vendorFindings,
  vendorTiers,
  vendors,
} from '../data/vendors';

const emptyScores: Record<string, number> = {
  q1: 0,
  q2: 0,
  q3: 0,
  q4: 0,
  q5: 0,
  q6: 0,
};

export default function VendorRisk() {
  const [scores, setScores] = useState<Record<string, number>>(emptyScores);
  const recommendation = recommendVendor(scores);

  return (
    <article>
      <PageHeader
        title="Vendors"
        lede={
          <>
            A four-tier model, a ten-minute inherent risk score, a seven-step intake, a SOC report checklist
            that includes bridge letters and{' '}
            <Term
              term="CUECs"
              definition="Complementary user entity controls: the buyer’s own controls that a vendor SOC report relies on."
            />{' '}
            (complementary user entity controls), and a remediation tracker. The tier, not the brand name, sets
            the work.
          </>
        }
      />
      <SampleBanner />

      <Section
        title="Four-tier model"
        validate="Typical healthcare examples and diligence packages should be confirmed against the enterprise TPRM standard."
      >
        <div className="table-wrap">
          <table className="tier-table">
            <colgroup>
              <col className="col-tier" />
              <col className="col-examples" />
              <col className="col-diligence" />
              <col className="col-reassess" />
              <col className="col-contract" />
            </colgroup>
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
                    <strong className="control-id">
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
        validate="Question weights and cut scores should match enterprise scoring if a TPRM tool already exists. Do not stand up a second system."
      >
        <div className="split vendor-score-split">
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
          <aside className="score-result" aria-live="polite">
            <p className="muted">Illustrative sample recommendation</p>
            <p className="kri-value">{recommendation.score}</p>
            <p className="score-tier">
              Tier {recommendation.tier} {recommendation.name}
            </p>
            {recommendation.floors.length ? (
              <p className="floor-note">{recommendation.floors.join('. ')}.</p>
            ) : (
              <p className="muted">Raw score {recommendation.score} maps directly to this tier.</p>
            )}
            <dl className="recommend-list">
              <div>
                <dt>Required review depth</dt>
                <dd>{recommendation.reviewDepth}</dd>
              </div>
              <div>
                <dt>Reassessment</dt>
                <dd>{recommendation.frequency}</dd>
              </div>
              <div>
                <dt>Next step</dt>
                <dd>{recommendation.nextStep}</dd>
              </div>
            </dl>
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
        validate="Bridge-letter timing and CUEC mapping should follow the enterprise SOX playbook."
      >
        <ol className="plain-list">
          {socChecklist.map((item) => (
            <li key={item.id}>
              <strong>{item.item}.</strong> {item.detail}
            </li>
          ))}
        </ol>
        <div className="table-wrap">
          <table className="vendor-register">
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
                  <td>
                    <strong className="control-id">{vendor.name}</strong>
                  </td>
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
          <table className="finding-table">
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
                  <td>
                    <strong className="control-id">{item.id}</strong>
                  </td>
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
