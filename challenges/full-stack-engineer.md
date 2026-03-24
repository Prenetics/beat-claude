# Beat Claude Challenge: Principal/Senior Full-Stack Engineer

**IM8 Health | Prenetics (NASDAQ: PRE)**
*Co-founded by David Beckham*

---

## The Challenge

We gave Claude this exact brief. It produced clean architecture diagrams, well-structured code, and technically sound design decisions.

**Your job is to beat it.**

Claude is excellent at generating boilerplate, following design patterns, and writing code that looks right. What it struggles with is making the hard trade-offs — knowing when to over-engineer for scale versus ship fast, choosing boring technology over exciting technology, and designing systems that are easy to debug at 3am when an order sync breaks and the warehouse is shipping wrong items.

This challenge is designed to find engineers who build systems that survive contact with reality.

---

## About IM8

IM8 is a premium nutritional supplement brand co-founded by **David Beckham**. Our flagship product — **Daily Ultimate Essentials** — delivers 92 clinically dosed nutrients in a single daily serving. NSF Certified for Sport, backed by a 12-week randomized controlled trial. Sold direct-to-consumer via im8health.com on a subscription model.

**Tech context:**
- Shopify storefront (im8health.com)
- Subscription-based DTC model (recurring orders, skip/pause/cancel flows)
- Multi-region operations (US, UK, HK, APAC)
- Growing fast — systems need to scale with the business, not ahead of it

---

## The Role

You will scale IM8's growth and internal systems. That means:

- **Shopify integrations** with downstream platforms (inventory, ERP/finance, logistics, CRM)
- **Backend services** and APIs that connect everything together
- **Cloud infrastructure** (AWS/GCP), CI/CD pipelines, observability
- **Tech stack:** Node.js, TypeScript, React, PostgreSQL, Kubernetes, Terraform

This is a **greenfield design exercise**. You don't need access to IM8's codebase. Shopify's API documentation is public. Design like you're building this from scratch.

---

## Challenge Structure

| Part | Focus | Weight |
|------|-------|--------|
| Part 1 | System Design | **40%** |
| Part 2 | Implementation | **30%** |
| Part 3 | AI Integration | **20%** |
| Part 4 | Presentation | **10%** |

**Total time budget:** 5-6 hours (do not exceed 8 hours)

---

## Part 1: System Design (40%)

### Scenario

IM8 runs on Shopify. Every order, subscription event, inventory change, and customer interaction needs to flow to downstream systems. Today, these integrations are fragile, partially manual, and break when volume spikes (e.g., a Beckham Instagram post drives 10x normal traffic).

You're tasked with designing the integration architecture between **Shopify** and **4 downstream systems**:

1. **Inventory Management System** — real-time stock levels, multi-warehouse (US, UK, HK), reorder triggers
2. **Finance / ERP** — order revenue, refunds, subscription billing, tax reporting, multi-currency
3. **Logistics / Fulfillment** — order routing by region, shipment tracking, returns processing
4. **CRM** — customer profiles, subscription lifecycle, support history, segmentation

### What We Need From You

**A. Architecture Diagram**

Draw the integration architecture. This should include:
- All system boundaries and how they connect
- Data flow direction and what data moves between systems
- Where Shopify sits and how it communicates outward
- Your middleware / integration layer design
- Databases, queues, caches — whatever you need

Use any diagramming tool (Excalidraw, draw.io, Mermaid, ASCII art — we don't care about polish, we care about clarity).

**B. Event Handling Strategy**

For each integration, define your approach:

| Integration | Trigger Method | Why This Approach | Latency Requirement | Failure Mode |
|-------------|---------------|-------------------|--------------------|--------------|

Address the trade-offs between:
- **Webhooks** (Shopify pushes events) — fast, but what about missed webhooks?
- **Polling** (you pull from Shopify) — reliable, but latency and rate limits
- **Event queues** (pub/sub, message brokers) — decoupled, but added complexity

When would you use each? Why?

**C. Error Handling & Retry Logic**

This is where most integrations fail. Address:
- What happens when a webhook delivery fails?
- How do you handle partial failures (e.g., order syncs to inventory but fails on finance)?
- What's your retry strategy? (exponential backoff, dead letter queues, manual intervention triggers)
- How do you detect silent failures — when a sync stops working but nothing throws an error?

**D. Idempotency**

Shopify can send the same webhook multiple times. Your downstream systems shouldn't process the same event twice. Explain:
- How do you ensure idempotent processing across all 4 integrations?
- What's your idempotency key strategy?
- How do you handle out-of-order events?

**E. Scalability & Multi-Region**

IM8 operates in US, UK, HK, and APAC:
- How does your architecture handle multi-region data flow?
- What data needs to be region-specific vs. global?
- How do you handle multi-currency in the finance integration?
- What happens when a Beckham post drives 10x normal order volume in 30 minutes?

---

## Part 2: Implementation (30%)

### What We Need From You

Pick **ONE** of the 4 integrations from Part 1 and implement the core service. Node.js / TypeScript preferred, but use whatever you're strongest in.

**A. API Design**

- Define the API contract (REST or GraphQL — justify your choice)
- Request/response schemas with TypeScript types
- Authentication and authorization approach
- Rate limiting strategy
- API versioning approach

**B. Core Service Code**

Write **production-ready code** for the integration service. This means:
- Not a prototype or pseudocode — real, runnable code
- Proper error handling (not just try/catch with console.log)
- TypeScript types/interfaces for all data models
- Configuration management (environment variables, not hardcoded values)
- Logging that would actually help you debug at 3am

Include:
- Webhook receiver (or polling service) for incoming Shopify events
- Data transformation layer (Shopify schema -> your downstream schema)
- Outbound integration to the downstream system
- Idempotency implementation
- Retry logic

**C. Testing Approach**

- What do you test and how?
- Unit tests for critical business logic (include at least 2-3 actual test cases)
- How do you integration test against Shopify's API without hitting production?
- How do you test failure scenarios (network timeouts, malformed payloads, duplicate events)?

**D. Deployment Strategy**

- How does this service get deployed? (Docker, Kubernetes, serverless — justify your choice)
- CI/CD pipeline design — what runs on every PR? What runs on merge to main?
- How do you do zero-downtime deployments for a service that's processing webhooks?
- Rollback strategy — how do you safely roll back when a deployment breaks the sync?
- Monitoring and alerting — what metrics do you track? What triggers a page?

---

## Part 3: AI Integration (20%)

How would you use AI/LLMs in IM8's tech stack?

**This section is NOT theoretical.** We want specific use cases with implementation approaches.

**A. At Least 3 Concrete Use Cases**

For each:
- What problem does it solve?
- What's the technical implementation? (which model, how it's called, what data it needs, where it fits in the architecture)
- What's the expected business impact?
- What are the risks and how do you mitigate them?

