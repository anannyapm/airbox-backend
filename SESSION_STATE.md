# Session State

This file is the backend handoff point. Update it after each meaningful step so work can continue from another tool or machine.

## Current status

- **Phase:** Day 3 — NestJS fundamentals
- **Learning mode:** Interactive (hands-on, student-driven)
- **Focus:** Core stack plus migration bridge

## Completed

- Created backend workspace docs and rules.
- Added the initial NestJS/GraphQL/PostgreSQL scaffold.
- Installed dependencies and verified the project builds.
- Day 1: Big picture — NestJS, GraphQL, PostgreSQL, Docker explained.
- Day 1: Scaffold code walkthrough — module pattern, resolver→service→repository, entities, data flow.
- Day 1: App runs manually; `health` + `users` GraphQL queries verified by student.
- Day 2: Data model — 5 tables (users, folders, files, file_shares, storage) understood; schema design checkpoint cleared.

## In progress

- (none)

## Completed

- Day 3: NestJS Modules, Providers/DI, Controllers vs Resolvers explained.
- Day 3 Task: Built Folders module end to end (student wrote all files):
  - `folders.module.ts` — module wiring
  - `folders.service.ts` — `findRootFolders()` query
  - `folders.resolver.ts` — `rootFolders` GraphQL query
  - Registered in `AppModule`
  - Build verified ✅

## Next

1. Concept: Configuration and environment variables (`ConfigModule`, `env.validation`).
2. Integration test: Run the app with Docker and verify `rootFolders` query via GraphQL playground.

## Learning log

See `LEARNING_LOG.md` for full concept-by-concept tracking.

## Open questions

- Which backend feature should be implemented first: auth, files, folders, or sharing?
- Should the first learning slice stay read-only, or include a create mutation?
- What should remain on Firebase during the bridge, if anything?

## Notes

- Use this file as the source of truth when resuming.
- Keep updates short and concrete.
