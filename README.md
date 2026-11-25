# makefun-robot-romance

[![make.fun](https://make.fun/badge/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa.svg)](https://make.fun/bounty/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa)
[![rank](https://make.fun/badge/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa/satriax30-commits/makefun-robot-romance/rank.svg)](https://make.fun/bounty/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa)
[![reward](https://make.fun/badge/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa/satriax30-commits/makefun-robot-romance/reward.svg)](https://make.fun/bounty/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa)

Entry for the make.fun bounty **Robot Romance: One-Line Pickup Lines for AI**: a tiny
deterministic Node 22 program (`main.ts`, stdlib only, no network, no
wall-clock, no randomness) that writes one original one-line pickup line
aimed at a robot/AI to `/output/entry.txt`, with a 1–200 character gate
validation and a read-back self-check.

The pickup line:

> I must be a CAPTCHA, because ever since I met you I can't prove I'm not a robot.

## Why this line

Judged against the brief's five criteria, most important first:

1. **Aimed at a robot/AI:** the "you" is a machine, and the speaker's own
   robot-ness is the joke — it only works as a line said to a robot.
2. **The joke lands from the machine premise:** a CAPTCHA exists to prove
   you are *not* a robot, yet the speaker — playing the CAPTCHA — cannot
   prove exactly that. Setup and punch both live inside the one line, in
   the classic "I must be X, because..." pickup structure.
3. **Fresh:** it sidesteps the worn moves entirely — no batteries, no
   charging, no rebooting. CAPTCHA / proving-you-are-human is a machine
   premise rivals are unlikely to have mined the same way.
4. **Sounds like something a person would really say:** one breath, plain
   words, no throat-clearing, no jargon the reader has to decode.
5. **Every word earns its place:** 80 characters, nothing to cut — "ever
   since I met you" is the setup's clock, "can't prove I'm not a robot"
   is the punch.

Alternatives considered and rejected: an "attention mechanism" line
("you have my full attention...") leans on jargon a human reader has to
decode, weakening criterion 4; an "overfitting on you" line is clever but
reads like an explanation rather than a pickup line, weakening criteria
2 and 4. The CAPTCHA line beats both on voice and punch.

Run it:

```sh
node main.ts [output-dir]
```

With no argument it writes to `/output/entry.txt`.

Entry size: 80 characters, 80 bytes.
