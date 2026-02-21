## MyManifest (project: zenita)

Personal life dashboard for insight into your life, with the first version
focused on **health** and **documents**.

### Stack choices (MVP)

- **Framework**: Next.js (App Router) with TypeScript.
- **Styling**: Tailwind CSS (custom design system on top of Tailwind, no external UI lib in MVP).
- **Database**: PostgreSQL via **Prisma** (e.g. Supabase, Railway or your own Postgres).
- **Auth**: **NextAuth.js** with email + password (Credentials) as the base.
- **Files**: Object storage (S3-compatible, e.g. Supabase Storage) for documents.

These choices form the basis for the health and documents modules.
