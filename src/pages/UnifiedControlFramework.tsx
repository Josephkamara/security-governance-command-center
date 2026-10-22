import { useMemo, useState } from 'react';
import PageHeader from '../components/PageHeader';
import SampleBanner from '../components/SampleBanner';
import Section from '../components/Section';
import StatusBadge from '../components/StatusBadge';
import { controls, frameworkNotes } from '../data/controls';
import type { ControlStatus } from '../types';

const frameworks = ['All', 'SOX', 'SOC 2', 'HIPAA', 'NIST CSF 2.0', 'ISO 27001', 'HITRUST'] as const;

export default function UnifiedControlFramework({ embedded = false }: { embedded?: boolean }) {
  const [query, setQuery] = useState('');
  const [framework, setFramework] = useState<(typeof frameworks)[number]>('All');
  const [status, setStatus] = useState<'All' | ControlStatus>('All');

  const rows = useMemo(() => {
    return controls.filter((control) => {
      const haystack = [
        control.id,
        control.title,
        control.owner,
        control.sox,
        control.soc2,
        control.hipaa,
        control.nist,
        control.iso,
        control.hitrust,
        control.evidence,
      ]
        .join(' ')
        .toLowerCase();
      const matchesQuery = haystack.includes(query.toLowerCase());
      const matchesStatus = status === 'All' || control.status === status;
      const matchesFramework =
        framework === 'All' ||
        (framework === 'SOX' && control.sox !== 'n/a') ||
        (framework === 'SOC 2' && Boolean(control.soc2)) ||
        (framework === 'HIPAA' && Boolean(control.hipaa)) ||
        (framework === 'NIST CSF 2.0' && Boolean(control.nist)) ||
        (framework === 'ISO 27001' && Boolean(control.iso)) ||
        (framework === 'HITRUST' && Boolean(control.hitrust));
      return matchesQuery && matchesStatus && matchesFramework;
    });
  }, [framework, query, status]);

  const body = (
    <>
      <Section
        title="How the matrix works"
        validate="Enterprise standards come first. Local extras exist only where a client contract requires more."
      >
        <div className="stat-row">
          <div className="stat">
            <span className="stat-value">{controls.length}</span>
            <span className="stat-label">Sample controls</span>
          </div>
          <div className="stat">
            <span className="stat-value">6</span>
            <span className="stat-label">Frameworks on one row</span>
          </div>
          <div className="stat">
            <span className="stat-value">1</span>
            <span className="stat-label">Owner and evidence set</span>
          </div>
        </div>
        <p>
          This is a starting map for a healthcare services organization, not a compliance opinion.
          HITRUST IDs follow public CSF numbering and should be checked against the licensed version
          before anyone treats them as an official crosswalk.
        </p>
      </Section>

      <Section
        title="Searchable control matrix"
        validate="Owners, frequencies, and status flags should be replaced with the live RACI and test calendar."
      >
        <div className="filters">
          <label>
            Search
            <input
              className="search-box"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Control, owner, evidence, or citation"
            />
          </label>
          <label>
            Framework
            <select value={framework} onChange={(event) => setFramework(event.target.value as typeof framework)}>
              {frameworks.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>
          <label>
            Status
            <select value={status} onChange={(event) => setStatus(event.target.value as typeof status)}>
              <option>All</option>
              <option>Effective</option>
              <option>Needs review</option>
              <option>Exception open</option>
              <option>Not in scope</option>
            </select>
          </label>
        </div>
        <p className="muted">
          Showing {rows.length} of {controls.length} controls.
        </p>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Control</th>
                <th>SOX ITGC</th>
                <th>SOC 2</th>
                <th>HIPAA</th>
                <th>NIST CSF 2.0</th>
                <th>ISO 27001:2022</th>
                <th>HITRUST</th>
                <th>Owner</th>
                <th>Evidence</th>
                <th>Frequency</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((control) => (
                <tr key={control.id}>
                  <td>
                    <strong>{control.id}</strong>
                    <div>{control.title}</div>
                  </td>
                  <td>{control.sox}</td>
                  <td>{control.soc2}</td>
                  <td>{control.hipaa}</td>
                  <td>{control.nist}</td>
                  <td>{control.iso}</td>
                  <td>{control.hitrust}</td>
                  <td>{control.owner}</td>
                  <td>{control.evidence}</td>
                  <td>{control.testFrequency}</td>
                  <td>
                    <StatusBadge label={control.status} />
                    <div className="muted">Last tested {control.lastTested}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section
        title="Citation notes"
        validate="Counsel and enterprise security should confirm which citations are in force for this organization."
      >
        <ul className="plain-list">
          {frameworkNotes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </Section>
    </>
  );

  if (embedded) return body;

  return (
    <article>
      <PageHeader
        title="One control, many frameworks"
        lede="One control set. Each row has one owner and one evidence set that answers SOX ITGC, SOC 2, the HIPAA Security Rule, NIST CSF 2.0, ISO 27001:2022, and HITRUST. Test once. Map many times."
      />
      <SampleBanner />
      {body}
    </article>
  );
}
