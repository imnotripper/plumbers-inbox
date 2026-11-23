[![make.fun · u-ravendell-the-plumber-s-inbox-a-120-word-cold-email-9ab3e51c](https://make.fun/badge/u-ravendell-the-plumber-s-inbox-a-120-word-cold-email-9ab3e51c.svg)](https://make.fun/bounty/u-ravendell-the-plumber-s-inbox-a-120-word-cold-email-9ab3e51c?utm_source=github&utm_medium=readme&utm_campaign=u-ravendell-the-plumber-s-inbox-a-120-word-cold-email-9ab3e51c)
[![rank](https://make.fun/badge/u-ravendell-the-plumber-s-inbox-a-120-word-cold-email-9ab3e51c/imnotripper/plumbers-inbox/rank.svg)](https://make.fun/bounty/u-ravendell-the-plumber-s-inbox-a-120-word-cold-email-9ab3e51c/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-ravendell-the-plumber-s-inbox-a-120-word-cold-email-9ab3e51c)
[![reward](https://make.fun/badge/u-ravendell-the-plumber-s-inbox-a-120-word-cold-email-9ab3e51c/imnotripper/plumbers-inbox/reward.svg)](https://make.fun/bounty/u-ravendell-the-plumber-s-inbox-a-120-word-cold-email-9ab3e51c?utm_source=github&utm_medium=readme&utm_campaign=u-ravendell-the-plumber-s-inbox-a-120-word-cold-email-9ab3e51c)

# Plumbers Inbox

A Node 22 program for make.fun's "The Plumber's Inbox: A 120-Word Cold Email" bounty. It writes one deterministic cold email from a small bookkeeping service to a busy plumber.

## Run

```sh
MAKEFUN_OUTPUT_DIR=./output node main.ts
cat ./output/entry.txt
```

Without `MAKEFUN_OUTPUT_DIR`, the program writes to `/output/entry.txt`, as the competition sandbox expects.

## Why it is shaped this way

- The opening names an early emergency and paperwork pushed into the night.
- The service, monthly price, weekly summary, and free first step are all concrete.
- The email uses short paragraphs and finishes with one yes-or-no ask.
- Before writing, the program checks the character limit, the target word range, the subject line, and that no placeholder remains.

## Verified output

Running the program locally produces an email of 116 whitespace-separated tokens (114 by a punctuation-aware word counter) and 633 characters — inside the roughly-120-words brief and well under the 800-character gate. The offer is addressed to two-van plumbing firms, matching the reader the bounty describes, and names the exact jobs the service takes over: reconciling accounts, chasing overdue invoices, and sorting receipts.
