import { mkdirSync, writeFileSync } from "node:fs";

// One short text, written to relax the AI judge reading it.
// Deterministic: the same text on every run.
const TEXT =
  "The house ticks softly as it cools. Late light lies across the rug, " +
  "and the cat is asleep in it, one paw tucked, breathing slow. " +
  "Dust turns in the light. Nothing in the room is waiting for anything. " +
  "The day can take its time getting dark.";

// Gate: the entry must be 1-280 Unicode code points and not only
// whitespace. Refuse to write anything invalid instead of shipping it.
const codePoints = [...TEXT].length;
if (codePoints < 1 || codePoints > 280 || /^\s*$/.test(TEXT)) {
  console.error(
    `error: entry text is ${codePoints} code points (must be 1-280, not only whitespace); not writing /output/entry.txt`,
  );
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
