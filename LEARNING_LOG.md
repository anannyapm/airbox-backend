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
**Status:** ✅ Completed

### Concepts learned

- **NestJS entry point** — `main.ts` creates the app, applies validation pipes, starts the server on port 3000.
- **Root module (`AppModule`)** — Central wiring file that imports `ConfigModule`, `GraphQLModule`, `TypeOrmModule`, `HealthModule`, and `UsersModule`.
- **Module pattern** — Each feature (health, users) is a NestJS module that groups related code.
- **Resolver → Service → Repository** — Three-layer architecture: Resolver handles GraphQL, Service has business logic, Repository talks to the database via TypeORM.
- **Dependency Injection** — NestJS auto-creates and injects services/repositories via constructors (`private readonly x: X`).
- **Dual decorator pattern** — Entity files use both `@ObjectType/@Field` (GraphQL) and `@Entity/@Column` (TypeORM) on the same class.
- **TypeORM `@ManyToOne`/`@JoinColumn`** — Defines foreign key relationships between tables (user→folder, folder→file, etc.).
- **`synchronize: false`** — Schema changes are manual via `db/init.sql`, not auto-synced.
- **5 database tables** — `users`, `folders`, `files`, `file_shares`, `storage` — with UUID primary keys, timestamps, and indexes.
- **docker-compose services** — `postgres` (port 5432), `hasura` (port 8080), `nestjs` (port 3000).
- **Data flow:** Flutter → GraphQL query → Resolver → Service → TypeORM Repository → PostgreSQL → response flows back.

### Checkpoint status

- ✅ Can explain what NestJS, GraphQL, PostgreSQL, and Docker each do in this project.
- ✅ Can trace one request from the entry point through the module tree to the database and back.
- ✅ Can describe the schema: users, folders, files, shares, and storage tables.

### Key files learned

- `src/main.ts` — Bootstrap and server startup
- `src/app.module.ts` — Root module wiring
- `src/health/` — Simplest module example (no DB dependency)
- `src/users/` — Full Resolver → Service → Repository example
- `src/database/entities/*.entity.ts` — Data model with dual GraphQL + TypeORM decorators
- `db/init.sql` — Raw SQL table definitions
- `docker-compose.yml` — Container orchestration
- `Dockerfile` — NestJS container build
- `.env.example` — Required environment variables

---

## Lesson 3: Data Model & Schema Design

**Date:** 2026-07-09
**Status:** ✅ Completed

### Concepts learned

- **`parent_id` nullable on folders** — A root folder has no parent (`NULL`). Self-referencing FK lets folders nest arbitrarily deep.
- **`shared_with` is TEXT, not a UUID FK** — Intentional. Holds an email for a person who may not be registered yet. The share is claimed when they sign up. `shared_by` is a FK because the sharer is always a known user.
- **`storage` as a separate 1:1 table** — Denormalized for performance. `storage` is updated on every upload/delete; keeping it off `users` avoids write-lock contention on the user row. Conceptually usage stats vs user profile are different concerns.
- **Indexes** — Added on foreign keys and lookup columns (`email`, `link_token`, `owner_id`, etc.) to speed up the most common queries.

### Checkpoint status

- ✅ Can describe the schema: users, folders, files, shares, and storage tables and explain why key fields are shaped the way they are.

---

## Lesson 4: NestJS Fundamentals — Modules, Providers, DI, Resolvers

**Date:** 2026-07-19
**Status:** ✅ Completed

### Concepts learned

- **Module (`@Module`)** — Groups related code (resolver, service, entity). Imports what it needs, provides what it has.
- **Provider (`@Injectable`)** — A class NestJS can instantiate and inject. Services are the most common provider.
- **Dependency Injection** — NestJS reads constructor parameters, creates dependencies automatically, and injects them. No manual `new`.
- **Resolver vs Controller** — Resolver = GraphQL entry point (`@Query`). Controller = REST entry point (`@Get`). Same role, different protocol.
- **`@Args`** — Declares a GraphQL query argument. Syntax: `@Args('name', { type: () => String }) name: string`.
- **`IsNull()`** — TypeORM helper for SQL `IS NULL` queries.

### Key commands learned

- `npm run build` — Compiles the NestJS project

### Key files created

- `src/folders/folders.module.ts` — Module wiring with TypeORM import
- `src/folders/folders.service.ts` — Business logic: find root folders for an owner
- `src/folders/folders.resolver.ts` — GraphQL resolver: `rootFolders(ownerId)` query

### Checkpoint status

- ✅ Can explain what a module, provider, and resolver are in NestJS.
- ✅ Can build a new module from scratch following the pattern.
- ✅ Can write a service method that queries the database.
- ✅ Can wire a GraphQL resolver with typed arguments.

### Config & env concepts learned

- **`.env` file** — Holds secrets/env vars. Not committed to git.
- **`validateEnv()`** — Startup guard that crashes early if required vars are missing.
- **`ConfigModule.forRoot()`** — Loads `.env`, makes `ConfigService` available.
- **`ConfigService`** — Read env vars anywhere via DI: `configService.get('KEY', default)` or `getOrThrow('KEY')`.
- **`app.get(ConfigService)`** — How to access DI outside of classes (e.g., `main.ts`).
