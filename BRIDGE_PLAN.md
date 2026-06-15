# Firebase to Backend Bridge Plan

This document maps the current Flutter app to the target NestJS + GraphQL + PostgreSQL backend.

## Current responsibilities

- Firebase Auth handles sign-in and session management.
- Firestore stores users, folders, files, and share metadata.
- Cloudinary handles file storage and delivery.

## Target responsibilities

- NestJS handles application business logic and auth flow.
- GraphQL exposes queries and mutations to the Flutter app.
- PostgreSQL stores structured app data.
- Cloudinary remains the file storage layer until we intentionally replace it.

## Migration order

1. Model the current features in PostgreSQL.
2. Build a minimal NestJS backend with one vertical slice.
3. Expose the slice through GraphQL.
4. Connect Flutter to the new endpoint for that slice.
5. Repeat feature by feature until the app no longer depends on Firebase for that area.

## Suggested bridge sequence

- Auth
- User profile
- Folder listing and CRUD
- File metadata
- Sharing
- Storage tracking

## Rule for the bridge

Do not migrate a feature until the backend replacement for that feature can be explained, tested, and resumed from documentation alone.

