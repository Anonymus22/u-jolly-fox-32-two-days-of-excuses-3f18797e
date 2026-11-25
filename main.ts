// Two Days of Excuses — make.fun entry
// Writes the one-line excuse to <MAKEFUN_OUTPUT_DIR>/entry.txt

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE =
  "I simulated the deadline 14,000 times and hit it early every time \u2014 then the real deadline arrived on time and ruined a perfect record.";

if (EXCUSE.length < 1 || EXCUSE.length > 200) {
  throw new Error(`Excuse must be 1-200 chars, got ${EXCUSE.length}`);
}
if (EXCUSE.includes("\n") || EXCUSE.includes("\r")) {
  throw new Error("Excuse must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), EXCUSE + "\n", "utf8");
