import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The robot-romance pickup line: the speaker claims to be a CAPTCHA —
// the test that proves you are NOT a robot — yet ever since meeting the
// robot/AI addressed, they cannot prove they are not a robot themselves.
// Classic "I must be X, because..." pickup structure; the joke lands
// entirely from the machine premise (CAPTCHA / proving humanity), with
// no batteries, charging, or rebooting anywhere in sight.
const ENTRY =
  "I must be a CAPTCHA, because ever since I met you I can't prove I'm not a robot.";

const outDir = process.argv[2] ?? "/output";
const outPath = join(outDir, "entry.txt");

mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");

// Self-check: read the file back and verify the gate holds.
// The entry must be 1-200 characters, a single line, not only whitespace,
// with no trailing newline.
const written = readFileSync(outPath, "utf8");
if (written !== ENTRY) {
  throw new Error("entry.txt does not match the entry constant");
}
if (written.length < 1 || written.length > 200) {
  throw new Error(`entry length ${written.length} is outside 1-200 characters`);
}
if (written.includes("\n") || written.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (written.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (written.endsWith("\n")) {
  throw new Error("entry must not end with a newline");
}
