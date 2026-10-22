import type { ReactNode } from 'react';
import ValidateNote from './ValidateNote';

interface SectionProps {
  id?: string;
  title: string;
  children: ReactNode;
  validate: string;
  actions?: ReactNode;
}

export default function Section({ id, title, children, validate, actions }: SectionProps) {
  return (
    <section id={id} className="card">
      <div className="card-header">
        <h2>{title}</h2>
        {actions}
      </div>
      {children}
      <ValidateNote text={validate} />
    </section>
  );
}
