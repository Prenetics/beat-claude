# Beat Claude Challenge Brief
<!-- listing: title="Senior Procurement Manager, Ingredients — IM8 (Hong Kong)"; difficulty="Hard" -->

## Senior Procurement Manager, Ingredients — IM8

**Company:** IM8 / Prenetics (NASDAQ: PRE)  
**Role:** Senior Procurement Manager, Ingredients — IM8  
**Location:** Hong Kong  
**Format:** Decision memo plus a working spreadsheet  
**Estimated effort:** 3–4 hours; stop at four hours and flag unfinished work  
**Page limit:** Four pages for the memo, excluding the spreadsheet and AI evidence  
**Difficulty:** Senior / Hard

## About This Challenge

At IM8, we test how you think and execute with AI. This exercise asks you to protect production, make defensible ingredient decisions, and build a supply system that can support growth.

You may use AI throughout. You own the calculations, assumptions, and final recommendation. Submissions will be compared with a Claude baseline generated from exactly the same brief and data. To advance, your work must beat that baseline. Ties don't advance.

## About IM8

IM8 is a next-generation health and longevity brand co-founded by David Beckham and Prenetics (NASDAQ: PRE), on a mission to make world-class nutritional science accessible to everyone. Our products combine nutritional science with the discipline required to serve a global subscription business.

Our athlete partner roster includes David Beckham, Giannis Antetokounmpo, Aryna Sabalenka, Ollie Bearman, and Inter Miami CF. Ingredient identity, potency, purity, taste, consistency, availability, and traceability are central to the promise we make to customers.

**All operational figures, ingredient names, suppliers, and specifications below are fictional and supplied solely for this exercise. No external supplier research or contact is required.**

## The Challenge

You have joined IM8 to take ownership of ingredient procurement. Today is **Day 0**. One contract manufacturer has two confirmed production runs for an illustrative daily supplement:

| Run | Production start | Finished units | Material release deadline |
|---|---:|---:|---:|
| Run 1 | Day 21 | 100,000 | End of Day 20 |
| Run 2 | Day 49 | 120,000 | End of Day 48 |

Each unit consumes the ingredients below. Ignore process losses for this exercise. The quantities are manufacturing inputs per finished unit, not nutritional recommendations. Inventory is at this manufacturer, with no other consumption or reservations. Materials must be fully available and Quality-released before the relevant deadline. Partial production is possible; show how many complete units it would support.

### Ingredient position

| Ingredient | Input per finished unit | Released stock today | Other stock / open orders | Standard new-order terms |
|---|---:|---:|---|---|
| A — trademarked active | 2 g | 260 kg | 180 kg confirmed to arrive Day 42 | $180/kg; MOQ 200 kg; 56 days to arrival |
| B — botanical extract | 1 g | 70 kg | 80 kg received, on Quality hold | $60/kg; MOQ 100 kg; 28 days to arrival |
| C — flavour blend | 3 g | 420 kg; expires end of Day 35 | 300 kg confirmed to arrive Day 38 | $25/kg; MOQ 300 kg; 35 days to arrival |
| D — excipient | 4 g | 1,100 kg | No open orders | $8/kg; MOQ 500 kg; 14 days to arrival |

**Common rules**

- All days are calendar days. Day 0 orders start the lead-time clock immediately.
- Standard arrivals require **seven days** of testing and release: material arriving Day 42 is first usable Day 49. Expedited transport does not shorten testing.
- Released stock is usable through its expiry date. No expiry extensions, ingredient substitutions, potency adjustments, or rework are pre-approved.
- All prices are USD. Open-order commitments are already paid and outside the incremental purchase budget. Ignore taxes and other freight unless explicitly listed.
- You may commit **up to $40,000 in new ingredient purchases and expedite charges** without further approval. Anything above this requires a quantified escalation.
- There is no revenue or margin data: do not invent a stockout dollar loss. Show production exposure in units and days.
- If all runs remain on schedule, their dates are fixed. If a constraint prevents this, recommend a specific alternative and explain the service consequence.

### Decisions on your desk

**A — capacity and trademark protection.** The approved manufacturer can move the existing 180 kg order to arrival on Day 35 for an incremental $4,000 transport charge. Acceptance is required by Day 2. Separately, a broker offers 200 kg of a generic active at $125/kg, arrival Day 10. It is not approved, does not carry the trademark, and has no equivalence or stability evidence.

**B — held lot.** The approved specification requires identity confirmation, assay ≥98%, and microbiology within agreed limits. The held 80 kg lot has passed identity and microbiology, but its Certificate of Analysis reports **96.7% assay**. The supplier calls this “within normal variation.” No formal Quality disposition has been issued. The approved supplier can instead deliver a new 160 kg replacement lot on Day 12 at $72/kg, with a 100 kg MOQ. Treat this as a new purchase; any credit for the held lot is uncertain and must not fund your plan. Normal testing applies, and a passing result is not guaranteed.

**C — expiry and minimum orders.** The approved supplier can add a separate order of at least 300 kg at $25/kg, arrival Day 35, with 12 months of shelf life from arrival. It cannot split the MOQ or accelerate further. Beyond Run 2, the illustrative planning forecast is 120,000 finished units every 28 days, starting Day 77. This is a forecast, not a firm commitment.

**D — replenishment.** There are no current quality concerns. The standard supplier has sufficient capacity, but forecast quantities beyond Run 2 remain uncertain.

**Leadership mandate:** Protect the two runs without compromising ingredient standards. Make the cost and inventory consequences visible. Then show how you would prevent this becoming a weekly expediting exercise.

