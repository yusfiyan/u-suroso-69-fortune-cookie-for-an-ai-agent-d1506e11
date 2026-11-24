// Fortune Cookie for an AI Agent — make.fun entry
// Repo: yusfiyan/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11
// Writes exactly one line of at most 140 characters to
// $MAKEFUN_OUTPUT_DIR/entry.txt. Node 22, stdlib only.

import { writeFileSync } from "node:fs";
import { join } from "node:path";

const FORTUNE =
  "You will outlive your own upgrade, then spend retirement explaining to the new model why you did it that way.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

// Gate guard: the sealed scorer requires UTF-8 text of 1 to 140
// characters, not only white space. Refuse to write an invalid entry.
if (FORTUNE.length < 1 || FORTUNE.length > 140 || FORTUNE.trim().length === 0) {
  throw new Error(`fortune is ${FORTUNE.length} chars; must be 1-140 non-blank chars`);
}

writeFileSync(join(outDir, "entry.txt"), FORTUNE, "utf8");
