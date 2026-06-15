# Backend Learning Roadmap

This roadmap is optimized for learning the stack in about one week while staying tied to the actual Dropbox clone.

## Day 1: Workspace and mental model

- Understand the backend goals of the project.
- Review the current app flow and identify backend responsibilities.
- Learn the basic NestJS project structure.
- Learn how Docker Compose fits local development.

Checkpoint:
- You can explain what NestJS, GraphQL, PostgreSQL, and Docker each do in this project.

## Day 2: Data model and schema design

- Design the first PostgreSQL tables for users, folders, files, and shares.
- Map current Firebase collections to relational tables.
- Decide which fields belong in the database versus storage metadata.

Checkpoint:
- You can describe the new schema from the app’s current feature set.

## Day 3: NestJS fundamentals

- Learn modules, controllers, providers, and dependency injection.
- Build one small module end to end.
- Wire configuration and environment variables.

Checkpoint:
- You can explain the role of a module, service, and controller/provider in NestJS.

## Day 4: GraphQL fundamentals

- Define GraphQL types, inputs, queries, and mutations.
- Connect a resolver to a service.
- Understand how GraphQL differs from REST in this project.

Checkpoint:
- You can trace one request from Flutter to GraphQL to service to database.

## Day 5: Authentication bridge

- Design auth flow for the backend.
- Learn how JWT-based auth fits the app.
- Plan the migration path from Firebase Auth to backend auth.

Checkpoint:
- You can explain the auth decision and how the app will authenticate against the backend.

## Day 6: Files and folders bridge

- Map file and folder operations to backend APIs.
- Plan how metadata and storage handling will work.
- Decide what stays in Cloudinary during the bridge.

Checkpoint:
- You can explain how upload, rename, delete, list, and share operations will work end to end.

## Day 7: Integration and review

- Review the full backend slice.
- Update migration notes.
- Identify remaining gaps before deeper migration.

Checkpoint:
- You can summarize the backend architecture and the next migration phase without reading code.

## Learning rule

Do not move to the next day until the current day’s checkpoint is clear.

