# Beat Claude Challenge Brief
<!-- listing: title="CRO Manager — IM8"; difficulty="Hard" -->

> *Figures in this brief are illustrative, created for this exercise, and don't represent IM8's actual metrics. Publicly disclosed facts are genuine.*

## CRO Manager — IM8

**Company:** IM8 / Prenetics (NASDAQ: PRE)
**Role:** CRO Manager — IM8
**Challenge Format:** Take-Home Assignment
**Estimated Effort:** 6–8 hours

---

## About This Challenge

At IM8, we don't just review resumes — we test talent against AI.

This challenge was designed to evaluate your ability to diagnose conversion barriers, design rigorous experiments, and translate behavioural data into commercially meaningful revenue lift for a premium DTC wellness brand.

**Claude (Anthropic's AI) has already completed this exact brief.** Its output is our baseline. To advance, you need to beat it. Ties don't advance.

---

## About IM8

IM8 is a next-generation health and wellness brand co-founded with global icon David Beckham. Launched in 2024, IM8 has become one of the fastest-growing supplement brands in the world within just six months. Our flagship product, **Daily Ultimate Essentials**, delivers 92 clinically dosed nutrients in a single daily serving — trusted by 470,000+ customers and backed by a 12-week randomised, controlled clinical trial. NSF Certified for Sport.

IM8 sells primarily through **im8health.com** on a subscription model, shipping to 31+ countries. Our brand ambassadors include **David Beckham**, **Aryna Sabalenka** (tennis world #1), and **Oliver Bearman** (Formula 1).

**This is the seat that owns end-to-end conversion** across every surface of our DTC experience — Homepage, PDPs, Collections, Cart, Checkout. You'll report directly to the VP of Growth with a direct line to the CEO.

---

## The Challenge

You are the newly hired CRO Manager at IM8. Your first 30 days are an audit-and-build sprint: diagnose the highest-leverage conversion barriers on im8health.com, build a prioritised testing backlog, and design the first three experiments you'd ship.

**Everything you need is publicly available.** Visit the storefront. Add a product to cart. Go through checkout (you don't need to complete the purchase). Pull up the mobile experience. Then build something better.

---

## Part 1: Funnel Audit & Drop-Off Diagnosis (30%)

### What to do

Conduct a full audit of im8health.com across the entire purchase funnel. Identify the highest-leverage drop-off points and explain why they're costing IM8 revenue.

### Your audit must cover

- **Homepage** — first 5 seconds of attention, value prop clarity, hero treatment, navigation, CTA hierarchy
- **Collection / PLP pages** — discovery, filtering, product card design, social proof
- **Product Detail Page (PDP)** — hero imagery, ingredient storytelling, subscription vs one-time framing, review integration, cross-sell, urgency mechanics, sticky CTA
- **Cart** — friction, shipping/returns clarity, cart upsell, payment method visibility, abandonment risks
- **Checkout** — Shopify checkout flow, guest vs account, address capture, payment options, post-purchase upsell
- **Mobile experience** — every observation should explicitly call out mobile vs desktop divergence

### What we want to see

- **Annotated screenshots** with specific issues circled and labelled
- **Plain-language explanations** of why each issue is hurting CVR — citing user psychology, behavioural friction, or a specific Baymard / CXL principle
- **Estimated revenue impact** of fixing each issue (rough order of magnitude is fine — show the maths)
- **Mobile-first lens** — at least 60% of your observations must be about the mobile flow

---

## Part 2: Hypothesis Backlog (25%)

### What to do

Build a prioritised hypothesis backlog of **15+ A/B test ideas** scored using the ICE framework (Impact / Confidence / Ease, 1–10 each).

### For each hypothesis include

- **Test name** (short, memorable)
- **Funnel stage** (Homepage / PDP / Cart / Checkout / etc.)
- **Hypothesis statement** in the form: *"If we change X, then Y will improve, because Z."*
- **Primary metric** (ATC %, Reached Checkout %, CVR %, RPS, AOV)
- **Secondary metrics**
- **ICE score** with reasoning
- **Effort estimate** (S / M / L)
- **Expected uplift range** with rationale

The top 3 should be ranked and explicitly justified — what makes them the highest-leverage tests to ship first?

---

## Part 3: Three Test Briefs (20%)

### What to do

Take your top 3 ranked hypotheses from Part 2 and write **production-ready test briefs** a developer could ship same-day.

### Each test brief must include

- Hypothesis (restated)
- Variant description with wireframe sketch or mockup (Figma, drawn, or screenshot annotation — whatever's fastest)
- Audience / segmentation (all traffic? mobile only? returning users? new visitors?)
- Sample size calculation showing how long the test needs to run for statistical significance (state your assumed baseline CVR and detectable lift)
- Pre-registered success criteria — what result kills the test, what result ships the variant
- QA checklist — what could break, what to verify before launch
- Post-test learning extraction — what we'd document regardless of result

If you can show the actual maths for sample sizing (with calculator or formula), do it.

---

## Part 4: AI-Native CRO Workflow (20%)

### What to do

Demonstrate how you'd use AI tools (Claude, ChatGPT, Cursor, agentic stacks) as a daily operating layer for CRO at IM8. This is not theoretical — show your actual prompts, outputs, and workflow.

### We want to see

- **Hypothesis generation** — show real prompts you'd use to surface non-obvious test ideas from session replay summaries, review mining, or competitor teardowns
- **Copy variant generation at scale** — how you'd use AI to draft 10 high-quality PDP headline variants without lazy output
- **Heatmap / session replay interpretation** — how you'd feed Hotjar / Clarity outputs into AI to surface patterns
- **Competitive teardowns** — your AI-assisted workflow for analysing AG1, Ritual, Momentous, Huel checkout flows
- **Prompt library** — share 3–5 of your best CRO-specific prompts with notes on when you use each

We're not looking for a list of AI tools you've heard of. We want to see AI is genuinely embedded in how you work — and equally, that you have a clear point of view on where AI shouldn't replace human judgment in CRO.

---

## Part 5: Presentation & Communication (5%)

### What we're evaluating

- **Clarity** — well-organised, easy to follow, professionally presented
- **Commercial framing** — every observation tied to revenue, not aesthetics
- **Mathematical rigour** — sample sizes, sig thresholds, projected uplift all backed by maths, not vibes
- **Attention to detail** — typos, formatting, sloppy work will count against you. CRO is a precision discipline.

---

## Public Sources to Review

| Source | URL |
|--------|-----|
| IM8 Website | https://im8health.com |
| IM8 PDP example | https://im8health.com/products/daily-ultimate-essentials |
| Competitor: AG1 | https://drinkag1.com |
| Competitor: Ritual | https://ritual.com |
| Competitor: Momentous | https://livemomentous.com |
| Competitor: Huel | https://huel.com |
| Baymard Institute | https://baymard.com/research |
| CXL Institute | https://cxl.com/blog |

**Pro tip:** Go through IM8's purchase flow on **mobile** before you start. The majority of our traffic is mobile. Every test design should be mobile-first.

---

## What We're Evaluating

| Criteria | Weight |
|----------|--------|
| Funnel Audit & Drop-Off Diagnosis | 30% |
| Hypothesis Backlog (15+ ideas, ICE scored) | 25% |
| Three Production-Ready Test Briefs | 20% |
| AI-Native CRO Workflow | 20% |
| Presentation & Communication | 5% |

**Specifically, we're looking for:**

- Genuine experimentation discipline — sample sizes, significance, pre-registration, post-test rigour
- Mobile-first instincts
- Behavioural psychology fluency (Baymard, Cialdini, CXL principles applied to specific IM8 surfaces)
- Commercial framing — every recommendation tied to projected revenue impact
- Embedded AI workflow — not a bolt-on
- Builder mindset — designs systems while staying hands-on with the work

---

## What We're NOT Looking For

- Generic "5 CRO tips" copy-pasted from a blog post
- Theoretical frameworks without IM8-specific application
- "We changed the button colour and it felt better" thinking
- 50-page slide decks with no concrete test specs
- A list of AI tools without demonstrated usage (prompts, outputs, refinements)
- Work that could apply to any DTC brand — we want to see you understand IM8

---

## How to Submit

- **Format:** PDF or Google Slides (max 12 pages excluding appendix)
- **Option 1 — Careers Page:** Upload your submission on the job application form
- **Option 2 — Email:** Send to `recruitment@prenetics.com` with subject line:
  `Beat Claude — CRO Manager — [Your Name]`

**Please also include in your email:**
- A **Loom video** walking us through your audit and your top 3 test briefs
- Your **current salary** and **expected salary**

---

## Final Note

This challenge mirrors the audit-and-build sprint you'd run in your first 30 days at IM8. We designed it this way intentionally — we want to see how you think, how you measure, and whether you'd ship work that actually moves the needle.

Claude's baseline was generated with the same brief you're reading now. It's good. To advance, yours needs to be better.

**Ties don't advance. Good luck.**

---

*IM8 / Prenetics (NASDAQ: PRE)*