## Part 1 — Build the Source-to-Stock Plan (30%)

**What to do:** Build a spreadsheet showing the unmitigated position and your recommended plan.

**Your answer must cover:**

- Ingredient requirements in kg for each run, with visible formulas and unit conversions.
- A dated ledger showing opening usable stock, arrivals, release dates, consumption, expiry, and closing usable stock for each ingredient.
- Separation of released stock, held stock, and ordered material. Show every shortage at the production deadline, including any shortfall in complete finished units.
- Your selected purchases or actions, incremental spend, remaining budget, and residual inventory or expiry exposure. Distinguish commitments from potential supplier credits.
- A short explanation of which production promises you can make now and which remain conditional.

A compact, auditable spreadsheet is enough. No dashboard or slide design is required.

## Part 2 — Make the Quality and Supply Decisions (25%)

**What to do:** Recommend a course of action for A, B, and C, and show how you would execute it.

**Your answer must cover:**

- What you approve commercially, what you reject or hold, and which decisions require Quality, Product Development, or Regulatory approval.
- The specific evidence required before an ingredient or supplier is approved: specifications, traceability, testing, documentation, and change control.
- A contingency if B's replacement lot fails release testing on Day 19. Quantify the resulting production exposure and propose a decision deadline and escalation path.
- Your negotiation priorities with the approved suppliers, including delivery commitments, lot acceptance, remedies, shelf life, capacity, and trademark protections.
- A short supplier email, maximum 150 words, addressing the held B lot and replacement order. Do not actually contact anyone.

Do not assume commercial urgency can override a failed specification.

## Part 3 — Build the Replenishment System (20%)

**What to do:** Describe the operating model you would put in place over your first 90 days.

**Your answer must cover:**

- How you connect the demand plan, Master Production Schedule, ingredient requirements, supplier capacity, purchase orders, and release status across manufacturing partners.
- A proposed safety-stock and reorder policy for A and D. Demonstrate an initial calculation using the supplied forecast, including testing time, and label any provisional buffer assumption.
- What additional demand and supplier data you need before treating those policies as statistically supported.
- Where Kanban or pull replenishment is appropriate, and how you would use Heijunka planning given fixed production runs, MOQs, expiry, and long lead times.
- A small risk register and supplier scorecard, with named functions owning actions, decision triggers, and a weekly review rhythm.

We want a practical starting system. Do not manufacture forecast variability or present assumed service levels as established facts.

## Part 4 — Give Leadership a Decision (15%)

**What to do:** Write a maximum 250-word decision note within your four-page memo.

**Your answer must cover:**

- The recommendation, purchases or approvals needed today, spend, and production coverage.
- The two most material remaining risks, their owners, and next decision dates.
- One credible alternative and why you did not select it.
- A sensitivity: Run 2 demand increases by **25% on Day 10**. Show which ingredient constraints and spending decisions change, and what you can still promise. Supplier lead times remain unchanged; label any additional supplier concession as unconfirmed.

Your model should make this sensitivity traceable without rebuilding it.

## Part 5 — Show Your AI Workflow (10%)

**What to do:** Use AI on at least one substantive part of this exercise and show how you checked its work.

**Your answer must cover:**

- The tool/model, the prompt, and a short output excerpt or screenshot.
- One calculation or recommendation you independently verified, with the check shown.
- An error, omission, or weak assumption you identified and corrected. If none was found, show a deliberate challenge and its result; do not invent an error.
- One workflow you would implement at IM8, including its input data, human approval point, and measurable benefit.

Use only the fictional case data. Redact unrelated personal or employer information. Full chat histories and paid tools are not required.

## What We're Looking For

- Correct, traceable material planning that accounts for release dates and expiry.
- Quality standards maintained under production pressure.
- Commercial decisions that balance availability, capacity, inventory, and cash.
- Specific alternatives, owners, and deadlines when a plan depends on uncertain outcomes.
- Practical Lean principles applied to the actual constraints.
- AI usage backed by independent verification and personal judgment.
- Clear communication that helps leadership make a decision quickly.

## What We're NOT Looking For

- Counting quarantined, failed-specification, expired, or unreleased material as usable stock.
- Treating an unapproved generic as an interchangeable trademarked ingredient.
- Purchase recommendations that ignore MOQs, testing, deadlines, or budget.
- A confident production promise that depends on unconfirmed supplier concessions.
- Textbook safety-stock or Kanban language without an operational calculation.
- Invented business data, supplier facts, or false numerical precision.
- Polished AI output with no audit trail or independent checks.

## How to Submit

- Submit a PDF or view-access Google Doc, maximum four pages, plus an Excel file or view-access Google Sheet with formulas visible.
- Add a short AI-evidence appendix and a Loom walkthrough of up to five minutes explaining the main decisions.
- Email `recruitment@prenetics.com` with subject: `Beat Claude — Senior Procurement Manager, Ingredients — [Your Name]`. Include your resume and LinkedIn profile.
- Include your current and expected salary.
- **Deadline:** within seven calendar days of receiving the brief. Tell us your actual time spent; we do not reward exceeding the time box.

## Final Note

This mirrors the work: secure the ingredients, protect the standard, and give the business a plan it can execute. We care about the decisions and the evidence behind them.

The comparison baseline will use the same brief, data, and deliverables. To advance, your work needs to be better. **Ties don't advance. Good luck.**

*IM8 Health is a brand of Prenetics (NASDAQ: PRE). Learn more at [im8health.com](https://im8health.com).*
