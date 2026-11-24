import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The one line the judge sees: a dog who is certain it did nothing wrong.
const EXCUSE = "I'm a dog. 'Due tomorrow' means 'eat today.' Basic calendar skills.";

const OUTPUT = "/output/entry.txt";
const MAX_CHARS = 200;

function checked(text: string): string {
  const length = [...text].length;
  if (length < 1 || length > MAX_CHARS || text.trim().length === 0) {
    throw new Error(`Excuse must be 1-${MAX_CHARS} non-blank characters, got ${length}`);
  }
  return text;
}

function main(): void {
  mkdirSync(dirname(OUTPUT), { recursive: true });
  writeFileSync(OUTPUT, checked(EXCUSE), "utf8");
}

main();
