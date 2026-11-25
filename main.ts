// Have You Tried Turning It Off? — make.fun entry
//
// The bounty asks for one funny line, under 200 characters, that a hopeless
// tech support agent says to a desperate customer. The humour comes from the
// agent's cheerful uselessness: the classic "turn it off and on again" is
// twisted twice — first the computer is treated like a person who "won't talk
// to you", then the promised escalation is to someone who also can't help.
// The customer's desperation is felt, never explained (a presentation in ten
// minutes, a blue screen), and the customer is never the butt of the joke.
//
// This program writes that single line to /output/entry.txt, the artifact
// the program/v1 harness grades. It is fully deterministic: the same line,
// byte for byte, on every run.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Your presentation starts in ten minutes and the screen's gone blue. " +
  "Turn it off, count to ten, and if it still won't talk to you, " +
  "I'll escalate this to someone who also can't help.";

// The gate allows 1 to 199 characters; stay safely inside it.
if (LINE.length < 1 || LINE.length > 199) {
  throw new Error(`entry line is ${LINE.length} characters, outside 1-199`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
