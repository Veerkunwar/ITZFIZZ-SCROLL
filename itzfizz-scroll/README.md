# Itzfizz Digital: scroll-driven hero

A one-page agency site where a car drives across the screen as you scroll.
Built for the Itzfizz Digital web development internship assignment.

## Features
- Intro animation on load: headline, subtext, stats (with count-up), car and buttons
- Pinned, scrubbed scroll scene: car travel, lean, scale, wheel spin, lime trail and headline all share one timeline
- Reverses when you scroll up, releases the pin cleanly into the next section
- Desktop pins; mobile plays the scene without pinning
- `prefers-reduced-motion` shows a static, fully readable page
- Car is an inline SVG, so there are no image files to break
- No React state updates on scroll

## Stack
React + Vite, Tailwind CSS v4, GSAP, ScrollTrigger, `@gsap/react`, Lucide React.

## Run it
Needs Node 20.19 or newer.

    npm install
    npm run dev

Production build: `npm run build` (output in `dist/`), preview with `npm run preview`.

## Editing content
Copy, stats, services and the contact email are all in `src/content.js`.
The stat numbers are illustrative, not real company figures.

## Structure
    src/
      components/  Navbar, Hero (all the animation), Car, About, Services, Cta
      lib/gsap.js  plugin registration
      content.js   editable copy
      index.css    Tailwind theme (colors, fonts)

## Push to GitHub
Create an empty repo on github.com first, then:

    git init
    git add .
    git commit -m "Itzfizz scroll hero"
    git branch -M main
    git remote add origin https://github.com/<your-username>/itzfizz-scroll.git
    git push -u origin main

## Deploy free (Vercel)
1. Sign in at vercel.com with GitHub and click Add New, then Project.
2. Import the repo. Vite is auto-detected (build `npm run build`, output `dist`).
3. Click Deploy. You get a public URL in about a minute.

Netlify works the same way: build command `npm run build`, publish directory `dist`.
