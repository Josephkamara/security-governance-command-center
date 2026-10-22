import type { StatusTone } from '../types';

interface StatusBadgeProps {
  label: string;
  tone?: StatusTone;
}

function toneFromLabel(label: string): StatusTone {
  const value = label.toLowerCase();
  if (
    value.includes('effective') ||
    value.includes('current') ||
    value.includes('closed') ||
    value.includes('delivered') ||
    value.includes('green') ||
    value.includes('received')
  ) {
    return 'green';
  }
  if (
    value.includes('overdue') ||
    value.includes('exception') ||
    value.includes('critical') ||
    value.includes('significant') ||
    value.includes('red')
  ) {
    return 'red';
  }
  if (
    value.includes('review') ||
    value.includes('progress') ||
    value.includes('partial') ||
    value.includes('conditional') ||
    value.includes('amber') ||
    value.includes('high') ||
    value.includes('moderate') ||
    value.includes('legal')
  ) {
    return 'amber';
  }
  if (value.includes('planned') || value.includes('new') || value.includes('intake')) {
    return 'blue';
  }
  return 'gray';
}

export default function StatusBadge({ label, tone }: StatusBadgeProps) {
  const resolved = tone ?? toneFromLabel(label);
  return <span className={`badge badge-${resolved}`}>{label}</span>;
}
