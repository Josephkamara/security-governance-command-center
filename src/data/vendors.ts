import type { Vendor, VendorFinding, VendorRecommendation, VendorTierId } from '../types';

export const vendorTiers = [
  {
    tier: 1,
    name: 'Critical',
    examples: 'Third-party processing, claims clearinghouse, statement print and mail, PHI hosting',
    diligence: 'SOC 2 Type II or HITRUST, full questionnaire, BAA, pen test summary, security rating monitoring, dated remediation',
    reassess: 'Yearly and on major change',
    contract: 'BAA, breach notice, right to audit, subcontractor flow-down, data return and destruction',
  },
  {
    tier: 2,
    name: 'High',
    examples: 'IT support, analytics, some SaaS with limited PHI or privileged access',
    diligence: 'SOC 2 or SIG Lite, BAA, rating monitoring',
    reassess: 'Every 2 years, light yearly check',
    contract: 'BAA and notice terms',
  },
  {
    tier: 3,
    name: 'Moderate',
    examples: 'Internal data, no PHI',
    diligence: 'Short questionnaire, rating check',
    reassess: 'Every 3 years',
    contract: 'Standard security terms',
  },
  {
    tier: 4,
    name: 'Low',
    examples: 'No data and no access',
    diligence: 'Intake attestation',
    reassess: 'At renewal',
    contract: 'Standard terms',
  },
];

export const intakeSteps = [
  { step: 1, title: 'Request', detail: 'Business owner requests the vendor and names a relationship owner.' },
  { step: 2, title: 'Score inherent risk', detail: 'Six questions, about ten minutes. PHI volume, payment data, network access, service criticality, offshore or subcontracted work, and AI on client data.' },
  { step: 3, title: 'Assign tier', detail: 'Score maps to one of four tiers. The tier, not the brand name, sets the work.' },
  { step: 4, title: 'Due diligence', detail: 'Collect the package required by tier. Use enterprise tools and standards where they exist.' },
  { step: 5, title: 'Decide', detail: 'Approve, approve with dated conditions, or decline. Risk acceptance is signed by a named owner.' },
  { step: 6, title: 'Contract', detail: 'Legal and Procurement set terms and the BAA before go-live.' },
  { step: 7, title: 'Monitor and offboard', detail: 'Reassess on the cadence, watch rating alerts, and at exit collect a data return or destruction certificate plus access removal.' },
];

export const vendors: Vendor[] = [
  {
    id: 'V-01',
    name: 'Harbor Coding Partners',
    service: 'Third-party processing',
    tier: 1,
    inherentScore: 22,
    phi: true,
    owner: 'Health information management',
    lastReview: '2025-09-18',
    nextReview: '2026-09-18',
    baa: true,
    rating: '740',
    status: 'Overdue',
  },
  {
    id: 'V-02',
    name: 'Northline Clearing',
    service: 'Claims clearinghouse',
    tier: 1,
    inherentScore: 20,
    phi: true,
    owner: 'Revenue operations',
    lastReview: '2026-03-02',
    nextReview: '2027-03-02',
    baa: true,
    rating: '810',
    status: 'Current',
  },
  {
    id: 'V-03',
    name: 'Meridian Statement Services',
    service: 'Print and mail',
    tier: 1,
    inherentScore: 18,
    phi: true,
    owner: 'Patient access',
    lastReview: '2026-06-11',
    nextReview: '2027-06-11',
    baa: true,
    rating: '790',
    status: 'In review',
  },
  {
    id: 'V-04',
    name: 'Atlas PHI Hosting',
    service: 'Application hosting',
    tier: 1,
    inherentScore: 21,
    phi: true,
    owner: 'Infrastructure',
    lastReview: '2026-01-20',
    nextReview: '2027-01-20',
    baa: true,
    rating: '830',
    status: 'Current',
  },
  {
    id: 'V-05',
    name: 'Keystone Analytics',
    service: 'Denial analytics SaaS',
    tier: 2,
    inherentScore: 13,
    phi: true,
    owner: 'Analytics',
    lastReview: '2025-11-04',
    nextReview: '2027-11-04',
    baa: true,
    rating: '760',
    status: 'Conditional',
  },
  {
    id: 'V-06',
    name: 'Pine Desk Support',
    service: 'After-hours IT support',
    tier: 2,
    inherentScore: 12,
    phi: false,
    owner: 'Infrastructure',
    lastReview: '2026-02-14',
    nextReview: '2028-02-14',
    baa: false,
    rating: '700',
    status: 'Current',
  },
  {
    id: 'V-07',
    name: 'Quill Survey Co.',
    service: 'Internal engagement surveys',
    tier: 3,
    inherentScore: 6,
    phi: false,
    owner: 'Human resources',
    lastReview: '2024-08-09',
    nextReview: '2027-08-09',
    baa: false,
    rating: '680',
    status: 'Current',
  },
  {
    id: 'V-08',
    name: 'Office Leaf Catering',
    service: 'Facilities catering',
    tier: 4,
    inherentScore: 2,
    phi: false,
    owner: 'Facilities',
    lastReview: '2026-01-05',
    nextReview: '2027-01-05',
    baa: false,
    rating: 'n/a',
    status: 'Current',
  },
];

