import { charter, crosswalk, raci } from '../data/alignment';
import PageHeader from '../components/PageHeader';
import SampleBanner from '../components/SampleBanner';
import Section from '../components/Section';

export default function EnterpriseAlignment() {
  return (
    <article>
      <PageHeader
        title="Enterprise standards alignment"
        lede="The local organization does not run a second security program. It runs an operating layer that adopts enterprise standards, adds only what client contracts require, and makes risk decisions at the right level."
      />
      <SampleBanner />

      <Section
        title="Governance forum charter"
        validate="Chair, membership, and decision rights should be agreed with enterprise security and the executive sponsor before the first meeting is booked."
      >
        <dl className="detail-list">
          <div>
            <dt>Name</dt>
            <dd>{charter.name}</dd>
          </div>
          <div>
            <dt>Purpose</dt>
            <dd>{charter.purpose}</dd>
          </div>
          <div>
            <dt>Chair and sponsor</dt>
            <dd>
              Chair is the {charter.chair}. Sponsor is the {charter.sponsor}.
            </dd>
          </div>
          <div>
            <dt>Members</dt>
            <dd>{charter.members}</dd>
          </div>
          <div>
            <dt>Cadence</dt>
            <dd>{charter.cadence}</dd>
          </div>
          <div>
            <dt>Standing agenda</dt>
            <dd>{charter.agenda.join('. ')}.</dd>
          </div>
          <div>
            <dt>Decision rights</dt>
            <dd>{charter.decisionRights}</dd>
          </div>
        </dl>
      </Section>

      <Section
        title="RACI"
        validate="R is responsible. A is accountable (one per row). C is consulted. I is informed. Roles are illustrative."
      >
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Activity</th>
                <th>Local security lead</th>
                <th>Enterprise security</th>
                <th>Control owners</th>
                <th>Legal and Privacy</th>
                <th>Sales and Client Services</th>
                <th>Internal audit / SOX</th>
              </tr>
            </thead>
            <tbody>
              {raci.map((row) => (
                <tr key={row.activity}>
                  <td>{row.activity}</td>
                  <td>{row.cyberMgr}</td>
                  <td>{row.enterpriseSec}</td>
                  <td>{row.controlOwners}</td>
                  <td>{row.legalPrivacy}</td>
                  <td>{row.salesClient}</td>
                  <td>{row.iaSox}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section
        title="Standards crosswalk"
        validate="This is a sample gap list. The real crosswalk starts with the enterprise policy set and the contract addenda Legal already holds."
      >
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Topic</th>
                <th>Enterprise standard</th>
                <th>Local need</th>
                <th>Illustrative gap</th>
                <th>Proposed action</th>
              </tr>
            </thead>
            <tbody>
              {crosswalk.map((row) => (
                <tr key={row.topic}>
                  <td>
                    <strong>{row.topic}</strong>
                  </td>
                  <td>{row.enterpriseStandard}</td>
                  <td>{row.localNeed}</td>
                  <td>{row.gap}</td>
                  <td>{row.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
    </article>
  );
}
