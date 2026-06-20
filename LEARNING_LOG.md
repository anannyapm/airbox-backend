# Learning Log

Tracks every concept, command, and file we learn together. Append-only — never delete entries.

---

## Lesson 1: Big Picture — What are we building?

**Date:** 2026-06-18
**Status:** ✅ Completed

### Concepts learned

- **NestJS** — Backend framework. Structures server code into modules, resolvers, services.
- **GraphQL** — API language. Flutter sends queries, gets exactly the data asked for.
- **PostgreSQL** — Relational database. Stores users, folders, files, shares, storage.
- **Docker** — Container platform. Runs PostgreSQL in isolation.
- **Docker image vs container** — Image = read-only template. Container = running instance.
- **Volumes** — Persistent storage that survives container restarts. `down -v` wipes it.
- **Data flow:** Flutter → GraphQL → Resolver → Service → TypeORM → PostgreSQL

### Key commands learned

- `docker compose up -d` — Start containers in background
- `docker compose down` — Stop containers (data persists)
- `docker compose down -v` — Stop containers + wipe volume

---

## Lesson 2: Scaffold Code Walkthrough

**Date:** 2026-06-18
**Status:** In progress
