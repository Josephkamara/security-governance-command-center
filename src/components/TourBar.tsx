import { Link, useSearchParams } from 'react-router-dom';
import { tourSteps } from '../data/tour';

export default function TourBar() {
  const [params] = useSearchParams();
  const raw = Number(params.get('tour'));
  const step = tourSteps.find((item) => item.id === raw);
  if (!step) return null;

  const index = tourSteps.findIndex((item) => item.id === step.id);
  const previous = tourSteps[index - 1];
  const next = tourSteps[index + 1];

  return (
    <aside className="tour-bar no-print" aria-label="3-minute tour">
      <p className="tour-bar-kicker">
        3-minute tour · Step {step.id} of {tourSteps.length}
      </p>
      <ol className="tour-steps">
        {tourSteps.map((item, itemIndex) => (
          <li key={item.id} className={itemIndex === index ? 'is-current' : itemIndex < index ? 'is-done' : ''}>
            <Link to={`${item.path}?tour=${item.id}`}>{item.label}</Link>
          </li>
        ))}
      </ol>
      <p className="tour-bar-prompt">{step.prompt}</p>
      <div className="tour-bar-actions">
        {previous ? (
          <Link className="btn btn-secondary" to={`${previous.path}?tour=${previous.id}`}>
            Back
          </Link>
        ) : (
          <span className="btn btn-secondary is-disabled" aria-disabled="true">
            Back
          </span>
        )}
        {next ? (
          <Link className="btn btn-primary" to={`${next.path}?tour=${next.id}`}>
            Next
          </Link>
        ) : (
          <Link className="btn btn-primary" to="/">
            Finish
          </Link>
        )}
        <Link className="tour-exit" to={step.path}>
          Exit tour
        </Link>
      </div>
    </aside>
  );
}
