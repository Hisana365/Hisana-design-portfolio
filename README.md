# Hisana A A | Graphic Designer Portfolio

Suggested GitHub repository name: `hisana-design-portfolio`

## Overview
A one-page portfolio for a Dubai-based graphic designer (print, branding, campaign creatives). The look borrows from print production: crop marks and a CMYK colour strip in the hero, with a light and dark theme that follows the visitor's system setting. All content comes from the résumé and LinkedIn profile; no figures or achievements were invented.

## Stack
Next.js 14 (App Router), React 18, Tailwind CSS 3. No API keys or environment variables.

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000. Use `npm run build && npm start` for a production build.

## Customize
- All text lives in `data/content.js`: profile, about, featured work, experience, skills, education, certifications, languages.
- Add artwork: copy images into `public/work/` and add `image: "/work/file.jpg"` to a `work` item.
- Colours and fonts: CSS variables in `app/globals.css` and `tailwind.config.js`.
- Sections: `components/` (one file per section); order is set in `app/page.js`.

## Check before publishing
- Proprint start date: LinkedIn says Dec 2024, the résumé says 2025. The site uses Dec 2024; edit `data/content.js` if wrong.
- Add a link to your online portfolio once it has a public URL.

## Deploy
Push to GitHub and import the repo in Vercel (free tier works).
