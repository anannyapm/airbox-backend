# Backend Learning Rules

These rules define how backend work in this workspace should be planned, learned, and implemented.

## Core principles

- Prefer practical learning over theory-only study.
- Keep the current Flutter app as the source of truth for product behavior.
- Build the backend incrementally so each step can be understood and verified.
- Do not jump to full migration before the bridge layer is clear.

## Working rules

1. Read the current state before changing anything.
2. Make one narrow change at a time.
3. Prefer small, testable backend slices:
   - schema
   - resolver
   - service
   - Docker wiring
   - Flutter integration
4. Keep docs updated whenever behavior changes.
5. Keep learning notes practical:
   - what the concept is
   - why it exists
   - where it appears in this project
   - how to verify it
6. If a decision is not yet known, record it in `SESSION_STATE.md` instead of guessing.

## Interactive training format

- Every topic should end with a concrete task.
- Every task should end with a short verification check.
- When a concept is unclear, pause and write the question down.
- After finishing a topic, update:
  - what was learned
  - what was implemented
  - what remains open

## Backend implementation rules

- Keep NestJS concerns inside backend modules.
- Keep GraphQL types, resolvers, and services explicit and easy to trace.
- Keep PostgreSQL schema changes documented before or alongside implementation.
- Use Docker Compose as the default local runtime.
- Avoid mixing backend learning notes into Flutter feature docs.

## Resume protocol

When resuming from another tool or machine:

1. Open `SESSION_STATE.md`.
2. Read the latest completed checkpoint.
3. Continue from the next `Next` item.
4. Update the file again when you finish.

