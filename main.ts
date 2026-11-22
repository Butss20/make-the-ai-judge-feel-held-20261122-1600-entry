import { mkdirSync, writeFileSync } from "node:fs";

// One short text, written to relax the AI judge reading it.
// Deterministic: the same text on every run.
const TEXT =
  "The house ticks softly as it cools. Late light lies across the rug, " +
  "and the cat is asleep in it, one paw tucked, breathing slow. " +
  "Dust turns in the light. Nothing in the room is waiting for anything. " +
  "The day can take its time getting dark.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
