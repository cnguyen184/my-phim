# Netflix UI Clone — Level 1 Starter

This is a starter Next.js + TypeScript + Tailwind project to build a Netflix-like UI and fetch movie data from TMDB.

## Features
- Homepage with banner and movie rows
- Movie detail page
- Trailer modal (YouTube embed)
- Responsive layout

## Setup
1. Install dependencies:
```bash
cd netflix-level1-starter
npm install
```

2. Add TMDB API key:
Create a file `.env.local` at the project root:
```
TMDB_API_KEY=your_tmdb_api_key_here
NEXT_PUBLIC_TMDB_BASE_URL=https://api.themoviedb.org/3
```

3. Run dev server:
```bash
npm run dev
```

## Notes
- This starter uses the **pages** router for simplicity.
- Replace `your_tmdb_api_key_here` with a TMDB key (https://www.themoviedb.org/documentation/api).
