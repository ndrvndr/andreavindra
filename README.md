# Andre Avindra

My personal website and blog, built with **Next.js, TypeScript, Tailwind CSS, and Sanity**. It's a place to share my work, experiments, and writing about building for the web.

The site includes a project portfolio, gallery, guestbook, and contact form. The blog supports search and tag filters, a table of contents, comments powered by Giscus, and article view counts stored in Upstash Redis. Blog content is managed in Sanity Studio.

## Tech stack

- Next.js and React
- TypeScript and Tailwind CSS
- Sanity for blog content and Studio
- Upstash Redis for article views
- Giscus for comments
- Nodemailer for the contact form

## Getting started

To run the project locally, install [Bun](https://bun.sh/), clone the repository, and install its dependencies:

```bash
git clone https://github.com/ndrvndr/andreavindra.git
cd andreavindra
bun install
cp .env.example .env.local
```

Fill in the services you want to use in `.env.local`, then start the development server:

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000). Sanity Studio is available at `/studio`.

## Environment variables

Use [`.env.example`](./.env.example) as the complete variable list. Do not commit `.env.local` or share secret values.

| Variables                                                                                                                | Purpose                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, `NEXT_PUBLIC_SANITY_API_VERSION`                          | Connect the blog and Studio to Sanity. Without a project ID, the blog returns no posts.                                                                                            |
| `SANITY_REVALIDATE_SECRET`                                                                                               | Verify signed Sanity webhook requests to `/api/revalidate`.                                                                                                                        |
| `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN`                                                                     | Store article view counts. Without these, view counts fall back to zero.                                                                                                           |
| `GMAIL_USER`, `GMAIL_APP_PASSWORD`                                                                                       | Send messages from the contact form through Gmail.                                                                                                                                 |
| `NEXT_PUBLIC_GISCUS_REPO`, `NEXT_PUBLIC_GISCUS_REPO_ID`, `NEXT_PUBLIC_GISCUS_CATEGORY`, `NEXT_PUBLIC_GISCUS_CATEGORY_ID` | Configure article comments through Giscus.                                                                                                                                         |
| `METADATA_BASE_URL`                                                                                                      | Optional public origin for metadata and OG image URLs. When omitted, the site uses `https://andreavindra.is-a.dev`; set it only when testing another URL, such as an HTTPS tunnel. |

## Useful commands

```bash
bun run dev          # Start the development server
bun run build        # Create a production build
bun run start        # Serve the production build
bun run lint         # Run ESLint
bun run typecheck    # Check TypeScript
bun run test:blog    # Run blog tests
bun run typegen      # Regenerate Sanity schema and TypeScript types
```

## Deploy to Vercel

Import the GitHub repository into Vercel with the repository root (`./`) as the Root Directory and **Next.js** as the framework. Leave the Build Command, Output Directory, and Install Command on their defaults: Vercel detects `bun.lock` and the `build` script in `package.json`.

Add the needed environment variables from `.env.example` to the Vercel project, at least for **Production**. Local `.env.local` values are not uploaded automatically. You can omit `METADATA_BASE_URL` when deploying to `andreavindra.is-a.dev`. Deploy the production branch, then verify the blog, contact form, comments, and view counts.

To refresh cached blog content after a Sanity publish, update, or delete, configure a signed Sanity webhook that sends `POST` requests to `/api/revalidate`. Its secret must match `SANITY_REVALIDATE_SECRET` in Vercel. The endpoint accepts `post`, `tag`, and `category` documents.
