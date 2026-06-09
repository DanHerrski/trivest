# Keystone Capital — A Proposal from Dan Herr

A personal pitch site presenting Dan Herr's proposal to join Keystone Capital, covering direct deal sourcing, brand-building, and AI-native origination at scale.

**Live site:** [keystonelovesdan.com](https://keystonelovesdan.com)

## Tech Stack

- **React 19** with TypeScript
- **TanStack Router** for client-side routing
- **Tailwind CSS v4** with custom Keystone-branded design tokens
- **Vite** for bundling and dev server
- **Bun** as the package manager

## Getting Started

```bash
bun install
bun run dev
```

The dev server starts at `http://localhost:5173`.

## Building for Production

```bash
bun run build
```

Static output is written to `dist/`.

## Deployment

The site deploys automatically to GitHub Pages on every push to `main` via the workflow in `.github/workflows/deploy.yml`.

### Custom Domain Setup

The `public/CNAME` file is configured for `keystonelovesdan.com`. To connect the domain:

1. In your DNS provider, add **one** of the following:
   - A `CNAME` record: `keystonelovesdan.com` → `danherrski.github.io`
   - Or four `A` records pointing to GitHub Pages IPs:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
2. In the repo's **Settings → Pages**, set the custom domain to `keystonelovesdan.com` and enable "Enforce HTTPS."

## Project Structure

```
src/
  routes/         # TanStack Router file-based routes
    __root.tsx    # Root layout with error/404 handling
    index.tsx     # Main pitch page
  components/     # Shared React components
  assets/         # Images (hero, portrait, textures)
  styles.css      # Tailwind config + custom theme
public/
  CNAME           # GitHub Pages custom domain
  404.html        # SPA fallback for client-side routing
```

## Linting & Formatting

```bash
bun run lint
bun run format
```
