# PAGS Website

Corporate website for **Pacific Airconditioning and General Services, Inc.**
Built with React 18, Vite, Tailwind CSS, and React Router. Target domain: `https://www.pagsinc.com/`.

## Project structure

```
pags-website/
├── index.html                 # HTML entry point + SEO meta tags
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── vercel.json                 # SPA rewrite rule (Vercel)
├── public/
│   ├── _redirects              # SPA rewrite rule (Netlify)
│   ├── .htaccess                # SPA rewrite rule (Apache / cPanel / shared hosting)
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── favicon.png             # ADD: replace with real favicon
│   └── og-image.jpg            # ADD: replace with real social share image
└── src/
    ├── main.jsx                 # React root, wraps App in BrowserRouter
    ├── App.jsx                  # Route definitions + shared Navbar/Footer
    ├── index.css                # Tailwind directives
    ├── lib/
    │   └── theme.js              # Shared color tokens + nav link config
    ├── components/
    │   ├── Navbar.jsx             # Sticky nav, active-route highlighting, mobile menu
    │   ├── Footer.jsx              # Shared footer, per-page tagline via prop
    │   └── ScrollToTop.jsx          # Resets scroll position on route change
    └── pages/
        ├── Home.jsx                # / — hero, services, deliverables, stats, testimonials, quote form
        ├── About.jsx                # /about — history, founder, mission/vision, values
        ├── Services.jsx              # /services — service directory, charts, quote form
        ├── Portfolio.jsx              # /portfolio — filterable project gallery
        ├── Careers.jsx                 # /careers — job openings + application form
        ├── LegalPage.jsx              # Shared placeholder for Privacy/Terms/Accessibility
        └── NotFound.jsx                # 404 page
```

## Getting started (local development)

Requires Node.js 18+ and npm.

```bash
npm install
npm run dev
```

This starts a dev server at `http://localhost:5173` with hot reload.

## Building for production

```bash
npm run build
```

Outputs a static, production-ready site to `dist/`. Preview it locally with:

```bash
npm run preview
```

## Deploying to pagsinc.com

This is a static single-page app (SPA) — after `npm run build`, the entire site is just the
contents of `dist/`. How you deploy depends on where the domain is currently hosted:

### Option A — Vercel or Netlify (recommended, easiest)
1. Push this repo to GitHub/GitLab.
2. Import the repo in Vercel or Netlify.
3. Build command: `npm run build` — Output directory: `dist`.
4. Point the `pagsinc.com` domain's DNS (A/CNAME records) at the new host, or add it as a
   custom domain in the platform's dashboard.
5. `vercel.json` and `public/_redirects` are already included so client-side routes
   (`/about`, `/services`, `/portfolio`) don't 404 on refresh.

### Option B — Existing shared/cPanel hosting
1. Run `npm run build` locally.
2. Upload the **contents** of `dist/` (not the folder itself) to `public_html/` (or wherever
   the current site's document root is) via FTP/SFTP or the hosting file manager.
3. `public/.htaccess` is already bundled into `dist/` — it rewrites unknown paths to
   `index.html` so routes work with Apache. If the host uses Nginx instead, ask the host to
   add:
   ```nginx
   location / {
     try_files $uri $uri/ /index.html;
   }
   ```
4. Keep a backup of whatever is live now before overwriting it.

### Option C — Static hosting via S3/Cloud storage + CDN
Upload the `dist/` contents to the bucket, set `index.html` as both the index and 404/error
document (this is what makes client-side routing work), and point the CDN/domain at it.

## Before going live — checklist

- [ ] Replace placeholder photography (hero building graphic, service icons) with real
      facility and project photos — the live site has real photos of chilled water systems,
      ducting works, etc. that could be reused/re-shot.
- [x] ~~Replace stat/testimonial placeholders~~ — done. Fabricated stats, testimonials, and
      named project case studies have been removed since they weren't sourced from the real
      site. Content now reflects verified facts from pagsinc.com (see `src/lib/companyData.js`).
- [ ] Add real named project case studies to `Portfolio.jsx` (client, location, scope, outcome)
      once available — the live site currently only lists 6 sector categories, no individual
      case studies, so procurement teams have nothing concrete to vet yet.
- [ ] Wire the quote form (`Home.jsx`) to a real backend, form service (e.g. Formspree, a
      serverless function), or CRM — it currently only shows a local success state.
- [ ] Fill in real content for `Privacy Policy`, `Terms`, and `Accessibility` in `LegalPage.jsx`
      usages.
- [ ] Add real `favicon.png` and `og-image.jpg` to `public/` (don't hotlink the live site's CDN
      images — host your own copies).
- [ ] **Confirm the founding year** — the live homepage says 1996, the About page says 1997.
      `src/lib/companyData.js` currently uses 1996; update `COMPANY.foundedYear` once confirmed.
- [x] ~~Consider adding a `/careers` page~~ — done. Real job openings and application form
      added in `Careers.jsx`, sourced from pagsinc.com/careers.
- [ ] Consider adding a dedicated `/contact` page — the live site has one separate from the
      homepage quote form; this rebuild currently routes "Contact" nav clicks to the homepage
      quote form instead.
- [ ] Wire the Careers application form (`Careers.jsx`) to a real backend — like the quote
      form, it currently only shows a local success state and doesn't actually send the
      resume/details anywhere.
- [ ] Consider adding an "Accreditations & Safety" section (PCAB license, safety certifications,
      TR capacity) — this is what property developers, mall operators, and data center
      facilities teams specifically vet before shortlisting a contractor.
- [ ] Run `npm run build` and click through every route on a real mobile device before deploy.

## Content sourcing

All factual content (founder, leadership team, service categories, project sectors, contact
info, vision/mission, core values) was sourced from `https://www.pagsinc.com` and is centralized
in `src/lib/companyData.js`. If the live site's content changes, update that file rather than
editing individual pages — every page imports from it.

## Tech stack

- **React 18** + **React Router 6** — routing/SPA
- **Vite** — build tool and dev server
- **Tailwind CSS** — styling
- **lucide-react** — icon set
