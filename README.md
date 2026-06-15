# Dropbox Backend Workspace

This folder is the single home for all backend implementation, learning, and migration docs for the Flutter Dropbox clone.

## What lives here

- Backend rules and working agreements
- Practical learning roadmap
- Session state for resume-from-anywhere continuity
- Firebase to NestJS/GraphQL/PostgreSQL migration bridge
- Local backend runtime files such as `docker-compose.yml`

## How to use this workspace

1. Start with [`RULES.md`](./RULES.md).
2. Read [`SESSION_STATE.md`](./SESSION_STATE.md) to see the current learning position.
3. Follow [`ROADMAP.md`](./ROADMAP.md) for the day-by-day learning path.
4. Use [`BRIDGE_PLAN.md`](./BRIDGE_PLAN.md) when mapping the current Flutter app to the new backend.

## Working style

- Learn one concept, then implement one small practical step.
- Keep each step tied to the current app, not abstract examples.
- After every meaningful step, update `SESSION_STATE.md`.
- If you resume from another tool or machine, read `SESSION_STATE.md` first and continue from the `Next` section.

## Current backend stack target

- NestJS
- GraphQL
- PostgreSQL
- Docker / Docker Compose
- Cloudinary for file storage until the migration bridge says otherwise

## Resume rule

If you stop and come back later, do not restart from scratch. Open `SESSION_STATE.md` and continue from the next incomplete item.

