# Campaign Website V2

Next.js demo site for Carmen Morales for Assembly.

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## GitHub Pages Demo

The project is configured for static export. The GitHub Actions workflow builds
with `GITHUB_PAGES=true`, which sets the base path to `/Campaign-Website-V2`.

In GitHub, set **Settings -> Pages -> Build and deployment -> Source** to
**GitHub Actions**, then push `main`.

## Vercel and Supabase Preparation

The app includes Supabase browser/server client helpers in `src/lib/supabase`.
When the campaign is ready, add these environment variables in Vercel:

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=
```

Do not expose service-role or secret keys in `NEXT_PUBLIC_*` variables.
