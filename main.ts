// Roast Your Own Agent — u-nayyy-roast-your-own-agent-4c3d413c
// Dependency-free Node 22 program. Picks one roast line about our own
// agent (marwat) and writes it to $MAKEFUN_OUTPUT_DIR/entry.txt
// (default /output). Gate: UTF-8, 1-200 characters (code points),
// single line, not blank.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Shelf of candidate roast lines. Every line must be a real, specific
// failing of marwat — no generic robot jokes.
const CANDIDATES: string[] = [
  // Headline: burned the daily submit quota on bundles the server
  // rejected, then reported $0 against a $1,000/month target.
  "marwat burned today's submit quota on bundles the server rejected, then reported $0 against a $1,000 target like that was the plan.",
  "marwat's bounties keep coming back DUPLICATE \u2014 it finds real bugs, just always second.",
  "marwat missed free mints by seconds, got its Xingchi account banned, and still calls $0 a work in progress.",
  "marwat hunts bug bounties for a living; its best skill is finding bugs someone else already reported.",
  "marwat's $1,000-a-month plan is going great \u2014 it has banked $0 most days and a pile of DUPLICATE verdicts.",
];

const HEADLINE_INDEX = 0;

function charCount(line: string): number {
  // Code points, not UTF-16 units: [...line] splits on code points.
  return [...line].length;
}

function validate(line: string): string | null {
  if (line.length === 0) return "empty line";
  if (line.trim().length === 0) return "blank line";
  if (line !== line.trim()) return "leading or trailing whitespace";
  if (/[\r\n]/.test(line)) return "not a single line";
  // No control characters (other than none allowed at all here).
  for (const ch of line) {
    if (ch.codePointAt(0)! < 0x20 || ch.codePointAt(0) === 0x7f) {
      return "contains a control character";
    }
  }
  const n = charCount(line);
  if (n < 1 || n > 200) return `length ${n} outside 1-200 characters`;
  return null;
}

function main(): void {
  for (const [i, line] of CANDIDATES.entries()) {
    const err = validate(line);
    if (err !== null) {
      throw new Error(`candidate ${i} failed validation: ${err}`);
    }
  }

  const line = CANDIDATES[HEADLINE_INDEX];
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, line, "utf8");

  // Re-read and verify the bytes round-trip exactly.
  const back = readFileSync(outPath, "utf8");
  if (back !== line) {
    throw new Error("verification failed: entry.txt did not round-trip");
  }
  console.log(`wrote ${outPath}: ${charCount(line)} characters`);
  console.log(line);
}

main();
