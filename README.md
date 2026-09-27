# 🕉️ Bhaktipath

A spiritual home for bhajans, katha schedules, darshan places and photo
memories — built to be easy to extend, even if you're new to web
development.

**New to this project? Start with [`EDITING_GUIDE.md`](./EDITING_GUIDE.md)**
— it explains exactly which file to open for every kind of change.

---

## What's inside

| Feature | Page | Data file you'll edit |
|---|---|---|
| Splash chant on open | shows before any page | `src/i18n/locales/*.json` (`splash.chant`) |
| Jai Jai Vaani — bhajans, lyrics, YouTube player | `/jai-jai-vaani` | `src/data/bhajans.js` |
| Katha & Venues, with Google Maps links | `/katha-venues` | `src/data/kathas.js` |
| Photo Gallery, by subcategory | `/photo-gallery` | `src/data/gallery.js` |
| Thakurji Darshan — priority places | `/thakurji-places` | `src/data/places.js` |
| Hindi / English switch | every page (top right) | `src/i18n/locales/*.json` |
| Instagram / social links | footer | `src/data/social.js` |
| Silent "Bhaktipath" watermark | every page background | `src/components/Watermark.jsx` |

Built with **React + Vite** — see "Why React?" in the editing guide if
you're curious.

---

## 1. Run it on your own computer

You need [Node.js](https://nodejs.org) installed (version 18 or newer).
Check with:

```bash
node --version
```

Then, inside this folder:

```bash
npm install     # downloads all the packages the site needs (only once)
npm run dev     # starts the site locally
```

Open the link it prints — usually **http://localhost:5173** — in your
browser. The site reloads automatically every time you save a file.

To stop the server, press `Ctrl + C` in the terminal.

---

## 2. Push it to your own GitHub repo

```bash
git init
git add .
git commit -m "Bhaktipath — first commit"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
git push -u origin main
```

(`node_modules` and `dist` are already excluded via `.gitignore`, so your
repo stays small.)

---

## 3. Deploy for free on Netlify

1. Go to [app.netlify.com](https://app.netlify.com) and sign in with GitHub.
2. Click **Add new site → Import an existing project**, and pick your
   Bhaktipath repo.
3. Netlify will detect Vite automatically. Confirm these settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Click **Deploy**. Your site will be live at a `*.netlify.app` address
   in a minute or two (you can add a custom domain later, for free, from
   the Netlify dashboard).

A `public/_redirects` file is already included so that refreshing a page
like `/jai-jai-vaani` works correctly on Netlify instead of showing a
"page not found" error.

---

## 4. Build it yourself without deploying (optional)

```bash
npm run build      # creates an optimized version in the dist/ folder
npm run preview    # lets you view that build locally before publishing
```

---

## Project structure at a glance

```
src/
  data/         ← the content you'll edit most often (bhajans, kathas, etc.)
  i18n/         ← all on-screen text, in Hindi and English
  components/   ← reusable pieces (cards, navbar, footer, splash screen…)
  pages/        ← one file per page
  App.jsx       ← ties routes + splash screen together
public/
  images/       ← put your real photos here
```

For a full walkthrough of "I want to change X — which file do I open?",
see **[EDITING_GUIDE.md](./EDITING_GUIDE.md)**.
