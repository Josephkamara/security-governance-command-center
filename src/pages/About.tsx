import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import SampleBanner from '../components/SampleBanner';
import Section from '../components/Section';

const links = [
  { to: '/controls', label: 'Unified control framework', hook: 'One test mapped across several public frameworks, with a single owner and evidence set.' },
  { to: '/sox', label: 'SOX ITGC tracker', hook: 'A test cycle and a five-step exception path between IT, control owners, and the external auditor.' },
  { to: '/client-trust', label: 'Client trust center', hook: 'A reusable answer library and SLA view drawn from SOC 1, SOC 2, and HITRUST review work.' },
  { to: '/vendor-risk', label: 'Vendor risk', hook: 'A four-tier model and inherent-risk score, including fieldwork supported by security ratings such as BitSight.' },
  { to: '/risk-register', label: 'Risk register', hook: 'Findings stay visible when they have an owner, a score, and a close date.' },
  { to: '/parent-alignment', label: 'Parent alignment', hook: 'A RACI that separates who owns the standard from who operates it.' },
  { to: '/dashboard', label: 'Executive dashboard', hook: 'Eight KRIs with targets and trends on one printable page.' },
  { to: '/30-60-90', label: '30-60-90 plan', hook: 'Map the current state, stand up the basics, then report.' },
];

export default function About() {
  return (
    <article>
      <PageHeader
        kicker="About the author"
        title="Joseph Kamara, CPA, CISA, CISSP"
        lede="Fifteen-plus years in IT audit, SOX ITGC, vendor risk, and security governance across healthcare and medtech. This site is a sample operating model for a healthcare services organization and its parent enterprise, not a description of a live program."
      />
      <SampleBanner />

      <Section
        title="What this project is"
        validate="Titles, team size, and tool names in the sample data are fictional."
      >
        <p>
          The command center is a static model for intake, single-pass control testing, a client
          answer library, vendor tiering, and a one-page leadership view. Parent Enterprise Security
          standards come first. Local extras exist only where a healthcare services organization
          has a contract that requires more.
        </p>
      </Section>

      <Section
        title="Experience that maps to the work"
        validate="This page stays general so it can sit on a public site."
      >
        <ul className="experience-list">
          <li>
            <strong>Big Four and national-firm IT audit.</strong> Planned and led more than thirty SOC 1,
            SOC 2, and HITRUST engagements for healthcare and technology clients. That is the origin of
            the answer library and the SOC review checklist, including bridge letters and CUECs.
          </li>
          <li>
            <strong>SOX ITGC program leadership at a global medtech company.</strong> Owned the US ITGC
            program and served as the single point of contact for the external auditor. That is the origin
            of the test cycle, the evidence tracker, and the Scope-Impact-Evidence-Communicate-Close path.
          </li>
          <li>
            <strong>Hospital-system IT audit.</strong> Worked inside a large provider environment where
            enterprise standards, local operations, and audit all had to stay aligned. That is the origin
            of the parent-alignment RACI and the discovery questions on the 30-60-90 page.
          </li>
          <li>
            <strong>Vendor-risk audits using BitSight.</strong> Used security ratings to aim fieldwork,
            then tested the controls that ratings cannot see: BAAs, SOC scope, subprocessors, and
            offboarding. That is the origin of the four-tier model and the inherent-risk calculator.
          </li>
        </ul>
      </Section>

      <Section
        title="Where each module comes from"
        validate="The modules are a sample layout, not a required template."
      >
        <ul className="plain-list">
          {links.map((item) => (
            <li key={item.to}>
              <Link to={item.to}>{item.label}</Link>
              {': '}
              {item.hook}
            </li>
          ))}
        </ul>
      </Section>

      <Section
        title="Contact"
        validate="Public contact details for the author of this portfolio project."
      >
        <p>
          Joseph Kamara · CPA, CISA, CISSP
          <br />
          <a href="https://www.linkedin.com/in/joseph-kamara">linkedin.com/in/joseph-kamara</a>
        </p>
      </Section>
    </article>
  );
}