export const vendorFindings: VendorFinding[] = [
  {
    id: 'VF-11',
    vendorId: 'V-01',
    vendor: 'Harbor Coding Partners',
    finding: 'SOC 2 review and bridge letter overdue',
    severity: 'High',
    opened: '2026-09-20',
    due: '2026-11-15',
    owner: 'Vendor risk lead',
    status: 'Remediating',
  },
  {
    id: 'VF-10',
    vendorId: 'V-03',
    vendor: 'Meridian Statement Services',
    finding: 'CUEC mapping incomplete for enterprise SOX',
    severity: 'Moderate',
    opened: '2026-08-19',
    due: '2026-10-31',
    owner: 'SOX liaison',
    status: 'Open',
  },
  {
    id: 'VF-09',
    vendorId: 'V-05',
    vendor: 'Keystone Analytics',
    finding: 'Subprocessor list missing two AI vendors',
    severity: 'Moderate',
    opened: '2026-07-11',
    due: '2026-10-30',
    owner: 'Vendor risk lead',
    status: 'Remediating',
  },
  {
    id: 'VF-08',
    vendorId: 'V-06',
    vendor: 'Pine Desk Support',
    finding: 'Privileged access recertification late',
    severity: 'Low',
    opened: '2026-06-02',
    due: '2026-08-01',
    owner: 'Infrastructure',
    status: 'Closed',
  },
  {
    id: 'VF-07',
    vendorId: 'V-02',
    vendor: 'Northline Clearing',
    finding: 'Penetration test summary accepted with one high finding dated',
    severity: 'High',
    opened: '2026-03-02',
    due: '2026-06-30',
    owner: 'Vendor risk lead',
    status: 'Accepted',
  },
];

export const socChecklist = [
  { id: 'S1', item: 'Report type and period cover the services we use', detail: 'SOC 1, SOC 2, or HITRUST. Period should be current. Note any carve-outs.' },
  { id: 'S2', item: 'Opinion is unmodified', detail: 'Qualified opinions and scope limitations need an impact note before approval.' },
  { id: 'S3', item: 'System description matches the contracted service', detail: 'Confirm locations, subprocessors, and data flows against the SOW.' },
  { id: 'S4', item: 'Exceptions are listed with management response', detail: 'Map each exception to a local compensating control or a dated vendor action.' },
  { id: 'S5', item: 'Bridge letter covers the gap to our year-end', detail: 'Required when the report period ends more than a few months before our SOX close.' },
  { id: 'S6', item: 'CUECs are mapped to local controls', detail: 'Complementary user entity controls become our tests. One owner per CUEC.' },
  { id: 'S7', item: 'Subservice organizations are identified', detail: 'Inclusive versus carve-out method. Follow the chain if they touch PHI.' },
  { id: 'S8', item: 'Security rating and questionnaire do not contradict the report', detail: 'Resolve conflicts before the decision is signed.' },
];

export const riskQuestions = [
  {
    id: 'q1',
    label: 'Does the vendor touch PHI or PII, and how much?',
    options: [
      { label: 'No', score: 0 },
      { label: 'Limited (under a defined threshold)', score: 2 },
      { label: 'PHI at scale', score: 5 },
    ],
  },
  {
    id: 'q2',
    label: 'Does the vendor handle payment data?',
    options: [
      { label: 'No', score: 0 },
      { label: 'Tokenized or limited', score: 2 },
      { label: 'Card or bank data in scope', score: 4 },
    ],
  },
  {
    id: 'q3',
    label: 'Does the vendor have access to our network or systems?',
    options: [
      { label: 'No access', score: 0 },
      { label: 'Limited application access', score: 2 },
      { label: 'Privileged or network access', score: 4 },
    ],
  },
  {
    id: 'q4',
    label: 'Is the vendor critical to client services?',
    options: [
      { label: 'No, internal only', score: 0 },
      { label: 'Supports a client process', score: 2 },
      { label: 'Client-facing and hard to replace', score: 4 },
    ],
  },
  {
    id: 'q5',
    label: 'Is work offshore or subcontracted?',
    options: [
      { label: 'No', score: 0 },
      { label: 'Subcontracted, onshore', score: 2 },
      { label: 'Offshore or unknown chain', score: 3 },
    ],
  },
  {
    id: 'q6',
    label: 'Does it use AI or automated processing on client data?',
    options: [
      { label: 'No', score: 0 },
      { label: 'Approved tools, no model training', score: 1 },
      { label: 'AI on client data or unclear use', score: 3 },
    ],
  },
];

