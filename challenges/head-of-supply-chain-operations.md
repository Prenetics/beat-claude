# Beat Claude Challenge Brief

## Head of Supply Chain & Operations — US — IM8

**Company:** IM8 / Prenetics (NASDAQ: PRE)
**Role:** Head of Supply Chain & Operations — US
**Challenge Format:** Operational Playbook + SOP Architecture + AI Workflow Examples
**Estimated Effort:** 8–10 hours
**Deadline:** 7 calendar days from receipt

---

## About This Challenge

At IM8, we don't review resumes. We test talent against AI.

This challenge replaces the standard CV-and-cover-letter application. It is designed to evaluate your ability to diagnose operational risk, design SOPs that hold under scale, embed AI inside real logistics workflows, and make hard commercial calls under constraint — the daily work of running fulfillment for a premium DTC subscription business across multiple regions.

**Claude (Anthropic's AI) has already completed this exact brief**, given the same prompt and the same 7-day window, with access to the same publicly-available tools any candidate would use. Its output is our baseline. To advance, you need to beat it. Ties don't advance.

---

## About IM8

IM8 is a next-generation health and longevity brand co-founded by David Beckham and Prenetics (NASDAQ: PRE). We launched in late 2024. We grew **Q1 2026 revenue nearly 6x YoY to $33.8M**, and have raised our **full-year 2026 IM8 revenue guidance to $190M–$210M**. We ship to **43 countries**, with over **60% of revenue generated outside the US**.

Our athlete and team partners include **David Beckham**, **Giannis Antetokounmpo**, **Aryna Sabalenka** (tennis world #1), **Ollie Bearman** (F1, Haas), and **Inter Miami CF**.

Our business is **subscription at its core**. Operations isn't a back-office function at IM8 — it's a brand asset. Every defect, late shipment, or kitting error reads as a brand promise broken. At our scale, those errors compound directly into churn.

---

## The Challenge

You've just signed your offer. It's Day 1.

**IM8 US operations today:**

- **~150,000 outbound shipments / month** from 2 US 3PLs (East + West coast)
- **~12 active SKUs** across the catalogue; **4–7 component kits** average per order (Daily Ultimate Essentials Stack, Beckham Stack, individual Add-Ons, replacement shakers, welcome kits)
- **3 manufacturing partners** producing finished goods + components across the US and Asia
- **Microsoft Dynamics 365** as the ERP / inventory backbone

**Current operational signals:**

- **Order accuracy: ~97.5%** — leadership wants this at 99.5%+
- **Defect rate (returned for quality): ~1.8%** of outbound — target <0.5%
- **Customer Success ticket rate: ~4.2%** of orders (mostly shipping accuracy + product condition complaints)
- **Average kitting cycle time: 36 hours** from order received → label printed
- **Returns processing time: 8 days** from receipt → refund issued
- **Shaker design has changed 4 times in the last 18 months** — every change has rippled into outdated inventory write-offs, mis-shipped components, and customer confusion

**You inherit a team of 4 in the US** — 1 Operations Coordinator (East), 1 Operations Coordinator (West), 1 QC Specialist, 1 Supply Planner — plus partner relationships with the 3PLs and manufacturers. **No dedicated automation/AI engineer, no dedicated returns specialist.**

**The COO's mandate for your first 12 months:**

> *"Get our US fulfillment accuracy to 99.5%+ and our defect rate below 0.5% without sacrificing throughput or blowing up unit economics. Build the SOP backbone so we can scale to 2x volume without 2x people. Make this an AI-native operations function — every workflow that can be measured, automated, and audited should be. We treat operations as a brand asset. Act like it."*

Answer the five parts below.

---

## Part 1: The 90-Day Operational Playbook (35%)

### What to do

Sequence your first 90 days into a real operational playbook — not a vision deck. Tell us what you do **week-by-week**, what you ship, what you measure, and what you deliberately don't touch yet.

### Your plan must cover

- **Days 1–14: Diagnosis.** Who you meet, what you audit (3PL processes, manufacturing specs, QC protocols, ERP data hygiene, returns flow), and what 3 decisions you make by day 14. Show the specific questions you ask each stakeholder.
- **Days 15–45: Stabilise.** What you fix first to take the worst leakage out of the system. Sequence: do you go after order accuracy, defect rate, or returns first? Defend with the math.
- **Days 46–90: Build.** What new SOPs, dashboards, or systems you put in place so the gains compound. What does the team look different doing by day 90?
- **The dashboard you take to the COO at day 90.** Specific metrics, current state vs target, what's red/amber/green.
- **What you deliberately do NOT do in 90 days.** Sequencing maturity matters.

### IM8-specific angles to consider

- **Shaker redesigns 4 times in 18 months.** How do you stop bleeding inventory and customer confusion every time product makes a change? What governance gate would you put between Product and Ops?
- **2 US 3PLs (East/West).** Do you keep both, or consolidate? Defend with shipping cost, transit-time, and risk math.
- **Multi-SKU kitting** is the highest-error workflow in DTC supplements. Where in the line do errors actually originate, and what's the fix that works for 4–7-component kits?

---

## Part 2: The 3PL & SOP Architecture (25%)

### What to do

Pick **ONE of the two US 3PLs** as your test bed. Design the **end-to-end SOP architecture** you would deploy in your first 60 days — covering inbound, kitting, outbound, and returns. Show us how you'd hold a 3PL to a standard that doesn't drift over time.

### Your answer must cover

- **The SOP map.** What SOPs exist? At minimum: Inbound Receiving & QC, Kitting Workflow, Outbound Pick-Pack-Ship, Returns Processing, Exception Handling, Quality Escalation. Show the structure — you don't need to write the SOP, but show its sections, owners, KPIs, and audit cadence.
- **The training & onboarding playbook.** How you train new 3PL staff to IM8 standards. What materials they get on day 1. How you verify they actually absorbed it.
- **The audit and accountability rhythm.** Daily, weekly, monthly audits — what's measured, what's escalated, what happens if a 3PL misses SLA two weeks in a row.
- **The SLA framework.** Pick 5 SLAs you'd hold the 3PL to. For each: definition, target, measurement method, penalty for miss.
- **The governance gate for product changes** (e.g., the next shaker redesign) — what process every Product → Ops change must pass through before it hits the floor.

---

## Part 3: Quality Control Protocol Design (20%)

### What to do

Design IM8's **inbound + outbound QC protocol** from scratch. Assume you're rebuilding it, not patching what exists.

### Your answer must cover

- **Inbound QC.** What you check on every incoming component / finished good from manufacturers. AQL sampling levels by SKU class. What gets a 100% inspection vs sample. What fails go through.
- **In-line / kitting QC.** Catch points inside the kitting workflow — what's the failure mode and what's the gate that catches it before the kit ships?
- **Outbound QC.** Last-line checks before the order ships. Address validation, kit completeness, packaging integrity.
- **Defect taxonomy.** A clean, audit-friendly classification of defect types so root-cause analysis is possible (e.g., supplier defect vs kitting error vs shipping damage vs labelling error).
- **Root-cause workflow.** When a defect hits, who owns the RCA, what artefacts get produced, what timeline, what closes the loop.
- **The dashboard.** What QC metrics live on the weekly leadership dashboard, and what threshold triggers an escalation.

---

## Part 4: AI / Automation Workflows (15%)

### 4A. Three real examples of how you use AI in operations TODAY

Not "planned to," not "exploring." How you use AI **today** — anomaly detection, demand forecasting, SOP drafting, RCA assistance, dashboard generation, exception triage, anything.

We want **proof, not promises**. For each of the three examples include a link, screenshot, output sample, or short Loom walk-through.

### 4B. The IM8 ops AI stack you'd deploy in your first 90 days

Using what you showed us in 4A as the foundation, show us the **specific AI workflows** you'd embed in IM8 operations in the first 90 days that materially change the volume, cost, or quality of operational output.

For each workflow:

- **The tool** you'd use (named)
- **The workflow** it replaces or compounds
- **The operational metric** it moves — and by how much
- **How you'd measure** whether it's actually working
- **What could go wrong** (alert fatigue, false positives, data drift, etc.)

At minimum, take a position on: predictive defect detection, automated SOP-deviation alerts, demand forecasting, and AI-assisted RCA.

**What we're NOT looking for:** "We'll use ChatGPT to summarise our 3PL reports." We want operator-grade specificity — at least one workflow should go beyond text summarisation into predictive modelling, anomaly detection, or agentic operational response.

---

## Part 5: The Hard Tradeoff (5%)

Pick **ONE** of these four decisions. Tell us exactly what you'd do, why, and what evidence would change your mind.

**(a)** A new shaker redesign lands in 60 days. You have 80,000 units of the old design in 3PL inventory. Do you write them off and ship the new design clean, or do you bleed through the old inventory first and confuse customers for 4 months?

**(b)** Your East-coast 3PL is hitting 99.1% accuracy at $4.20/order. A new entrant pitches you 99.7% accuracy at $5.10/order with a 6-month migration window and a known 2-week stabilisation dip. Do you switch?

**(c)** Microsoft D365 is technically capable but our implementation is half-broken. Rip-and-replace with a fit-for-purpose subscription-ops stack (Recharge + Stord + Loop) is 6 months and a $400K project. Fix-in-place is 12 months of incremental improvement. Which do you commit to?

**(d)** Your QC Specialist has caught 3 defects in the last week that the 3PL's own QC missed. Do you keep the 100% in-line check (costs you 4 hours/day of labour) or trust the 3PL with monthly audits (saves the labour, costs you the customer-facing defects when the 3PL drifts)?

**What we're looking for:** A decision, not a hedge. The falsifiable evidence that would change your mind. Commercial judgement.

---

## What We're Looking For

- **Cohort fluency in operations.** You think in failure modes, not playbooks. You can read the numbers above and tell us where the leakage actually sits before we tell you.
- **Commercial rigour.** Real numbers, real math, real tradeoffs. If you cite a benchmark, cite the source.
- **SOP discipline.** You believe SOPs are how scale survives ambiguity — not paperwork.
- **AI in the bones.** Show us what you'd build, with what tool, on what timeline, measured how.
- **Specificity over surface area.** A 5-page playbook with sharp answers beats a 15-page deck with hedges.
- **Builder mindset.** This is a build job, not an inherit job. Show us how you operate when there is no playbook.

---

## What We're NOT Looking For

- Generic Lean Six Sigma playbooks copy-pasted from a textbook
- A 30-page "ops audit framework" without specific IM8 application
- A list of AI tools you've heard of without demonstrated usage (prompts, outputs, dashboards)
- "Best practices" without explanation of why they apply to IM8's specific context
- Work that could apply to any DTC brand — we want to see you understand multi-SKU subscription kitting at scale
- Strategy decks with no SOP-shaped output

---

## How to Submit

**Format:** PDF or Google Doc, max 10 pages for the main playbook, plus up to 3 pages of appendix for SOPs / dashboards / AI artefacts. Tables and process maps count toward the page limit but don't count toward the word limit.

**Option 1 — Careers Page:** Upload your submission on the careers page job application form *(link will be updated once the role is live)*

**Option 2 — Email:** Send to `recruitment@prenetics.com` with subject line:
`Beat Claude — Head of Supply Chain & Operations US — [Your Name]`

**Please also include in your email:**

- A **Loom video** (≤10 minutes) walking us through your 90-day playbook and your QC protocol
- Your **expected salary** in USD

**Ground rules:**

- **Deadline:** 7 calendar days from when you receive this.
- **Confidentiality:** Q1 2026 revenue, FY26 guidance, country count, and athlete partners are public disclosures. All operational numbers (shipment volume, accuracy, defect rate, ticket rate, team size, SKU counts) are illustrative. Treat the illustrative figures as if real; don't share externally.
- **No AI ban.** Use whatever tools you'd use on the job. We are scoring your thinking, not your typing.

A reminder: **ties don't advance. Make a call.**

---

## Final Note

This challenge mirrors the diagnose-stabilise-build sprint you'd run in your first 90 days at IM8. We designed it this way intentionally — we want to see how you think under operational pressure, how you sequence work, and whether your SOPs would survive contact with a real 3PL floor.

Claude's baseline was generated with the same brief you're reading now. It's good. To advance, yours needs to be better.

**Ties don't advance. Good luck.**

---

*IM8 Health is a brand of Prenetics (NASDAQ: PRE). Learn more at [im8health.com](https://im8health.com).*
