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

- [ ] Replace placeholder photography (hero building graphic, deliverable card icons, project
      gallery tiles) with real project/facility photos.
- [ ] Replace stat/testimonial placeholders in `Home.jsx` with verified figures (commissioning
      turnaround, SLA coverage %, safety record, etc.) — these get fact-checked by facility and
      procurement teams before shortlisting.
- [ ] Wire the quote forms (`Home.jsx`, `Services.jsx`) to a real backend, form service (e.g.
      Formspree, a serverless function), or CRM — they currently only show a local success state.
- [ ] Fill in real content for `Privacy Policy`, `Terms`, and `Accessibility` in `LegalPage.jsx`
      usages, or split them into their own files if the content grows.
- [ ] Add real `favicon.png` and `og-image.jpg` to `public/`.
- [ ] Update contact details, email, and phone numbers in `Footer.jsx`/`Services.jsx`.
- [ ] Consider adding an "Accreditations & Safety" section (TR capacity portfolio, PCAB
      license, safety certifications) — this is what your target buyers (property developers,
      mall operators, data center facilities teams) specifically vet before shortlisting.
- [ ] Run `npm run build` and click through every route on a real mobile device before deploy.

## Tech stack

- **React 18** + **React Router 6** — routing/SPA
- **Vite** — build tool and dev server
- **Tailwind CSS** — styling
- **lucide-react** — icon set
- **recharts** — charts (commissioning success trend, service mix, lead times)
