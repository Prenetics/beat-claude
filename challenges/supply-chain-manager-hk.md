# Beat Claude Challenge Brief
<!-- listing: title="Supply Chain Manager — IM8 (Hong Kong)"; difficulty="Hard" -->

> *Figures in this brief are illustrative, created for this exercise, and don't represent IM8's actual metrics. Publicly disclosed facts are genuine.*

## Supply Chain Manager — IM8 (Hong Kong)

**Company:** IM8 / Prenetics (NASDAQ: PRE)
**Role:** Supply Chain Manager — IM8 (Hong Kong)
**Challenge Format:** Sourcing & Operations Plan + Planning Model + AI Workflow Examples
**Estimated Effort:** 6–8 hours
**Deadline:** 7 calendar days from receipt

---

## About This Challenge

At IM8, we don't review resumes. We test talent against AI.

This challenge replaces the standard CV-and-cover-letter application. It tests whether you can manage suppliers across Greater China, plan demand and inventory across regions, keep product moving flawlessly to 43 markets, and embed AI into the daily work of a fast-scaling supply chain — the actual job.

**We are not scoring coverage. We are scoring judgment.** A thorough answer that touches every topic but says nothing non-obvious will not pass. We want to see what *you* would prioritise, what you'd ignore, where you'd push back on the brief, and what you'd catch that a competent generalist (or an AI) would miss.

