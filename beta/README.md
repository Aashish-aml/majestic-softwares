# MajesticSoftwares

Multi-page marketing site for MajesticSoftwares — **Next.js (App Router)** + HTML/CSS3.

## Pages

- **Home** — brand-first hero, approach, selected work, capabilities, CTA
- **About** — studio story, values, CTA
- **Work** — six representative portfolio projects
- **Services** — seven service offerings (slider on tablet/mobile)
- **Team** — eighteen member profiles with WebP portraits (slider on tablet/mobile)
- **Contact** — accessible dialog/modal with validated form

## Run locally

```bash
npm install
npm run dev
```

Open `http://127.0.0.1:5173/beta`.

The parent site also serves this export at `http://localhost:3000/beta`.

```bash
npm run build
npm run start
```

## Stack

- Next.js 15 App Router
- React 19
- Semantic HTML, CSS custom properties, responsive layout
- SEO: metadata API, Open Graph, `robots.js`, `sitemap.js`
- Images: WebP only under `public/images/`
