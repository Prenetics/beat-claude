# Beat Claude Challenge Brief
<!-- listing: title="AP Accountant — Finance"; difficulty="Hard" -->

> *This is a fictional scenario. All entities, vendors, bank accounts, people, figures and phone numbers are invented for this exercise and don't represent any real company.*

## AP Accountant — Finance

**Role:** AP Accountant (Accounts Payable)
**Challenge Format:** Hands-on case — review a live AP queue and propose a payment run
**Time Allowed:** 90 minutes, followed by a 15-minute walkthrough
**Estimated Effort:** ~90 minutes

---

## About This Challenge

At Prenetics we don't just review resumes — we test talent against AI. This challenge replaces the standard CV-and-cover-letter screen with the actual work: you're handed a real-looking AP queue and asked to get a payment run right, catch what shouldn't be paid, and communicate it clearly.

You are expected to use Claude throughout — reading the PDFs, matching, drafting — however you think is most effective. **You are accountable for the output: Claude can make mistakes, so check its work against the source documents.** Keep your Claude conversation; you'll share it (or your screen) in the walkthrough, where we'll ask how you prompted Claude, what you checked, and anything Claude got wrong.

## The Scenario

You've just joined the Finance team of **Apex Wellness Group** (fictional) as AP Accountant. The group has two entities:

- **Apex Wellness Limited (AWL)** — Hong Kong, functional currency HKD
- **Apex Wellness (US) LLC (AWUS)** — United States, functional currency USD

Today is **Wed 15 Oct 2026**. Your Finance Manager, Alex Wong, needs the proposed payment run for **Fri 17 Oct 2026**. Thirteen vendor documents are waiting in the AP queue and the shared AP mailbox has unread messages.

## The Candidate Pack

Everything you need is in the [`ap-accountant/`](./ap-accountant/) folder — download it and work from there:

| File | Contents |
|---|---|
| [`00_Candidate_Brief.pdf`](./ap-accountant/00_Candidate_Brief.pdf) | Full brief, finance policy and task detail |
| [`Invoices/`](./ap-accountant/Invoices) (13 PDFs) | Vendor invoices and credit notes received |
| [`AP_Data.xlsx`](./ap-accountant/AP_Data.xlsx) | Vendor Master, Open POs (with goods-received quantities), Paid Invoices (last 60 days), Chart of Accounts |
| [`AP_Mailbox.pdf`](./ap-accountant/AP_Mailbox.pdf) | 10 unread emails in the shared AP mailbox |
| [`Response_Template.xlsx`](./ap-accountant/Response_Template.xlsx) | Template for your answers (Invoice Review, Payment Run, Mailbox Triage) |

## Finance Policy (extract)

- **3-way match:** PO invoices must agree to the approved PO (price) and the goods receipt (quantity). Tolerance: the lower of 2% or HKD 500 / USD 65 per invoice. Anything outside tolerance is held and queried.
- **PO required:** all non-payroll spend above HKD 5,000 / USD 650 needs an approved PO before the vendor is engaged.
- **Vendor master:** vendors must be set up and approved before payment. Bank details are accepted only through the vendor onboarding form with an official bank letter and independent validation.
- **Bank detail changes:** must be verified by phoning the vendor on the contact number already held in the vendor master (never the number/email in the request), and approved by the Finance Manager.
- **Legal entity:** invoices must be addressed to the entity that raised the PO.
- **Payment run:** include approved invoices due on or before the next run date (Fri 24 Oct 2026). Overdue items are paid if approved. Credit notes are offset against the same vendor's payment.
- **Capitalisation:** IT hardware with unit cost at or above HKD 5,000 / USD 650 is capitalised as a fixed asset.

## Your Tasks

1. **Invoice review (core).** For each of the 13 documents, record in the *Invoice Review* tab: match result, GL code, decision (Pay / Hold / Reject / Not due / Offset), reason and next action.
2. **Payment run proposal (core).** In the *Payment Run* tab, list what should be paid on Fri 17 Oct 2026, by entity, vendor and currency, with totals.
3. **Email to Finance Manager (core).** Draft a short email to Alex (max ~200 words) summarising the run and listing items on hold with the action needed to clear each.
4. **Mailbox triage (bonus).** In the *Mailbox Triage* tab, categorise and prioritise all 10 emails and state the action. Draft replies to any three emails of your choice.

## What We're Looking For

- You catch the things that shouldn't be paid — duplicates, price and quantity variances, missing POs, an unapproved vendor, a wrong-entity bill, and the item that isn't due yet.
- You spot the **bank-detail-change request for what it is** and follow policy instead of the pressure in the email.
- Correct GL coding, including capitalising hardware above the threshold.
- A clean, correctly-totalled payment run split by entity and currency.
- Clear, concise communication to your manager — every hold has an owner and a next action.
- Evidence you checked Claude against the source documents rather than trusting it blindly.

## What We're NOT Looking For

- Paying everything in the queue because it was "due."
- Updating a vendor's bank details or paying a new account because an email said it was urgent.
- Mixing currencies or entities in the run, or totals that don't tie back to the invoices.
- "Claude said so" with no verification — if you can't name something Claude got wrong or that you double-checked, that's a flag.

## How to Submit

Submit your completed `Response_Template.xlsx` (Tasks 1, 2, 4) and your email to Alex (Task 3 — in the workbook or a separate file), plus your Claude chat link or export. Apply via the careers page link for this role, or reply to the recruiter who sent you this challenge.

## Final Note

This mirrors the real job: a queue of documents, a policy to apply, money about to move, and an AI assistant you can lean on but must not trust blindly. Ties don't advance. Good luck.

---

*Prenetics (NASDAQ: PRE) is a health sciences company advancing consumer and clinical health. Learn more at [prenetics.com](https://www.prenetics.com).*
