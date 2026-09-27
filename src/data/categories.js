// ─────────────────────────────────────────────────────────────────────────
// HOME PAGE CATEGORIES
// This drives the 4 cards on the home page. To add a new category:
//   1. Copy one object below and change every field.
//   2. Add a matching <Route> in src/App.jsx pointing "path" at a page.
//   3. Add titleKey/descKey text to src/i18n/locales/en.json and hi.json.
// To rename a category (e.g. translate "Jai Jai Vaani" into Hindi), you do
// NOT edit this file at all — just edit the text in the locale files.
// See EDITING_GUIDE.md → "Renaming or adding a home page category".
// ─────────────────────────────────────────────────────────────────────────

export const categories = [
  {
    id: "bhajans",
    path: "/jai-jai-vaani",
    icon: "conch",
    accent: "saffron",
    titleKey: "category.bhajans.title",
    descKey: "category.bhajans.desc",
  },
  {
    id: "kathas",
    path: "/katha-venues",
    icon: "diya",
    accent: "maroon",
    titleKey: "category.kathas.title",
    descKey: "category.kathas.desc",
  },
  {
    id: "gallery",
    path: "/photo-gallery",
    icon: "lotus",
    accent: "teal",
    titleKey: "category.gallery.title",
    descKey: "category.gallery.desc",
  },
  {
    id: "places",
    path: "/thakurji-places",
    icon: "footprints",
    accent: "gold",
    titleKey: "category.places.title",
    descKey: "category.places.desc",
  },

  // TODO(ADD-CATEGORY): add your next category here, e.g.:
  // {
  //   id: "events",
  //   path: "/events",
  //   icon: "diya",
  //   accent: "gold",
  //   titleKey: "category.events.title",
  //   descKey: "category.events.desc",
  // },
];
