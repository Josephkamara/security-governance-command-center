import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import SampleBanner from '../components/SampleBanner';
import Section from '../components/Section';
import StatusBadge from '../components/StatusBadge';
import { exceptionStages, soxCycles, soxExceptions, soxTests } from '../data/sox';
import type { SoxException } from '../types';

export default function SOXITGCTracker() {
  const [selectedId, setSelectedId] = useState(soxExceptions[0]?.id ?? '');
  const selected = soxExceptions.find((item) => item.id === selectedId) ?? soxExceptions[0];

  return (
    <article>
      <PageHeader
        title="SOX ITGC tracker"
        lede="A test cycle with evidence requests, exceptions, and remediation through closure. Find our own issues before the external auditor does. Then walk each exception through Scope, Impact, Evidence, Communicate, Close."
      />
      <SampleBanner />

      <Section
        title="Test cycle"
        validate="The live calendar, populations, and tester names sit with Parent Enterprise Security and local application owners."
      >
        <div className="chip-row">
          {soxCycles.map((cycle) => (
            <div key={cycle.id} className="chip">
              <strong>{cycle.label}</strong>
              <span>{cycle.window}</span>
              <StatusBadge label={cycle.status} />
            </div>
          ))}
        </div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Test</th>
                <th>Control</th>
                <th>Tester</th>
                <th>Population</th>
                <th>Sample</th>
                <th>Evidence due</th>
                <th>Evidence</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              {soxTests.map((test) => (
                <tr key={test.id}>
                  <td>{test.id}</td>
                  <td>
                    {test.controlId}
                    <div className="muted">{test.controlName}</div>
                  </td>
                  <td>{test.tester}</td>
                  <td>{test.population}</td>
                  <td>{test.sampleSize || 'Full pop'}</td>
                  <td>{test.evidenceDue}</td>
                  <td>
                    <StatusBadge label={test.evidenceStatus} />
                  </td>
                  <td>
                    <StatusBadge label={test.result} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section
        title="Exception workflow"
        validate="Severity language should match the parent deficiency rating scale before any item is labeled significant."
      >
        <div className="split">
          <div>
            <p className="muted">Select an exception to see the five-step path to closure.</p>
            <ul className="select-list">
              {soxExceptions.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    className={item.id === selected.id ? 'is-selected' : ''}
                    onClick={() => setSelectedId(item.id)}
                  >
                    <span>
                      <strong>{item.id}</strong> {item.title}
                    </span>
                    <StatusBadge label={item.stage} tone="blue" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
          {selected ? <ExceptionDetail exception={selected} /> : null}
        </div>
      </Section>
    </article>
  );
}

function ExceptionDetail({ exception }: { exception: SoxException }) {
  const stageIndex = exceptionStages.indexOf(exception.stage);
  const copy: Record<(typeof exceptionStages)[number], string> = {
    Scope: exception.scope,
    Impact: exception.impact,
    Evidence: exception.evidence,
    Communicate: exception.communicate,
    Close: exception.close,
  };

  return (
    <div className="workflow">
      <p>
        <strong>{exception.id}</strong> · {exception.controlId} · Owner {exception.owner} · Due {exception.due}
      </p>
      <StatusBadge label={`${exception.severity} severity`} />
      <ol className="stepper" aria-label="Exception stages">
        {exceptionStages.map((stage, index) => (
          <li key={stage} className={index <= stageIndex ? 'is-done' : ''}>
            <span className="step-index">{index + 1}</span>
            <span>{stage}</span>
          </li>
        ))}
      </ol>
      <dl className="detail-list">
        {exceptionStages.map((stage) => (
          <div key={stage}>
            <dt>{stage}</dt>
            <dd>{copy[stage]}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
