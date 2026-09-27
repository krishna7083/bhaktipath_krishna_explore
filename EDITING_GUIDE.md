# Bhaktipath — Editing Guide

This document is your map. Every section below answers one question:
**"I want to change ___ — which file do I open, and what do I type?"**

You don't need to understand React to make most of these changes — the
files in `src/data/` and `src/i18n/locales/` are plain lists and plain
text, written to be edited directly.

A quick rule before you start: after saving any file, look at your
terminal (where `npm run dev` is running) and at the browser. If
something breaks, the terminal will usually tell you which file and
which line — read the error message, it's more helpful than it looks.

---

## Contents
1. [Changing the splash chant text](#1-changing-the-splash-chant-text)
2. [Renaming a category, or translating anything into Hindi/English](#2-renaming-a-category-or-translating-anything)
3. [Adding or editing a bhajan](#3-adding-or-editing-a-bhajan)
4. [Adding a Katha or venue](#4-adding-a-katha-or-venue)
5. [Adding gallery photos or a new subcategory](#5-adding-gallery-photos-or-a-new-subcategory)
6. [Adding a Thakurji darshan place](#6-adding-a-thakurji-darshan-place)
7. [Adding a brand new home page category](#7-adding-a-brand-new-home-page-category)
8. [Replacing the home page banner](#8-replacing-the-home-page-banner)
9. [Changing your Instagram / social links](#9-changing-your-instagram--social-links)
10. [Adding a new language (beyond Hindi/English)](#10-adding-a-new-language)
11. [Changing colours and fonts](#11-changing-colours-and-fonts)
12. [Changing when the splash screen appears](#12-changing-when-the-splash-screen-appears)
13. [Fetching bhajans from your GitHub repo instead of local data](#13-fetching-bhajans-from-your-github-repo-instead-of-local-data)
14. [Why React (and not plain JavaScript)?](#14-why-react-and-not-plain-javascript)
15. [Common mistakes and how to fix them](#15-common-mistakes-and-how-to-fix-them)

---

## 1. Changing the splash chant text

**File:** `src/i18n/locales/hi.json` (and `en.json` for the English version)

Find:
```json
"splash": {
  "chant": "पुछरी के लौटा दे, हूप हूप प्यारीईई…",
  "subtitle": "गाइए, गुनगुनाइए और भक्तिपथ पर चलिए",
  "enter": "भक्तिपथ में प्रवेश करें"
}
```
Edit the text between the quotes. Save. That's the whole change — you
never need to open `SplashScreen.jsx` just to change wording.

---

## 2. Renaming a category, or translating anything

This is the feature you asked about specifically: **you should never
need to touch component code just to change what a category is called.**

**File:** `src/i18n/locales/hi.json` and `en.json`

Every piece of text on the site is a `"key": "value"` pair in these two
files. For example, to rename "Jai Jai Vaani" everywhere it appears:

```json
"category": {
  "bhajans": {
    "title": "जय जय वाणी"   ← change this line
  }
}
```

The English and Hindi files use the **exact same keys**, just different
text on the right. Never rename the keys on the left (like `"title"`) —
only change the text values.

---

## 3. Adding or editing a bhajan

**File:** `src/data/bhajans.js`

Copy one entry and change the values:

```js
{
  id: "my-new-bhajan",              // unique, no spaces
  title: "Shri Krishna Govind Hare",
  category: "Jai Jai Vaani",        // reuse a category name, or type a new one
  lyrics: `Line one of the bhajan
Line two of the bhajan
Line three...`,
  youtubeUrl: "https://www.youtube.com/watch?v=XXXXXXXXXXX",
},
```

- Typing a `category` that doesn't exist yet automatically creates a new
  filter option on the Jai Jai Vaani page — no other file needs to change.
- Leave `youtubeUrl: ""` if you don't have the link yet. The site shows
  "YouTube link coming soon" instead of a broken player.
- `lyrics` supports multiple lines — just keep the backtick
  (`` ` ``) characters at the start and end.

---

## 4. Adding a Katha or venue

**File:** `src/data/kathas.js`

```js
{
  id: "katha-2027-01",
  title: "Your Katha Name",
  date: "12–14 Jan 2027",
  venue: "Temple Name",
  address: "Full address, City, State, PIN",
  mapQuery: "Temple Name, City",   // the app builds the Google Maps link for you
  image: "",                        // leave blank for now
},
```

You don't need to look up GPS coordinates. `mapQuery` just needs to be
specific enough for Google Maps to find it (temple name + city works well).

---

## 5. Adding gallery photos or a new subcategory

**File:** `src/data/gallery.js`

**To add a photo to an existing subcategory** (e.g. "Jagannath"):
1. Put your image file in `public/images/gallery/jagannath/` (create the
   folder if it doesn't exist).
2. Add an entry:
   ```js
   { id: "jg-4", caption: "Rath Yatra 2026", src: "/images/gallery/jagannath/rathyatra.jpg" },
   ```

**To add a brand-new subcategory** (e.g. "Dwarka"):
```js
{
  id: "dwarka",
  titleKey: "gallery.section.dwarka",   // you choose this key name
  photos: [
    { id: "dw-1", caption: "Dwarka — sample photo 1", src: "" },
  ],
},
```
Then add the matching text in **both** locale files:
```json
"gallery": { "section": { "dwarka": "द्वारका" } }
```
(and the English equivalent in `en.json`). The new tab appears
automatically on the gallery page.

---

## 6. Adding a Thakurji darshan place

**File:** `src/data/places.js`

```js
{
  id: "vrindavan",
  name: "Vrindavan",
  address: "Full address, City, State, PIN",
  mapQuery: "Banke Bihari Temple, Vrindavan",
  image: "",
  comingSoon: false,
},
```
The "More places coming soon" card always stays at the end of the list
automatically (controlled by the `morePlacesComingSoon` flag at the
bottom of the same file — set it to `false` once you feel the list is
complete, or leave it `true` forever if you're always adding more).

---

## 7. Adding a brand new home page category

This is the one change that touches more than one file, because you're
adding an entirely new section to the site. Three steps:

**Step A — register the category.** In `src/data/categories.js`, copy a
block and change every field:
```js
{
  id: "events",
  path: "/events",
  icon: "diya",              // pick from: conch, diya, lotus, footprints
  accent: "gold",            // pick from: saffron, maroon, teal, gold
  titleKey: "category.events.title",
  descKey: "category.events.desc",
},
```

**Step B — add the text.** In both `en.json` and `hi.json`:
```json
"category": {
  "events": { "title": "Events", "desc": "One line describing this section." }
}
```

**Step C — create the page.** Copy the simplest existing page,
`src/pages/KathaVenues.jsx`, save it as `src/pages/Events.jsx`, and
adjust it to show whatever content you want. Then in `src/App.jsx`, add:
```jsx
import Events from "./pages/Events";
// ...
<Route path="/events" element={<Events />} />
```

The new card, its nav link, and its page will all appear automatically.

---

## 8. Replacing the home page banner

**File:** `src/components/Banner.jsx`

1. Add your image at `public/images/banner/jagannath.jpg`.
2. In the file, delete the placeholder `<span className="banner-glyph">`
   line and uncomment the `<img>` line just above it (remove the `{/*`
   and `*/}` around it).

---

## 9. Changing your Instagram / social links

**File:** `src/data/social.js`

```js
{ id: "instagram", label: "Instagram", url: "https://instagram.com/your_real_handle", icon: "instagram" },
```
To add another platform, copy the line and change `icon` to any value
you add support for in `src/components/Footer.jsx`'s `ICONS` map (a
YouTube or Facebook icon can be added to `src/components/Icons.jsx`
the same way the others are written).

---

## 10. Adding a new language

1. Copy `src/i18n/locales/en.json` → `src/i18n/locales/mr.json` (or
   whichever language code you need) and translate every value.
2. In `src/i18n/i18n.js`, import it and add it to `resources`:
   ```js
   import mr from "./locales/mr.json";
   // ...
   resources: { en: {...}, hi: {...}, mr: { translation: mr } }
   ```
3. In `src/components/LanguageSwitcher.jsx`, add it to the `LANGUAGES` list:
   ```js
   { code: "mr", label: "मराठी" }
   ```

---

## 11. Changing colours and fonts

**File:** `src/index.css`, right at the top under `:root`.

Every colour on the site is a named variable:
```css
--marigold: #e9962f;   /* the main accent colour */
--sindoor: #8c1d34;    /* deep red accent */
--peacock: #0e7c7b;    /* teal accent */
--dusk-900: #1b1035;   /* main dark background */
```
Change a hex value here and it updates everywhere that colour is used.

Fonts are set two lines below:
```css
--font-display: "Yatra One", "Hind", system-ui, sans-serif;  /* headings */
--font-body: "Hind", system-ui, -apple-system, sans-serif;    /* body text */
```
To use a different Google Font, add it to the `@import` line at the very
top of the same file, then update these two variables.

---

## 12. Changing when the splash screen appears

**File:** `src/App.jsx`

Right now, the chant shows once per browser tab session (it won't repeat
if you just click between pages, but shows again in a new tab or after
closing the browser). To make it show on **every** visit, delete these
two lines:
```js
const [entered, setEntered] = useState(
  () => sessionStorage.getItem(SPLASH_KEY) === "true"
);
```
and replace with:
```js
const [entered, setEntered] = useState(false);
```
Also remove the `sessionStorage.setItem(...)` line inside `handleEnter`.

---

## 13. Fetching bhajans from your GitHub repo instead of local data

Right now, `src/data/bhajans.js` holds the bhajan text directly so the
site works instantly with no setup. Your GitHub repo
(`krishna7083/bhaktipath`) already has folders named `Jai_Jai_Vaani`,
`jai_jagnnath`, and `radhadamodar_stuti` — the sample categories here
were named to match.

Once you've settled on a consistent file format inside that repo (for
example, one `.txt` file per bhajan, with the YouTube link on the first
line and lyrics below), the cleanest approach is:
1. Write a small script that reads those files and generates a
   `bhajans.js` file in the same shape used here — this keeps the
   website itself simple and fast, with no risk of a broken page if
   GitHub is briefly unreachable.
2. Run that script whenever you update your repo, and commit the
   regenerated `src/data/bhajans.js`.

If you'd like, ask me again once your repo's file format is finalized,
and I can write that conversion script for you.

---

## 14. Why React (and not plain JavaScript)?

You asked me to decide, so here's the reasoning: this site has several
repeating pieces (bhajan cards, place cards, category cards) and several
things that change together (language, splash state, which video is
playing). Plain HTML/JavaScript can do this, but you'd be writing a lot
of manual code to keep the page in sync every time data changes.

**React** lets each piece of content live in one small file (like
`src/data/bhajans.js`) and the page updates itself automatically. That's
exactly the "extendable" behavior you asked for — it's why adding a
bhajan or renaming a category is a one-file, no-code-logic change. The
trade-off is that React needs a build step (`npm run dev` / `npm run
build`), which is why the "run it on your computer" instructions above
exist — but Netlify handles that step for you automatically once deployed.

---

## 15. Common mistakes and how to fix them

- **Forgot a comma** between two entries in a `data/*.js` file → the
  terminal will show a red error mentioning "Unexpected token." Check the
  line just above the one it mentions for a missing comma.
- **Deleted a curly brace `{` or `}`** while editing → same kind of error.
  Undo your last change (`Ctrl+Z`) and try again more carefully.
- **Page shows blank / white screen** → open your browser's developer
  console (F12 → Console tab) and read the red error message; it will
  usually name the exact file.
- **Image doesn't show up** → double check the `src` path starts with
  `/images/...` (not `public/images/...` — the `public` part is implied)
  and that the file actually exists at that path inside `public/`.
