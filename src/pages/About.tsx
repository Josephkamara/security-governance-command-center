import { Link, useSearchParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import SampleBanner from '../components/SampleBanner';
import Section from '../components/Section';
import Term from '../components/Term';

const links = [
  { to: '/dashboard', label: 'Leadership dashboard', hook: 'A one-line status, the decision, then eight indicators with targets and trends.' },
  { to: '/controls', label: 'Controls & testing', hook: 'One test mapped across several public frameworks, plus the SOX exception path.' },
  { to: '/vendor-risk', label: 'Vendors', hook: 'A four-tier model and inherent-risk score. The tier sets the work.' },
  { to: '/client-trust', label: 'Client security questionnaires', hook: 'A reusable answer library and SLA view for standard security reviews.' },
  { to: '/parent-alignment', label: 'Enterprise standards alignment', hook: 'A RACI that separates who owns the standard from who operates it.' },
  { to: '/30-60-90', label: 'First-90-days roadmap', hook: 'Map the current state, stand up the basics, then report.' },
];

export default function About() {
  const [params] = useSearchParams();
  const closing = params.get('tour') === '4';

  return (
    <article>
      <PageHeader
        kicker="About the author"
        title="Joseph Kamara, CPA, CISA, CISSP"
        lede="Fifteen-plus years in IT audit, SOX ITGC, vendor risk, and security governance across healthcare and medtech. This site is a sample operating model, not a description of a live program."
      />
      <SampleBanner />

      {closing ? (
        <section className="card tour-close">
          <h2>Close</h2>
          <p>
            Built to sit on your existing tools. What are you using today, and where does it fall short?
          </p>
          <p>
            The workspace is a way to see one control set, one risk register, and one page for leadership —
            without standing up a second GRC program.
          </p>
        </section>
      ) : null}

      <Section
        title="What this project is"
        validate="Titles, team size, and tool names in the sample data are fictional."
      >
        <p>
          The command center is a static model for intake, single-pass control testing, a client answer
          library, vendor tiering, and a one-page leadership view. Enterprise standards come first. Local
          extras exist only where a healthcare services organization has a contract that requires more. It
          is designed to sit on top of existing GRC and TPRM tools.
        </p>
        <p>
          Fifteen years in IT audit, SOX ITGC, vendor risk, and security governance across healthcare and
          medtech. Work includes public-accounting and national-firm attestation, SOX ITGC program
          leadership, hospital-system IT audit, and vendor-risk reviews that used security ratings such as
          BitSight.
        </p>
      </Section>

      <Section
        title="Experience that maps to the work"
        validate="This page stays general so it can sit on a public site."
      >
        <ul className="experience-list">
          <li>
            <strong>Public-accounting and national-firm IT audit.</strong> Planned and led more than thirty
            SOC 1, SOC 2, and HITRUST engagements for healthcare and technology clients. That is the origin
            of the answer library and the SOC review checklist, including bridge letters and{' '}
            <Term
              term="CUECs"
              definition="Complementary user entity controls: the buyer’s own controls that a vendor SOC report relies on."
            />
            .
          </li>
          <li>
            <strong>SOX ITGC program leadership at a global medtech company.</strong> Owned the US ITGC
            program and served as the single point of contact for the external auditor. That is the origin
            of the test cycle, the evidence tracker, and the Scope-Impact-Evidence-Communicate-Close path.
          </li>
          <li>
            <strong>Hospital-system IT audit.</strong> Worked inside a large provider environment where
            enterprise standards, local operations, and audit all had to stay aligned. That is the origin
            of the enterprise-standards RACI and the discovery questions on the first-90-days roadmap.
          </li>
          <li>
            <strong>Vendor-risk audits using BitSight.</strong> Used security ratings to aim fieldwork, then
            tested the controls that ratings cannot see: BAAs, SOC scope, subprocessors, and offboarding.
            That is the origin of the four-tier model and the inherent-risk calculator.
          </li>
        </ul>
      </Section>

      <Section
        title="Where to go next"
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
