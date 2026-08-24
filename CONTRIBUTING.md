# Adding a New Beat Claude Challenge

Every challenge in `challenges/` must follow the **canonical structure** below. This guarantees candidates have a consistent experience and never miss critical information (how to apply, what we're filtering for, where to send the work).

The gold-standard reference files are `challenges/head-of-social.md` and `challenges/head-of-content.md` — when in doubt, copy their structure exactly.

---

## Canonical Section Order (mandatory)

Every challenge MUST contain these sections in this order:

```markdown
# Beat Claude Challenge Brief

## [Role Title] — IM8
[metadata block — Company, Role, Format, Effort, Page Limit]

---

## About This Challenge
[2–3 sentences explaining what this challenge tests + the "Claude has already
done this brief, beat it, ties don't advance" framing.]

---

## About IM8
[The IM8/Prenetics intro + athlete roster + brand positioning. Keep updated
as the brand evolves — currently: $100M ARR, 31 countries, full athlete roster.]

---

## [How to Apply — optional, only for roles where the CEO wants
##  specific application artifacts inline. Defaults to a single "How to Submit"
##  section at the end if no special pre-work needed.]

---

## The Challenge
[The scenario the candidate is dropped into. Should include real-ish numbers,
a clear CEO mandate, and the constraints they have to operate within.]

---

## Part 1 — [Name] ([weight]%)
## Part 2 — [Name] ([weight]%)
## Part 3 — [Name] ([weight]%)
## Part 4 — [Name] ([weight]%)
## Part 5 — [Name] ([weight]%, only when needed)

[Weights must sum to 100%. Each part includes:
 - "What to do" — the prompt
 - "Your answer must cover" — bulleted requirements
 - Role-specific angles or considerations
]

---

## What We're Looking For
[Bulleted list of strategic/quality signals — what makes an answer great.]

---

## What We're NOT Looking For
[Bulleted list of failure modes — what gets scored down. This is critical;
candidates need to know what NOT to do.]

---

## How to Submit
- **Format:** PDF or Google Doc with view access (max [N] pages)
- **Option 1 — Careers Page:** Upload via the [job application form](https://careers.prenetics.com/jobs/[JOB-ID-SLUG]/applications/new)
- **Option 2 — Email:** Send to `recruitment@prenetics.com` with subject:
  `Beat Claude — [Role Title] — [Your Name]`

**Please also include in your email:**
- A **Loom video** walking us through your thinking and key decisions
- Your **current salary** and **expected salary**

**Deadline:** as soon as possible — we review on a rolling basis, so earlier is better.

---

## Final Note
[2–3 sentences mirroring the actual on-the-job work. End with:
"Claude's baseline was generated with the same brief you're reading now.
It's good. To advance, yours needs to be better.
Ties don't advance. Good luck."]

---

*IM8 Health is a brand of Prenetics (NASDAQ: PRE). Learn more at [im8health.com](https://im8health.com).*
```

---

## Update Checklist When Adding a New Challenge

When you add `challenges/[new-role].md`, you must also:

- [ ] Add a hidden listing marker near the top of the brief so it appears in the README table:
      `<!-- listing: title="Role Name — IM8"; difficulty="Medium|Hard" -->`
      (The **Open Challenges** table in `README.md` is auto-generated from `challenges/*.md` by
      `scripts/gen_challenges_table.py` — you do NOT edit the table by hand. Archiving a challenge, i.e.
      moving its file into `challenges/archive/`, removes it from the table automatically.)
- [ ] Create the corresponding private baseline doc in `Felice-Claude/baselines/[role]-baseline.md` (rubric + Claude's baseline answer, scored)
- [ ] Add a tab to the Beat Claude Baselines Google Sheet so the auto-scorer can find it (tab name must match the Teamtailor job title, or add a `BASELINE_TAB_OVERRIDES` entry in `Felice-Claude/scripts/beat_claude_scorer.py`)
- [ ] Add a keyword route in `Felice-Claude/scorer/beat_claude_scorer.py` (in `ROLE_KEYWORDS`)
- [ ] Add 5 Co-Pilot screening criteria to the Teamtailor job posting (each prompt ≤ 150 chars)
- [ ] Confirm the Teamtailor pipeline has all 7 Clara stages (Inbox → Beat Claude → AI Phone Screen → Reviewing → Interview → Offered → Hired)

---

## When in doubt

Diff against `challenges/head-of-social.md`. It is the canonical reference.
