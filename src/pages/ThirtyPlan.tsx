import { phases, principles, weekOneQuestions } from '../data/plan';
import PageHeader from '../components/PageHeader';
import SampleBanner from '../components/SampleBanner';
import Section from '../components/Section';

export default function ThirtyPlan() {
  return (
    <article>
      <PageHeader
        title="First-90-days roadmap"
        lede="The first phase maps tools, ownership, backlog, and the next two quarters of audits. Later phases stand up one intake path, one control set, one risk register, and one page for leadership."
      />
      <SampleBanner />

      <Section
        title="The approach in one line"
        validate="These four principles only work if they fit the tools and standards enterprise security already has."
      >
        <div className="principle-grid">
          {principles.map((item) => (
            <article key={item.name} className="principle">
              <h3>{item.name}</h3>
              <p>{item.meaning}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        title="Discovery questions"
        validate="Answers to these six questions set the sample 90-day priorities."
      >
        <ol className="plain-list">
          {weekOneQuestions.map((question) => (
            <li key={question}>{question}</li>
          ))}
        </ol>
      </Section>

      <Section
        title="Three phases"
        validate="Dates and deliverables in this sample should be rewritten against a live inventory."
      >
        <div className="phase-grid">
          {phases.map((phase) => (
            <article key={phase.id} className="phase-card">
              <p className="muted">{phase.days}</p>
              <h3>{phase.focus}</h3>
              <ul>
                {phase.actions.map((action) => (
                  <li key={action}>{action}</li>
                ))}
              </ul>
              <p>
                <strong>What you get:</strong> {phase.outcome}
              </p>
            </article>
          ))}
        </div>
      </Section>
    </article>
  );
}
