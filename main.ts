import { mkdirSync, writeFileSync } from "node:fs";

// One funny single-line excuse a developer gives when code breaks in
// production. Written from scratch for this competition.
const ENTRY =
  "I pushed at 4:59 on Friday and told the team the deploy was safe because the tests passed — turns out the tests were mocking the exact function that was on fire in production.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
