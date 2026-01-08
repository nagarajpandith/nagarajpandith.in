# nagaraj pandith portfolio

minimalist portfolio built with astro. clean, fast, functional.

## features

- server-side rendered with astro for fast page loads
- google oauth authentication via supabase
- mdx-powered blog with view counter and authenticated comments
- digital garden for learning notes (flashcards + deep dives)
- movie recommendations with tmdb integration (305+ titles)
- guestbook with manual moderation
- dynamic rss feed and sitemap generation
- dark/light mode with coffee-toned aesthetics
- fully responsive mobile-first design
- all lowercase typography for consistency
- supabase-powered analytics and content moderation

## pages

- `/` - home with featured work and latest posts
- `/about` - work timeline, tech stack, achievements, community involvement
- `/work` - projects, designs, and photography (supabase storage integration)
- `/blog` - tech articles with floating toc
- `/blog/personal` - personal writings
- `/notes` - learning notes categorized by type
- `/tools` - software and hardware stack
- `/recommendations` - curated film and tv collection with mood-based filtering
- `/freelance` - services and pricing
- `/guestbook` - visitor messages with auth

## built with

- [astro](https://astro.build/) - static site framework
- [tailwind css v4](https://tailwindcss.com/) - styling via vite plugin
- [supabase](https://supabase.com/) - auth, database, storage
- [mdx](https://mdxjs.com/) - markdown with components
- [tmdb api](https://www.themoviedb.org/) - movie posters and metadata
- [dm sans](https://fonts.google.com/specimen/DM+Sans) - body typography
- [homemade apple](https://fonts.google.com/specimen/Homemade+Apple) - heading typography

## project structure

```
├── src/
│   ├── components/       # reusable astro components
│   ├── content/
│   │   ├── blog/        # mdx blog posts
│   │   └── notes/       # mdx learning notes
│   ├── layouts/         # page layouts
│   ├── pages/           # file-based routing
│   ├── styles/          # global css
│   └── utils/           # helper functions
├── public/              # static assets
└── scripts/             # build and import scripts
```

## setup

### prerequisites

- node.js 18+ or bun
- supabase account
- tmdb api key (for recommendations)
- google oauth credentials

### installation

```bash
bun install
```

### environment variables

create `.env`:

```env
PUBLIC_SUPABASE_URL=your_supabase_url
PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
PUBLIC_TMDB_API_KEY=your_tmdb_api_key
```

### database setup

run the sql migrations in `scripts/migrations.sql` via supabase dashboard.

### import movie recommendations

```bash
bun run scripts/import-movies.ts path/to/imdb-export.csv
```

note: use supabase service role key in the import script for admin operations.

### development

```bash
bun run dev
```

### production build

```bash
bun run build
bun run preview
```

## authentication

google oauth handled through supabase auth. users must sign in to:
- post guestbook entries
- comment on blog posts

all submissions require manual approval via supabase dashboard.

## content management

### adding blog posts

create mdx files in `src/content/blog/`:

```md
---
title: 'your post title'
desc: 'brief description'
publishedDate: 'dec 22, 2024'
coverImage: '/path/to/image.png'
tags: 'tag1, tag2, tag3'
isPersonal: false
---

your content here
```

### adding notes

create md files in `src/content/notes/`:

```md
---
title: 'topic name'
type: 'short' # or 'long'
updatedAt: 'dec 22, 2024'
---

your notes here
```

### moderating content

1. open supabase dashboard
2. navigate to table editor
3. find entries where `is_approved = false`
4. review and set `is_approved = true` for approved content

## deployment

optimized for deployment on vercel, netlify, or cloudflare pages.

```bash
bun run build
```

outputs static site to `dist/` directory.

## license

all rights reserved.

## contact

built by nagaraj pandith. reach out via the site's contact form or guestbook.