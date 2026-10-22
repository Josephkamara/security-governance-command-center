export const evidenceConcept = {
  title: 'Evidence automation',
  framing: 'An area of ongoing interest — an illustrative concept, not a shipped product or a past-employer result.',
  idea:
    'Collect the proof a control already produces — access reviews, configuration snapshots, and logs — through the APIs those systems expose. Store each pull as a timestamped record in an evidence locker, mapped to the control and the frameworks that control answers.',
  steps: [
    'A scheduler calls the source system API on the control’s test cadence.',
    'The pull is hashed, timestamped, and written to a locker the tester cannot silently edit.',
    'The record is mapped to one control ID and the framework citations on that row.',
    'A reviewer still judges whether the evidence is sufficient. Automation collects; it does not opine.',
  ],
};

export const sampleEvidenceRecord = {
  id: 'EVD-A05-20261001-0612',
  controlId: 'A-05',
  controlTitle: 'MFA for remote, privileged, and PHI access',
  source: 'Identity-provider policy export API',
  collectedAt: '2026-10-01T06:12:04Z',
  sha256: '9f3c…a18e (truncated, illustrative)',
  frameworks: [
    'SOX ITGC — Access',
    'SOC 2 — CC6.1, CC6.6',
    'HIPAA — 164.312(d)',
    'NIST CSF 2.0 — PR.AA-03',
    'ISO 27001:2022 — 8.5',
    'HITRUST — 01.j, 01.q',
  ],
  retention: '7 years',
  status: 'Locked',
  note: 'Illustrative fictional sample. No live system is connected.',
};