**Examples of the kind of specificity we're looking for** (don't just use these — come up with your own):
- Using LLMs to classify and route customer support tickets based on order data + message content
- AI-powered anomaly detection on order/inventory sync data to catch integration failures
- Using embeddings to power semantic search across product FAQs for the CX team
- LLM-assisted code review for integration services

**B. AI in Your Workflow**

**Bonus points:** Show us how you used AI (Claude, Copilot, ChatGPT, or anything else) to complete Part 1 or Part 2 of this challenge.
- What did you use AI for?
- What did it get right? What did you have to fix?
- Where was it most/least useful?

We're not penalizing AI use — we're evaluating whether you can use it effectively. An engineer who can 10x their output with AI and knows when to trust it vs. override it is exactly who we're looking for.

---

## Part 4: Presentation (10%)

**Code & Documentation Quality**

Your submission is a signal of how you work. We're evaluating:
- Is the code well-organized and readable?
- Are your design decisions documented and justified?
- Could another engineer pick up your code and understand it without a walkthrough?
- Is the architecture diagram clear enough to present to a non-technical stakeholder?
- README quality — if this were a real repo, could someone clone it and get it running?

---

## What We're Evaluating

- **Systems thinking** — Can you design an architecture that handles the messy reality of e-commerce integrations?
- **Engineering judgment** — Do you know when to keep it simple vs. when complexity is warranted?
- **Production mindset** — Error handling, observability, deployment strategy. Not just happy-path code.
- **Trade-off articulation** — Every design decision has trade-offs. Can you name them?
- **Code quality** — Clean, typed, tested, documented. We're reading your code like we'd review a PR.
- **Pragmatism** — We're a growing startup. Over-engineering is as bad as under-engineering. Build what we need now with a clear path to what we'll need in 12 months.

## What We're NOT Looking For

- Textbook system design answers that could apply to any e-commerce company
- Over-engineered microservice architectures for a team of our size
- Code that compiles but nobody would want to maintain
- "Use Kafka for everything" without justifying why message queuing complexity is warranted
- Ignoring Shopify's actual API constraints and rate limits (read their docs)
- Submissions that are clearly AI-generated end-to-end without engineering judgment applied — Claude already did that, and you need to beat it
- Prototypes or pseudocode presented as "production-ready"

---

## Technical Resources

All publicly available — no internal access needed:
- [Shopify Admin API (REST)](https://shopify.dev/docs/api/admin-rest)
- [Shopify Admin API (GraphQL)](https://shopify.dev/docs/api/admin-graphql)
- [Shopify Webhooks](https://shopify.dev/docs/apps/build/webhooks)
- [Shopify Subscription APIs](https://shopify.dev/docs/apps/build/purchase-options/subscriptions)
- Any cloud provider documentation (AWS, GCP, Azure)
- Any open-source libraries you'd use in production

---

## Submission Instructions

### Format
- **Design document:** PDF or Google Doc (Parts 1, 3, 4)
- **Code:** GitHub repository (public or private — if private, grant access to hr.ops@prenetics.com) OR zip file
- Include a README with setup instructions
- Maximum 10 pages for the design document (excluding architecture diagrams and code)

### How Claude's Baseline Was Generated
Claude was given this exact brief and produced a response under the same constraints. Its architecture, code, and design decisions are our benchmark. **Ties don't advance.**

### Deadline
Submit within **7 calendar days** of receiving this brief.

### Apply Here
**Apply & upload your submission:** [careers.prenetics.com — Full-Stack Engineer](https://careers.prenetics.com/jobs/7100069-principal-senior-full-stack-engineer-backend-infrastructure-ai/applications/new)

Upload your Beat Claude submission using the **file upload field** on the application form.


---

*IM8 Health is a brand of Prenetics (NASDAQ: PRE). Learn more at [im8health.com](https://im8health.com).*
