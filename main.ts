import { mkdirSync, writeFileSync } from "node:fs";

// One funny single-line excuse a developer gives when code breaks in
// production. Written from scratch for this competition.
const ENTRY =
  "I pushed at 4:59 on Friday and told the team the deploy was safe because the tests passed — turns out the tests were mocking the exact function that was on fire in production.";

// Validate the entry before writing: it must be a single line of
// 1-200 characters (counted as Unicode code points, not bytes) with
// no control characters. Fail loudly instead of writing bad output.
const length = [...ENTRY].length;
if (length < 1 || length > 200) {
  console.error(`ENTRY must be 1-200 characters, got ${length}.`);
  process.exit(1);
}
if (/[\u0000-\u001F\u007F]/.test(ENTRY)) {
  console.error("ENTRY must not contain control characters.");
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