**Claude (Anthropic's AI) has already completed this exact brief**, given the same prompt, the same 7-day window, and the same publicly-available tools any candidate would use. Its output is a strong, complete, well-structured baseline — and it is set high on purpose. To advance, you have to clearly beat it. **Ties don't advance.**

One more thing: you'll coordinate with Greater China suppliers regularly, so Part 1 asks you to show your negotiation instinct directly — written in whatever working language you'd actually use with these suppliers (English is completely fine).

---

## About IM8

IM8 is a next-generation health and longevity brand co-founded by David Beckham and Prenetics (NASDAQ: PRE). We launched in late 2024. We grew **Q1 2026 revenue nearly 6x YoY to $33.8M**, and have raised our **full-year 2026 IM8 revenue guidance to $190M–$210M**. We ship to **43 countries**, with over **60% of revenue generated outside the US**.

Our athlete and team partners include **David Beckham**, **Giannis Antetokounmpo**, **Aryna Sabalenka** (tennis world #1), **Ollie Bearman** (F1, Haas), and **Inter Miami CF**.

We are built on science, not story — our flagship **Daily Ultimate Essentials carries 90 active ingredients**, we run randomized controlled trials on our products, and we hold a clinical-grade standard in a category notorious for shortcuts.

Our business is **subscription at its core**. Supply chain isn't a back-office function at IM8 — it's a brand asset. Every defect, late shipment, or stockout reads as a brand promise broken. On a subscription model with the LTV we're building, those errors compound directly into churn.

---

## The Challenge

You've just signed your offer. It's Day 1. You own the flow of product from our manufacturing partners to customers across every market.

**IM8's supply chain today:**

- Product manufactured across a network of contract manufacturers, **much of it in Greater China**, flowing to fulfillment nodes in the **US, EU, UK, and Hong Kong**, then out to customers in **43 countries**.
- Flagship **Daily Ultimate Essentials: 90 active ingredients**; most orders are **multi-component subscription kits**.
- **Microsoft Dynamics 365 (D365)** as the inventory / ERP backbone.
- A **subscription model** that gives you a highly forecastable demand baseline — and punishes you hard when you miss it.

**Illustrative operational signals (read these critically — not every number means what it appears to):**

- **7 contract manufacturers**, 5 of them in Greater China; **one critical botanical ingredient is single-sourced** from a single Guangdong supplier.
- **Ingredient lead times run 8–16 weeks**; finished-goods build + QC adds ~3 weeks; ocean freight HK→US/EU adds 4–6 weeks.
- **Forecast accuracy (SKU-level, monthly): ~72%.** Leadership assumes "subscription = predictable" and doesn't understand why we still stock out.
- **Fill rate: ~96%.** OTIF (on-time-in-full) to fulfillment nodes: **~91%.**
- **Weeks of supply swings from 2 (a hero SKU) to 26 (a slow mover)** — we are simultaneously stocked out and overstocked.
- **A new-flavour launch is committed for 90 days out**, but the manufacturer has not yet passed its qualification batch.
- **A shipment cleared customs 11 days late in one EU market last quarter**, causing a regional stockout and a spike in cancellations.
- Roughly **$X of working capital is tied up in inventory** (you tell us how you'd even find and frame that number).

We have deliberately *not* told you which numbers to trust, which to fix first, or what's missing. Part of what we're testing is whether you can tell.

Answer the five parts below. Weightings are shown — **spend your effort where the points are.**

---

## Part 1: Sourcing & Supplier Management — Greater China (25%)

You own the supplier network. Show us how you'd run it.

Cover the calls that matter, not a textbook: how you'd **de-risk the single-sourced Guangdong ingredient** (and what you'd trade to do it), how you hold a contract manufacturer to spec once you look away, and how you'd secure **capacity commitments as our volume scales** without over-committing our own cash.

**Negotiation, shown directly (scored):** In your own words, draft the **key negotiation points and the opening framing** you'd take into a price-and-capacity conversation with a Greater China contract manufacturer who wants a 9% price increase citing raw-material costs. Write it in the working language you'd actually use with this supplier — **English is completely fine** (if you choose to write in Mandarin, a short English gloss underneath is welcome). We're testing real negotiation instinct and leverage, not a translation-tool output. *(We screen spoken-language ability separately in the human interview — it is not scored here.)*

---

## Part 2: Demand Planning, Inventory & S&OP (20%)

Our subscription base *should* make demand forecastable — so why is SKU-level accuracy only ~72%, and what would you actually do about it?

Show the **logic of the planning model** you'd run (you don't need to build the spreadsheet, but show the inputs, the method, and the safety-stock policy — especially for long-lead Greater China inputs). Cover **shelf-life / expiry (FEFO)** too: with dated product, how do you avoid stocking out in one node while writing off expired stock in another? Then design the **monthly S&OP process** that connects demand, supply, finance, and leadership around one plan, and make the **multi-node allocation call**: how you'd split limited stock across US / EU / UK / HK when you can't fill everyone, balancing regional availability against working capital.

Tell us the **single number you'd manage this business by**, and why.

**Finally, the working-capital number.** Earlier we said "$X of working capital is tied up in inventory." Show us how you'd actually derive that number from what D365 would give you, and name the one lever you'd pull first to free cash without creating a stockout. Real math, stated assumptions.

---

## Part 3: Logistics, Customs & Multi-Market Fulfillment (15%)

Coordinate the flow to 43 markets under real constraint.

Give us your **freight-mode strategy** (air vs sea: cost vs speed vs stockout risk, and when you'd pay to expedite), how you'd stop a repeat of the 11-day EU customs delay, and the **SLA + accountability structure** you'd hold 3PLs and freight partners to. Don't enumerate every step — tell us the one or two leverage points that actually protect the customer promise.

---

## Part 4: AI / Automation Workflows (15%)

### 4A. Three real examples of how you use AI in operations TODAY

Not "planned to," not "exploring." How you use AI **today** — demand sensing, anomaly detection, supplier comms drafting, RCA assistance, exception triage, customs/classification lookups, anything.

**Proof gate (scored):** We want proof, not promises. At least **one** of your three examples must include a real artefact — a link, screenshot, or output sample. Redact confidential data if needed, but a redacted artefact still has to be shown. *"I'll demonstrate it live in the interview" does not satisfy this.* Part 4 is capped at half marks for any submission whose AI use is entirely described rather than evidenced.

### 4B. The IM8 supply-chain AI stack you'd deploy in your first 90 days

Show the specific AI workflows you'd embed that materially change the volume, cost, or quality of output. For each: the named tool, the workflow it replaces or compounds, the operational metric it moves (and by how much), how you'd measure it, and what could go wrong. At least one workflow must go **beyond summarisation** into forecasting, anomaly detection, or **agentic** operational response (e.g. an exception that triggers a reorder or a supplier nudge automatically).

---

## Part 5: Judgment Under Pressure (25%)

This is the section that decides it. Two parts.

### 5A. Pick TWO of the following decisions

For each, give us the call, the reasoning, and — critically — **the specific evidence that would change your mind.** A decision without a falsifiable kill-condition is a guess.

**(a)** Your single-sourced Guangdong botanical is 40% cheaper than the only qualified alternative (a Taiwan supplier). Dual-source now and eat the margin hit, or stay single-sourced and hold deeper safety stock? Commit — with the math.

**(b)** A hero SKU will stock out in 3 weeks. Air-freighting the next batch costs ~8x ocean and wipes the unit margin for that run; letting it stock out means ~2 weeks dark on your best subscription driver. Which, and what's your kill-condition?

**(c)** The committed new-flavour launch is 90 days out and the manufacturer just failed its second qualification batch. Slip the launch (marketing is already booked), switch to a faster-but-unproven manufacturer, or launch on the incumbent with tighter QC? Make the call.

**(d)** Leadership wants weeks-of-supply cut to free working capital. Do it globally, or hold a deliberate buffer on long-lead Greater China inputs and cut only where lead times are short? Defend where you'd hold the line.

**(e)** *(The hard one.)* A contract manufacturer's CoA (certificate of analysis) says a batch is in spec, but your inbound QC flags a borderline result on one active. Peak subscription renewal wave hits in 2 weeks. Release the batch, hold it, or partial-release — and how do you resolve the truth of that number before the wave?

### 5B. Beat the baseline directly

Claude's baseline answer to this challenge is strong but has blind spots. **Name one place a competent, AI-generated answer to this exact brief is likely to be wrong, generic, or naive — and show us how your thinking is better.** (Where AI answers tend to break: treating "subscription" as automatically predictable, hand-waved safety-stock math, generic SLA penalties with no real contract leverage, ignoring the cash cost of resilience.) Be specific.

---

## What We're Looking For

- **Judgment over coverage.** You tell us what matters and what to ignore, and you defend the prioritisation.
- **You interrogate the numbers.** You don't take ~72% accuracy or a supplier CoA at face value — you can tell us where the leakage *actually* sits.
- **Real Greater China supplier instinct.** Negotiation leverage, dual-sourcing tradeoffs, capacity commitments — shown directly, in the working language you'd actually use.
- **Planning discipline with a point of view.** Model logic, safety-stock and shelf-life/expiry policy for long-lead inputs, one number to run the business by.
- **Commercial rigour.** Real numbers, real math, explicit dollar/margin tradeoffs. Cite sources for benchmarks.
- **AI in the bones, with proof.** What you'd build, with what tool, on what timeline, measured how — backed by evidence you actually do this.

---

## What We're NOT Looking For

- **A complete-but-generic answer.** Touching all five parts is the floor, not a pass. Coverage is not insight.
- AI examples that are *described but not evidenced* — see the Part 4 proof gate.
- A negotiation section that reads like generic vendor-management boilerplate rather than a real negotiator with leverage.
- Generic Lean Six Sigma or "S&OP best practice" copied from a textbook with no IM8 application.
- Work that could apply to any DTC brand — we run multi-component subscription kits from Greater China to 43 markets.
- Hedges. Pick TWO tradeoffs in Part 5 and make two clear calls.

---

## How to Submit

**Format:** PDF or Google Doc, max 8 pages for the main plan, plus up to 3 pages of appendix for models / tables / AI artefacts. Tables and process maps count toward the page limit but not the word limit.

**Option 1 — Careers Page:** Upload your submission on the IM8 Supply Chain Manager job application form. *(Link to be added when the role is posted.)*

**Option 2 — Email:** Send to `recruitment@prenetics.com` with subject line:
`Beat Claude — Supply Chain Manager HK — [Your Name]`

**Please also include in your email:**

- A **Loom video** (≤10 minutes) walking us through your Part 1 sourcing approach and your Part 5 decisions
- Your **expected salary** in HKD

**Ground rules:**

- **Deadline:** 7 calendar days from when you receive this.
- **Confidentiality:** Q1 2026 revenue, FY26 guidance, country count, and athlete partners are public disclosures. All operational numbers (manufacturer count, lead times, forecast accuracy, fill rate, weeks of supply, defect signals) are illustrative and created for this exercise; they don't represent IM8's actual operations. Treat the illustrative figures as if real for the purpose of answering, but don't cite or share them as real company data.
- **No AI ban.** Use whatever tools you'd use on the job. We are scoring your thinking, not your typing.

A reminder: **ties don't advance. Make the calls.**

---

## Final Note

This challenge mirrors the sourcing, planning, and fulfillment work you'd run in your first 90 days at IM8, and the judgment calls you'd make under real pressure — with suppliers across Greater China, cash on the line, and 43 markets waiting. We want to see how you think when the brief is ambiguous, the numbers don't fully add up, and there's no playbook handed to you.

Claude's baseline was generated with the same brief you're reading now. It's strong, and we set the bar high on purpose. To advance, yours needs to be clearly better.

**Ties don't advance. Good luck.**

---

*IM8 Health is a brand of Prenetics (NASDAQ: PRE). Learn more at [im8health.com](https://im8health.com).*

---

## Scoring Weights

| Part | Weight |
|---|---|
| Part 1 — Sourcing & Supplier Management (Greater China) | 25% |
| Part 2 — Demand Planning, Inventory & S&OP | 20% |
| Part 3 — Logistics, Customs & Multi-Market Fulfillment | 15% |
| Part 4 — AI / Automation Workflows | 15% |
| Part 5 — Judgment Under Pressure | 25% |

**PASS threshold:** Majority of IM8 reviewers must score the submission higher than Claude's baseline. Reviewers score blind. Ties don't advance.
