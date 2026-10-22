export const tourSteps = [
  {
    id: 1,
    path: '/dashboard',
    label: 'Dashboard',
    title: 'Leadership dashboard',
    prompt: 'Read the one-line status, the decision, then two indicators.',
  },
  {
    id: 2,
    path: '/controls',
    label: 'Controls',
    title: 'One control, many frameworks',
    prompt: 'Follow A-05 (MFA). One test, six maps, and the SOX exception path.',
  },
  {
    id: 3,
    path: '/vendor-risk',
    label: 'Vendors',
    title: 'Vendor tiering',
    prompt: 'The tier, not the brand name, sets the work.',
  },
  {
    id: 4,
    path: '/about',
    label: 'Close',
    title: 'Close',
    prompt: 'Built to sit on existing tools. What are you using today, and where does it fall short?',
  },
] as const;

export const TOUR_CONTROL_ID = 'A-05';
