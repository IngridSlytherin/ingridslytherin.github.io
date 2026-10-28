
# Ingrid Padilha — Portfolio

A single-page portfolio for Ingrid Padilha, a full-stack developer based in São Paulo, Brazil. It is built with React, TypeScript, Vite and Tailwind CSS, with static deployment to GitHub Pages.

## Requirements

- Node.js 24 or later
- npm

## Run locally

```sh
npm ci
npm run dev
```

Vite prints the local development URL in the terminal.

## Production build

```sh
npm run build
npm run preview
```

The static production site is generated in `dist/`.

## Content and assets

Portfolio copy and project, experience and skills data live in `src/data/content.ts`.

Add the following files before publishing:

- `public/images/profile.jpg`
- `public/images/big-tiny-heroes.png`
- `public/images/big-tiny-heroes-site.png` (optional website screenshot)
- `public/images/ecommerce.png`
- `public/images/framework.png`
- `public/images/mini-seller.png`
- `public/images/price-scrapper.png`
- `public/images/og.png`
- `public/resume-ingrid-padilha.pdf`

Project cards and the profile photo have visual fallbacks if their images are unavailable. The resume button continues to point to the listed PDF path.

## Deploy to GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds and deploys the site with the official GitHub Pages actions whenever code is pushed to `main`. It can also be started manually from the Actions tab.

In the repository settings, open **Settings → Pages** and select **GitHub Actions** as the build and deployment source. The Vite base path is `/`, as required for this user site at `https://ingridslytherin.github.io/`.
