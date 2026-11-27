# Beat Claude Challenge Brief
<!-- listing: title="Accountant / Senior Accountant, GL & Intercompany — Finance"; difficulty="Hard" -->

> *This is a fictional scenario. All entities, vendors, people, invoices, balances and exchange rates are invented for this exercise and don't represent any real company.*

## Accountant / Senior Accountant, GL & Intercompany — Finance

**Role:** Accountant / Senior Accountant (General Ledger & Intercompany)
**Challenge Format:** Hands-on case — close a month end: accruals and cut-off, then an intercompany reconciliation
**Time Allowed:** 90 minutes (Part A about 55 minutes, Part B about 30 minutes)
**Estimated Effort:** ~90 minutes

---

## About This Challenge

At Prenetics we don't just review resumes — we test talent against AI. This challenge replaces the standard CV-and-cover-letter screen with the actual work: you're handed what a finance team has gathered at month end and asked to close the period properly.

Claude has already done this case on the same pack. Your submission is scored blind against that baseline, and **to advance you must score higher than Claude. Ties don't advance.**

Use any tools you like, including AI. **You are accountable for every number:** state your assumptions, and do not invent facts that are not in the pack.

## The Scenario

You have joined the Finance team of **Brightwell Health** (fictional), a consumer health group with three entities:

- **HK01 — Brightwell Health (HK) Limited**, functional currency HKD
- **US01 — Brightwell Health Inc.**, functional currency USD
- **MY01 — Brightwell Health (M) Sdn Bhd**, functional currency MYR (Part B only)

It is **Tuesday 10 November 2026** and you are closing **October 2026** (period end 31 October 2026). The workbook contains everything the team has gathered so far.

## The Candidate Pack

Everything you need is in one workbook — download it and work from there:

**[`GL_Close_Candidate_Pack.xlsx`](./gl-accountant/GL_Close_Candidate_Pack.xlsx)**

| Tab | Contents |
|---|---|
| `Instructions` | The scenario, the facts you can rely on, and exactly what to submit |
| `AP_Invoices` | AP invoice register, posted 1 Oct to 10 Nov 2026 |
| `PO_Receipts` | Purchase order receipts with invoice-match status |
| `Sep_Accruals` | The accruals schedule as booked at 30 Sep 2026 |
| `Emails` | Emails Finance has received from the business |
| `IC_Matrix` | Each entity's reported intercompany balances at 31 Oct 2026, in USD |
| `IC_Ledgers` | Intercompany sub-ledger detail behind the matrix |
| `IC_Agreements` | Intercompany arrangements and policies |

## Facts You Can Rely On

1. Accruals booked at month end auto-reverse on day 1 of the next month, unless the schedule marks them as non-reversing.
2. The ERP does **not** automatically accrue goods received but not invoiced. Finance books these manually (Dr Inventory 1400 / Cr GRNI accrual 2110).
3. Materiality: accrue individual items of USD 2,000 / HKD 15,000 or more. List smaller items but do not accrue them.
4. Closing rates at 31 Oct 2026: USD 1 = HKD 7.78 = MYR 4.40.
5. The chart of accounts is listed on the `Instructions` tab and is the same for all entities.
6. The fiscal year is January to December.

## Your Tasks

### Part A — Accruals and cut-off (about 55 minutes)

Using the `AP_Invoices`, `PO_Receipts`, `Sep_Accruals` and `Emails` tabs, submit:

- **A. October accruals schedule** for each entity: item, basis or evidence, amount, currency and the journal (Dr/Cr accounts).
- **B. Posted invoices with cut-off, classification or entity errors**, and the correcting journals.
- **C. Items you considered and decided NOT to accrue**, with a one-line reason for each.
- **D. Up to 5 follow-up questions** for the business or vendors, each saying who you would ask and why it matters.
- **E. A short cover note (max 1 page)** to the Finance Manager summarising the P&L and balance sheet impact by entity, and anything that needs a decision.

### Part B — Intercompany reconciliation (about 30 minutes)

The IC matrix shows each entity's reported intercompany balances at 31 Oct 2026, translated to USD at closing rates. Balances must agree before group close. Using the `IC_Matrix`, `IC_Ledgers` and `IC_Agreements` tabs, submit:

- **F. For each pair of entities,** explain every difference, say whether it is an error or a timing item, and give the correcting journal (which entity books it, accounts, amount and currency).
- **G. How you would identify errors throughout the IC reconciliation each month (max half a page):** the checks you would run on the matrix and the ledgers, in what order, and who corrects what.

## What We're Looking For

- The right treatment, the right amount **and** a journal that balances, for every item.
- Sound cut-off judgement: what belongs in October, what doesn't, and what was posted to the wrong period, account or entity.
- You read last month's accruals schedule and the emails as carefully as the invoice register.
- An intercompany reconciliation that explains each difference and says which entity corrects it.
- A repeatable way of finding intercompany errors, not just the answers for this month.
- A cover note a Finance Manager could act on: impact by entity, and the decisions needed.
- Follow-up questions that are specific, go to the right person, and say why they matter.

## What We're NOT Looking For

- Accruing everything in sight, or accruing below the materiality threshold.
- Numbers or facts that are not supported by the pack. Each invented fact costs marks.
- Journals that don't balance, or that don't say which entity books them.
- Explaining a difference without saying whether it is an error or timing, or who fixes it.
- "The AI said so" with no check against the source tabs.

## How to Submit

Format is up to you: Excel plus Word or PDF, or a single workbook. Clarity counts. Apply via the careers page link for this role, or reply to the recruiter who sent you this challenge.

## Final Note

This mirrors the real job: an incomplete picture at month end, a deadline, three entities that have to agree, and an AI assistant you can lean on but must not trust blindly. Ties don't advance. Good luck.

---

*Prenetics (NASDAQ: PRE) is a health sciences company advancing consumer and clinical health. Learn more at [prenetics.com](https://www.prenetics.com).*
