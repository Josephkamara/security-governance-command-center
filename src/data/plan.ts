export const weekOneQuestions = [
  'What tools hold risk, vendor, and client review records today?',
  'What SOC, HITRUST, or other reports exist, and what is their scope?',
  'Which controls does Parent Enterprise Security own, and which does the local organization own?',
  'How many client reviews come in a month, and who answers them?',
  'What audits and client commitments are due in the next two quarters?',
  'Which client contract terms go beyond parent standards?',
];

export const phases = [
  {
    id: '30',
    days: 'Days 1 to 30',
    focus: 'Listen and map',
    actions: [
      'Meet Parent Enterprise Security, Compliance, Legal, Sales, Client Services, and control owners.',
      'Read the last SOX ITGC and SOC results, open findings, vendor list, and client review backlog.',
      'Map controls to parent standards and the six frameworks in the unified control set.',
    ],
    outcome: 'One-page current state, top risks, and an agreed list of 90-day priorities',
  },
  {
    id: '60',
    days: 'Days 31 to 60',
    focus: 'Stand up the basics',
    actions: [
      'Open the single intake for client reviews and start the answer library.',
      'Tier the vendor list and schedule Tier 1 reviews.',
      'Agree the RACI and hold the first governance forum.',
      'Agree the eight KRIs and their targets.',
    ],
    outcome: 'One front door, a tiered vendor list, and the first forum minutes',
  },
  {
    id: '90',
    days: 'Days 61 to 90',
    focus: 'Report and get ahead',
    actions: [
      'Publish the first monthly one-page dashboard.',
      'Run a readiness walkthrough before the next SOX or SOC milestone so we find our own exceptions first.',
      'Pick one or two controls for automated evidence, such as access review or MFA coverage.',
      'Set the 12-month roadmap with security leadership.',
    ],
    outcome: 'Monthly risk view, audit readiness, and a 12-month roadmap',
  },
];

export const principles = [
  {
    name: 'One front door',
    meaning:
      'Every client questionnaire, client audit, vendor review, and auditor request comes in one way, with an owner and a date, tracked to closure.',
  },
  {
    name: 'One control set',
    meaning:
      'Each control is owned and tested once, and its evidence answers SOX, SOC, HIPAA, HITRUST, and clients. Parent standards come first.',
  },
  {
    name: 'One risk register',
    meaning:
      'Security, vendor, and client risks sit in one place with a score, an owner, a treatment decision, and a date.',
  },
  {
    name: 'One page for leadership',
    meaning:
      'Each month, eight numbers with targets and trends, the top risks, and the decisions needed. No surprises.',
  },
];
