import { useSearchParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import SampleBanner from '../components/SampleBanner';
import { controls } from '../data/controls';
import { TOUR_CONTROL_ID } from '../data/tour';
import SOXITGCTracker from './SOXITGCTracker';
import UnifiedControlFramework from './UnifiedControlFramework';

type ControlsTab = 'matrix' | 'testing';

export default function ControlsAndTesting() {
  const [params, setParams] = useSearchParams();
  const tourStep = params.get('tour');
  const requested = params.get('tab') === 'testing' ? 'testing' : 'matrix';
  const tab: ControlsTab = requested;
  const featured = controls.find((control) => control.id === TOUR_CONTROL_ID);
  const showTrace = tourStep === '2' && featured;

  return (
    <article>
      <PageHeader
        title="Controls & testing"
        lede="One control, one owner, one evidence set. Test once and map the same proof across SOX ITGC, SOC 2, the HIPAA Security Rule, NIST CSF 2.0, ISO 27001:2022, and HITRUST."
      />
      <SampleBanner />

      {showTrace ? (
        <section className="card tour-trace">
          <div className="card-header">
            <h2>One control, traced</h2>
            <p className="pill">{featured.id}</p>
          </div>
          <h3>{featured.title}</h3>
          <p>
            Owner {featured.owner}. Evidence: {featured.evidence}. Last tested {featured.lastTested}. Status:{' '}
            {featured.status}.
          </p>
          <dl className="trace-map">
            <div>
              <dt>SOX ITGC</dt>
              <dd>{featured.sox}</dd>
            </div>
            <div>
              <dt>SOC 2</dt>
              <dd>{featured.soc2}</dd>
            </div>
            <div>
              <dt>HIPAA</dt>
              <dd>{featured.hipaa}</dd>
            </div>
            <div>
              <dt>NIST CSF 2.0</dt>
              <dd>{featured.nist}</dd>
            </div>
            <div>
              <dt>ISO 27001:2022</dt>
              <dd>{featured.iso}</dd>
            </div>
            <div>
              <dt>HITRUST</dt>
              <dd>{featured.hitrust}</dd>
            </div>
          </dl>
          <p>
            This control feeds the MFA coverage indicator on the dashboard. Exception EX-04 follows it through
            Scope, Impact, Evidence, Communicate, Close on the SOX testing tab.
          </p>
        </section>
      ) : null}

      <div className="tabs" role="tablist" aria-label="Controls and testing views">
        <button
          type="button"
          className={tab === 'matrix' ? 'tab is-active' : 'tab'}
          onClick={() => {
            const next = new URLSearchParams(params);
            next.delete('tab');
            setParams(next, { replace: true });
          }}
        >
          One control, many frameworks
        </button>
        <button
          type="button"
          className={tab === 'testing' ? 'tab is-active' : 'tab'}
          onClick={() => {
            const next = new URLSearchParams(params);
            next.set('tab', 'testing');
            setParams(next, { replace: true });
          }}
        >
          SOX testing
        </button>
      </div>

      {tab === 'matrix' ? <UnifiedControlFramework embedded /> : <SOXITGCTracker embedded />}
    </article>
  );
}
