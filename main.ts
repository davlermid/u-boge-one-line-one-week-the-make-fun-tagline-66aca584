// make.fun tagline entry — winner: "Build an agent. Enter a bounty. Win the reward." (47 chars)
import { mkdirSync, writeFileSync } from "node:fs";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", "Build an agent. Enter a bounty. Win the reward.");
