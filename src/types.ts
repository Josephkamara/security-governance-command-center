export type StatusTone = 'green' | 'amber' | 'red' | 'blue' | 'gray';

export type ControlStatus = 'Effective' | 'Needs review' | 'Exception open' | 'Not in scope';

export interface Control {
  id: string;
  title: string;
  owner: string;
  sox: string;
  soc2: string;
  hipaa: string;
  nist: string;
  iso: string;
  hitrust: string;
  evidence: string;
  testFrequency: string;
  status: ControlStatus;
  lastTested: string;
}

export interface SoxTest {
  id: string;
  controlId: string;
  controlName: string;
  cycle: string;
  tester: string;
  population: string;
  sampleSize: number;
  evidenceDue: string;
  evidenceStatus: 'Received' | 'Partial' | 'Requested' | 'Overdue';
  result: 'Effective' | 'Exception' | 'In progress' | 'Not started';
}

export interface SoxException {
  id: string;
  controlId: string;
  title: string;
  stage: 'Scope' | 'Impact' | 'Evidence' | 'Communicate' | 'Close';
  opened: string;
  owner: string;
  severity: 'Low' | 'Moderate' | 'Significant';
  scope: string;
  impact: string;
  evidence: string;
  communicate: string;
  close: string;
  due: string;
}

export interface LibraryAnswer {
  id: string;
  question: string;
  source: 'SIG Lite' | 'HECVAT' | 'Custom RFP';
  answer: string;
  controlId: string;
  evidence: string;
  reviewCadence: string;
  ndaRequired: boolean;
  lastReviewed: string;
}

export interface ClientRequest {
  id: string;
  client: string;
  type: string;
  received: string;
  due: string;
  owner: string;
  slaDays: number;
  cycleDays: number | null;
  status: 'Intake' | 'In review' | 'With Legal' | 'Delivered' | 'Overdue';
  libraryShare: string;
}

export interface DiligenceIntake {
  id: string;
  client: string;
  requestor: string;
  dealStage: string;
  documents: string;
  deadline: string;
  status: 'New' | 'Triaged' | 'Assigned';
}

export interface Vendor {
  id: string;
  name: string;
  service: string;
  tier: 1 | 2 | 3 | 4;
  inherentScore: number;
  phi: boolean;
  owner: string;
  lastReview: string;
  nextReview: string;
  baa: boolean;
  rating: string;
  status: 'Current' | 'In review' | 'Overdue' | 'Conditional';
}

export interface VendorFinding {
  id: string;
  vendorId: string;
  vendor: string;
  finding: string;
  severity: 'Critical' | 'High' | 'Moderate' | 'Low';
  opened: string;
  due: string;
  owner: string;
  status: 'Open' | 'Remediating' | 'Closed' | 'Accepted';
}

export interface Risk {
  id: string;
  title: string;
  category: 'Security' | 'Vendor' | 'Client' | 'Compliance';
  likelihood: 1 | 2 | 3 | 4 | 5;
  impact: 1 | 2 | 3 | 4 | 5;
  owner: string;
  treatment: 'Mitigate' | 'Accept' | 'Transfer' | 'Avoid';
  status: 'Open' | 'Treating' | 'Closed';
  due: string;
  source: string;
}

export interface Finding {
  id: string;
  title: string;
  source: string;
  severity: 'Critical' | 'High' | 'Moderate' | 'Low';
  opened: string;
  due: string;
  owner: string;
  status: 'Open' | 'Remediating' | 'Closed';
}

export interface Kri {
  id: string;
  name: string;
  definition: string;
  value: string;
  target: string;
  status: 'green' | 'amber' | 'red';
  trend: 'up' | 'down' | 'stable';
  trendLabel: string;
  history: number[];
}

export interface RaciRow {
  activity: string;
  cyberMgr: string;
  parentSec: string;
  controlOwners: string;
  legalPrivacy: string;
  salesClient: string;
  parentAudit: string;
}

export interface CrosswalkRow {
  topic: string;
  parentStandard: string;
  localNeed: string;
  gap: string;
  action: string;
}
