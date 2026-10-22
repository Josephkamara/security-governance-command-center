/**
 * Exhaustive check of the four-tier inherent-risk calculator.
 * Keep floor rules aligned with src/data/vendors.ts.
 */
const questions = [
  { id: 'q1', scores: [0, 2, 5] },
  { id: 'q2', scores: [0, 2, 4] },
  { id: 'q3', scores: [0, 2, 4] },
  { id: 'q4', scores: [0, 2, 4] },
  { id: 'q5', scores: [0, 2, 3] },
  { id: 'q6', scores: [0, 1, 3] },
];

const floorRules = [
  { id: 'q1', score: 5, floor: 1 },
  { id: 'q1', score: 2, floor: 2 },
  { id: 'q2', score: 4, floor: 2 },
  { id: 'q3', score: 4, floor: 2 },
  { id: 'q4', score: 4, floor: 2 },
  { id: 'q6', score: 3, floor: 2 },
];

function tierFromScore(score) {
  if (score >= 16) return 1;
  if (score >= 10) return 2;
  if (score >= 5) return 3;
  return 4;
}

function recommend(scores) {
  const score = Object.values(scores).reduce((sum, value) => sum + value, 0);
  let tier = tierFromScore(score);
  for (const rule of floorRules) {
    if (scores[rule.id] === rule.score && rule.floor < tier) tier = rule.floor;
  }
  if (scores.q5 === 3 && scores.q1 >= 2 && tier > 2) tier = 2;
  return { score, tier };
}

const failures = [];
let count = 0;
const byTier = { 1: 0, 2: 0, 3: 0, 4: 0 };

function walk(index, current) {
  if (index === questions.length) {
    count += 1;
    const result = recommend(current);
    byTier[result.tier] += 1;
    if (result.score < 0 || result.score > 23) {
      failures.push(`score out of range ${result.score}`);
    }
    if (current.q1 === 5 && result.tier !== 1) {
      failures.push(`PHI at scale must be Tier 1: ${JSON.stringify(current)}`);
    }
    if (current.q1 === 2 && result.tier > 2) {
      failures.push(`limited PHI must be Tier 1-2: ${JSON.stringify(current)}`);
    }
    if (current.q2 === 4 && result.tier > 2) {
      failures.push(`card data must be Tier 1-2: ${JSON.stringify(current)}`);
    }
    if (current.q3 === 4 && result.tier > 2) {
      failures.push(`privileged access must be Tier 1-2: ${JSON.stringify(current)}`);
    }
    if (current.q6 === 3 && result.tier > 2) {
      failures.push(`AI on client data must be Tier 1-2: ${JSON.stringify(current)}`);
    }
    if (Object.values(current).every((value) => value === 0) && result.tier !== 4) {
      failures.push('all-no must be Tier 4');
    }
    return;
  }
  for (const score of questions[index].scores) {
    walk(index + 1, { ...current, [questions[index].id]: score });
  }
}

walk(0, {});

if (count !== 729) failures.push(`expected 729 combinations, got ${count}`);
if (byTier[4] < 1) failures.push('expected at least one Tier 4 outcome');
if (byTier[1] < 1) failures.push('expected at least one Tier 1 outcome');

if (failures.length) {
  console.error(failures.slice(0, 20).join('\n'));
  process.exit(1);
}

console.log(`ok  ${count} combinations  T1=${byTier[1]} T2=${byTier[2]} T3=${byTier[3]} T4=${byTier[4]}`);
