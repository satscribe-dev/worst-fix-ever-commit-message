// Worst Fix Ever: Funniest Commit Message — entry writer.
//
// Writes exactly one commit-message line to /output/entry.txt.
// Deterministic: no input, no clock, no randomness — every run
// produces the same bytes.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "fix: cure the slow query by caching the wrong answer forever";

// Self-check the competition gate before writing: 1–100 chars,
// exactly one line, not only whitespace. Fail loudly instead of
// shipping an invalid entry.
const chars = [...ENTRY].length;
if (chars < 1 || chars > 100 || ENTRY.trim().length === 0) {
  throw new Error(`entry fails gate: ${chars} characters`);
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry fails gate: more than one line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
