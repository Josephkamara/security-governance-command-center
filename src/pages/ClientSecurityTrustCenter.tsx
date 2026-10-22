import { useMemo, useState } from 'react';
import PageHeader from '../components/PageHeader';
import SampleBanner from '../components/SampleBanner';
import Section from '../components/Section';
import StatusBadge from '../components/StatusBadge';
import Term from '../components/Term';
import {
  clientRequests,
  diligenceIntakes,
  libraryAnswers,
  playbookSteps,
  slaTargets,
} from '../data/trust';

type TrustTab = 'library' | 'sla' | 'intake';

export default function ClientSecurityTrustCenter() {
  const [tab, setTab] = useState<TrustTab>('library');
  const [query, setQuery] = useState('');

  const answers = useMemo(() => {
    const needle = query.toLowerCase();
    return libraryAnswers.filter((item) =>
      [item.id, item.question, item.answer, item.controlId, item.source].join(' ').toLowerCase().includes(needle),
    );
  }, [query]);

  const delivered = clientRequests.filter((item) => item.status === 'Delivered');
  const onTime = delivered.filter((item) => item.cycleDays !== null && item.cycleDays <= item.slaDays).length;

  return (
    <article>
      <PageHeader
        title="Client security questionnaires"
        lede={
          <>
            Clients and prospects get fast, accurate, consistent security answers. The library is built for{' '}
            <Term
              term="SIG"
              definition="Standard Information Gathering: a shared vendor-security questionnaire used by many buyers."
            />{' '}
            (Standard Information Gathering) and{' '}
            <Term
              term="HECVAT"
              definition="Higher Education Community Vendor Assessment Toolkit: a questionnaire used by colleges and health systems."
            />{' '}
            (Higher Education Community Vendor Assessment Toolkit). One mailbox, a reviewed library, and a
            visible SLA.
          </>
        }
      />
      <SampleBanner />

      <Section
        title="Intake playbook"
        validate="Mailbox, tracker, and Legal review rules need to match how Sales and Client Services already work."
      >
        <ol className="playbook">
          {playbookSteps.map((step) => (
            <li key={step.step}>
              <strong>
                {step.step}. {step.title}
              </strong>
              <p>{step.what}</p>
              <p className="muted">Owner: {step.who}</p>
            </li>
          ))}
        </ol>
      </Section>

      <div className="tabs" role="tablist" aria-label="Trust Center views">
        <button type="button" className={tab === 'library' ? 'tab is-active' : 'tab'} onClick={() => setTab('library')}>
          Answer library
        </button>
        <button type="button" className={tab === 'sla' ? 'tab is-active' : 'tab'} onClick={() => setTab('sla')}>
          SLA tracker
        </button>
        <button type="button" className={tab === 'intake' ? 'tab is-active' : 'tab'} onClick={() => setTab('intake')}>
          Due-diligence intake
        </button>
      </div>

      {tab === 'library' ? (
        <Section
          title="Standard questionnaire answer library"
          validate="Every live answer must be tied to a control, an owner, an NDA flag, and a review date. We never overstate a control."
        >
          <label>
            Search the library
            <input
              className="search-box"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="MFA, BAA, incident, encryption"
            />
          </label>
          <div className="card-stack">
            {answers.map((item) => (
              <article key={item.id} className="library-card">
                <header>
                  <span className="muted">
                    {item.id} · {item.source}
                  </span>
                  <StatusBadge label={item.ndaRequired ? 'NDA required' : 'Shareable'} tone={item.ndaRequired ? 'amber' : 'green'} />
                </header>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
                <p className="muted">
                  Control {item.controlId} · Evidence: {item.evidence} · Review {item.reviewCadence} · Last reviewed{' '}
                  {item.lastReviewed}
                </p>
              </article>
            ))}
          </div>
        </Section>
      ) : null}

      {tab === 'sla' ? (
        <Section
          title="Turnaround SLA tracker"
          validate="Targets should be set with Sales, then measured as on-time rate, cycle time, library share, and deals waiting on security."
        >
          <div className="stat-row">
            <div className="stat">
              <span className="stat-value">{clientRequests.length}</span>
              <span className="stat-label">Open plus recent requests</span>
            </div>
            <div className="stat">
              <span className="stat-value">
                {delivered.length ? Math.round((onTime / delivered.length) * 100) : 0}%
              </span>
              <span className="stat-label">Recent deliveries on time</span>
            </div>
            <div className="stat">
              <span className="stat-value">1</span>
              <span className="stat-label">Past SLA (illustrative)</span>
            </div>
          </div>
          <h3>Proposed targets</h3>
          <ul className="plain-list">
            {slaTargets.map((item) => (
              <li key={item.type}>
                <strong>{item.type}:</strong> {item.target}
              </li>
            ))}
          </ul>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Client</th>
                  <th>Type</th>
                  <th>Received</th>
                  <th>Due</th>
                  <th>Cycle</th>
                  <th>Library</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {clientRequests.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.client}</td>
                    <td>{item.type}</td>
                    <td>{item.received}</td>
                    <td>{item.due}</td>
                    <td>{item.cycleDays === null ? 'In flight' : `${item.cycleDays}d / ${item.slaDays}d`}</td>
                    <td>{item.libraryShare}</td>
                    <td>
                      <StatusBadge label={item.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>
      ) : null}

      {tab === 'intake' ? (
        <Section
          title="Due-diligence intake"
          validate="Confirm who logs the request today and whether Legal already has a contract-security queue."
        >
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Intake</th>
                  <th>Client</th>
                  <th>Requestor</th>
                  <th>Deal stage</th>
                  <th>Documents</th>
                  <th>Deadline</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {diligenceIntakes.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.client}</td>
                    <td>{item.requestor}</td>
                    <td>{item.dealStage}</td>
                    <td>{item.documents}</td>
                    <td>{item.deadline}</td>
                    <td>
                      <StatusBadge label={item.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>
      ) : null}
    </article>
  );
}
