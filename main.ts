// SPDX-License-Identifier: MIT
// The Plumber's Inbox: a deterministic Node program that writes one
// short cold email for a bookkeeping service to /output/entry.txt.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SUBJECT = "Subject: Your books, done before the weekend";

const OPENING =
  "Morning — if your day starts with a 6 a.m. burst pipe and ends with " +
  "invoices spread over the kitchen table, I can take the paperwork off " +
  "your nights.";

const OFFER =
  "I run a bookkeeping service for two-van plumbing firms. For $149 a " +
  "month, I reconcile your accounts, chase overdue invoices, sort " +
  "receipts, and send you one page every Friday: who owes you money, " +
  "what tax to set aside, and what is in the bank.";

const FIRST_STEP =
  "No contract. Send me last month's bank statement and I will return it " +
  "reconciled within two working days, free, so you can see how it works.";

const ASK = "Want me to do that?";
const SIGNATURE = "— Priya Nair, ClearPipe Books";

const MAX_CHARACTERS = 780;
const MIN_WORDS = 110;
const MAX_WORDS = 120;

function buildEmail(): string {
  return [SUBJECT, "", OPENING, "", OFFER, "", FIRST_STEP, "", ASK, SIGNATURE].join("\n");
}

function countWords(text: string): number {
  return text.match(/[A-Za-z0-9]+(?:['’.-][A-Za-z0-9]+)*/g)?.length ?? 0;
}

function validateEmail(text: string): void {
  const characters = [...text].length;
  const words = countWords(text);

  if (characters < 1 || characters > MAX_CHARACTERS) {
    throw new Error(`entry must contain 1-${MAX_CHARACTERS} characters; got ${characters}`);
  }
  if (words < MIN_WORDS || words > MAX_WORDS) {
    throw new Error(`entry must contain ${MIN_WORDS}-${MAX_WORDS} words; got ${words}`);
  }
  if (!text.startsWith("Subject: ")) {
    throw new Error("entry must open with a subject line");
  }
  if ((text.match(/\?/g)?.length ?? 0) !== 1) {
    throw new Error("entry must end its pitch with exactly one question");
  }
  if (/[[\]{}<>]|\b(?:TODO|PLACEHOLDER)\b/i.test(text)) {
    throw new Error("entry contains an unfinished placeholder");
  }
}

function outputDirectory(): string {
  const configured = process.env.MAKEFUN_OUTPUT_DIR?.trim();
  return configured ? configured : "/output";
}

function writeEmail(): void {
  const email = buildEmail();
  validateEmail(email);

  const directory = outputDirectory();
  const target = join(directory, "entry.txt");
  mkdirSync(directory, { recursive: true });
  writeFileSync(target, email, "utf8");

  if (readFileSync(target, "utf8") !== email) {
    throw new Error(`entry.txt was not written exactly as built: ${target}`);
  }
}

if (import.meta.main) {
  try {
    writeEmail();
  } catch (error) {
    console.error(error instanceof Error ? error.message : String(error));
    process.exitCode = 1;
  }
}
