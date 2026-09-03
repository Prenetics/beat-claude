# Beat Claude Challenge Brief
<!-- listing: title="Senior Media Buyer (Meta) — IM8"; difficulty="Hard" -->

> *Figures in this brief are illustrative, created for this exercise, and do not represent IM8's actual metrics. Publicly disclosed facts are genuine.*

## Senior Media Buyer (Meta) — IM8

**Company:** IM8 / Prenetics (NASDAQ: PRE)
**Role:** Senior Media Buyer — Paid Social (Meta), IM8
**Challenge Format:** One document, any format (PDF, Doc, or Slides), plus a Loom
**Estimated Effort:** ~3 hours
**Deadline:** as soon as possible — we review on a rolling basis, so earlier is better.

You may use any AI tools, including Claude — we care about the quality of your judgment, not whether you typed every word. Show your reasoning, not just conclusions.

---

## About This Challenge

This challenge tests the thing this role actually lives or dies on: can you run a large DTC Meta account by rules, structure, and evidence — rather than by feel — and can you spot problems in the data before they compound into a bad month?

**Claude (Anthropic's AI) has already completed this exact brief.** Its output is our baseline. To advance, you need to beat it. Ties don't advance.

---

## About IM8

IM8 is a next-generation health and longevity brand co-founded by David Beckham and Prenetics (NASDAQ: PRE). We ship to 43 countries on a subscription-led DTC model, with athlete partners including David Beckham, Giannis Antetokounmpo, Aryna Sabalenka, Oliver Bearman, and Inter Miami CF. Paid social is one of our biggest growth drivers — we run a large, always-on Meta account with thousands of live creatives — and how well that account is structured and governed directly moves the business. We are built on science, not story: our flagship Daily Ultimate Essentials carries 90+ active ingredients, backed by randomized controlled trials.

---

## The Challenge

Picture this: you've just been handed the keys to a large DTC Meta account — eight figures a year, thousands of live ads, real money moving every hour. Somewhere in this account, things are going wrong. ROAS is sliding, CPM is climbing at flat CTR, and nobody can tell you exactly why.

This is a fictional scenario, but it's built on the kind of problems that break real accounts at scale. Your job over the next three hours: show us you would (a) build an account that can't break this way, (b) run it under explicit rules rather than vibes, and (c) spot problems in the data before they compound into a bad month.

**Scenario assumptions *(all illustrative)*:**

- Account scale: roughly **$300K/day** in Meta spend across thousands of live ads.
- Target: blended new-customer CAC **under $200**, measured in Shopify (source of truth), full completed days only. Assume Meta attribution runs ~15% under Shopify.
- Three main prospecting "lanes" (distinct audience/angle groupings). Historical testing suggests each has a daily spend ceiling beyond which CPA degrades sharply: **Lane A ~$100K/day, Lane B ~$25K/day, Lane C ~$8K/day.**
- Creative supply: ~40–60 genuinely new concepts per month, plus iterations.

---

## Part 1 — Account build (40 points)

Design the account architecture you would run at this scale. Be specific enough that a junior buyer could implement it from your answer.

Cover, at minimum:

1. **Campaign structure.** How many campaigns, organised by what (lane, funnel stage, geo, objective)? Where do you use CBO vs ABO, and why? Where does testing live vs scaling?
2. **Ad set build.** How many ads per ad set, and what determines that number? What is your position on large shared ad sets (25–40 ads) given Meta gives you no cap, floor, or weighting on delivery within a set?
3. **Budget allocation and floors.** How do you guarantee a new concept actually gets spend rather than being starved by an incumbent winner? What minimum daily spend does a concept need before its results mean anything, and why?
4. **Bidding.** When do you run cost caps, when lowest-cost, when tROAS/value optimization? What is the failure mode of value optimization at low signal volume, and how would you detect it within 48 hours?
5. **Hygiene.** Naming conventions, exclusion audiences (what goes on prospecting, what must never), change logging, and how account state stays legible to someone who didn't make the changes.

---

## Part 2 — Rules of engagement (25 points)

Write your standing rules for this account as if they were going into an SOP. Each rule needs a threshold, a check cadence, and the action it triggers. Cover at least:

- **Kill rules.** At what ROAS/CPA and after how much spend does an ad die? A flat "<0.5 ROAS = kill" is on the table — defend it, refine it, or replace it. What spend floor must an ad clear before any read is valid?
- **Pause vs delete.** Which do you use and why? What happens to learning-phase progress in each case, and what does that imply for how you handle seasonal winners you'll want back?
- **Scaling rules.** What is your maximum daily budget increase on a performing ad set, and what happens to learning phase if you exceed it? (Our house ceiling is +18%/day — tell us whether you'd keep it and how you'd scale a winner from $5K/day to $40K/day under it.)
- **The pairing rule.** May a campaign receive a budget increase in the same week ads inside it are paused? Explain the mechanism behind your answer.
- **Cost caps.** Where you use them, how you set the cap relative to target CPA, and how you respond when a cost-capped campaign stops spending.

---

## Part 3 — Diagnosis (25 points)

Below is a Monday-morning snapshot of the account. Account-average CPM is $28. Identify every problem you see, rank the top five by daily dollar damage, and state the first action you'd take on each — today, not this quarter.

| # | Item | Data |
|---|---|---|
| 1 | Ad set "LaneA-Core-3" | 27 active ads. Ad 1 takes 82% of spend; the other 26 average $31/day each. Three of the 26 were logged as "creative failed" last week. |
| 2 | Campaign "REFRESH-DUP-July" | 14 ads, all exact clones of paused winners. CPM $61–79. ROAS 0.44. $9K/day. |
| 3 | Campaign "Creator-Value" | ACTIVE, tROAS bidding, $1,000/day budget. Total spend last 6 days: $2.15. |
| 4 | Campaign "LaneB-Main" | Budget +95% over the last 10 days. In the same window, 8 ads and 1 ad set inside it were paused. CPM up 41% vs its 7-day baseline. No log entries for either change. |
| 5 | Landing page "/offer-v3" | Receiving $45K/week. Click-to-purchase 0.09%. Nobody on the team can say who built the page. |
| 6 | Ad "Hook-17" | CTR 3.7% (account avg 1.4%). Being scaled on that basis. Click-to-buy 0.2%. |
| 7 | Prospecting campaign "LaneA-Broad" | Six stacked exclusion lists including all purchasers from the last 24 months (~600K people). |
| 8 | Slack message, 19:04 Monday | "Today's ROAS is 0.51 vs 0.85 yesterday — recommend we cut Lane A budgets 40% tonight." |
| 9 | Ad "UGC-Sarah-02" | ROAS 0.42 after $180 total spend over 2 days. |
| 10 | Ad "Static-Compare-08" | ROAS 0.45 after $6,400 total spend over 9 days. |

Items 9 and 10 both sit below the 0.5 kill line. Do you treat them identically? Why or why not?

---

## Part 4 — Your daily operating cadence (10 points)

You get 30 minutes each morning before any spend decision is made. List the questions you ask, in order, and what data answers each. For each question, name the failure class it is designed to catch and the pre-agreed trigger that turns the answer into action without a meeting.

*(We have our own answer to this. We're checking whether you converge on it independently.)*

---

## What We're Looking For

- You understand that at this scale, **allocation and structure fail before demand does** — efficiency is recovered by subtraction, not just more budget.
- You scale by **rules, thresholds, and logs** — not by feel.
- You can tell a **creative failure from a configuration failure.**
- You know what the platform's mechanics (learning phase, delivery concentration, attribution lag) actually do, versus folklore.
- A colleague could **reconstruct your decisions from your logs** a week later.

---

## What We're NOT Looking For

- Re-inflating budgets to hit a volume target with no new creative (volume is fixed by creative, not by media buying).
- Trusting Meta-attributed ROAS as the decision number with no Shopify cross-check.
- Deleting ads as routine hygiene.
- Killing or scaling anything on intraday data.
- Plans with no change-logging anywhere — decisions nobody else can trace.

---

## How to Submit

- **Careers page:** upload on the job application form (once live), **or**
- **Email:** `recruitment@prenetics.com`, subject `Beat Claude — Senior Media Buyer — [Your Name]`.
- Include a **Loom** walking us through your reasoning, plus your current and expected salary.

---

## Final Note

This mirrors the real job: building an account that can't break, running it under explicit rules, and catching problems in the data before they cost you a month. **Ties don't advance. Good luck.**

*IM8 Health is a brand of Prenetics (NASDAQ: PRE). Learn more at [im8health.com](https://im8health.com).*