export function tierFromScore(score: number): VendorTierId {
  if (score >= 16) return 1;
  if (score >= 10) return 2;
  if (score >= 5) return 3;
  return 4;
}

const tierCopy: Record<
  VendorTierId,
  { name: string; reviewDepth: string; frequency: string; nextStep: string }
> = {
  1: {
    name: 'Critical',
    reviewDepth:
      'SOC 2 Type II or HITRUST, a full questionnaire, a signed BAA, a pen-test summary, and security-rating monitoring.',
    frequency: 'Yearly, and again on any major service or location change.',
    nextStep:
      'Collect the current SOC 2 Type II (or HITRUST), map CUECs, confirm the BAA, and schedule a dated review before go-live or before year-end opinions.',
  },
  2: {
    name: 'High',
    reviewDepth:
      'SOC 2 Type II preferred; otherwise a SIG Lite or focused questionnaire, a BAA if PHI is in scope, and a rating check.',
    frequency: 'Every two years, with a light yearly check.',
    nextStep:
      'Request the SOC 2 Type II or SIG Lite package and confirm whether a BAA is required before approval.',
  },
  3: {
    name: 'Moderate',
    reviewDepth: 'A short questionnaire and a security-rating check. No onsite review.',
    frequency: 'Every three years.',
    nextStep: 'Send the short questionnaire, record the rating, and file the package before approval.',
  },
  4: {
    name: 'Low',
    reviewDepth: 'Intake attestation only. No questionnaire, SOC report, or onsite review.',
    frequency: 'At contract renewal.',
    nextStep: 'File the attestation and proceed on standard security terms.',
  },
};

const floorRules: { id: string; score: number; floor: VendorTierId; reason: string }[] = [
  { id: 'q1', score: 5, floor: 1, reason: 'PHI at scale cannot sit below Tier 1' },
  { id: 'q1', score: 2, floor: 2, reason: 'Limited PHI cannot sit below Tier 2' },
  { id: 'q2', score: 4, floor: 2, reason: 'Card or bank data in scope cannot sit below Tier 2' },
  { id: 'q3', score: 4, floor: 2, reason: 'Privileged or network access cannot sit below Tier 2' },
  { id: 'q4', score: 4, floor: 2, reason: 'A hard-to-replace client-facing service cannot sit below Tier 2' },
  { id: 'q6', score: 3, floor: 2, reason: 'AI on client data cannot sit below Tier 2' },
];

export function recommendVendor(scores: Record<string, number>): VendorRecommendation {
  const score = Object.values(scores).reduce((sum, value) => sum + value, 0);
  const scoreTier = tierFromScore(score);
  let tier = scoreTier;
  const floors: string[] = [];

  for (const rule of floorRules) {
    if (scores[rule.id] === rule.score && rule.floor < tier) {
      tier = rule.floor;
      floors.push(rule.reason);
    }
  }

  if (scores.q5 === 3 && scores.q1 >= 2 && tier > 2) {
    tier = 2;
    floors.push('Offshore or unknown subcontracting plus any PHI cannot sit below Tier 2');
  }

  const copy = tierCopy[tier];
  const floorNote = floors.length
    ? ` Score ${score} would have been Tier ${scoreTier}; ${floors.join('; ')}.`
    : '';

  return {
    score,
    scoreTier,
    tier,
    name: copy.name,
    floors,
    reviewDepth: copy.reviewDepth,
    frequency: copy.frequency,
    nextStep: copy.nextStep,
    summary: `Treat this as Tier ${tier} ${copy.name}.${floorNote} Review depth: ${copy.reviewDepth} Reassess ${copy.frequency} Next step: ${copy.nextStep}`,
  };
}
