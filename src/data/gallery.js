// ─────────────────────────────────────────────────────────────────────────
// PHOTO GALLERY
// Organised as subcategories (tabs), each holding a list of photos.
//
// TO ADD A REAL PHOTO:
//   1. Put the image file in  public/images/gallery/<subcategory-folder>/
//   2. Set "src" below to "/images/gallery/<subcategory-folder>/yourfile.jpg"
//   Until you add a real "src", the tile shows a soft placeholder — that's
//   normal and expected, nothing is broken.
//
// TO ADD A NEW SUBCATEGORY: copy a whole block (id, titleKey, photos) and
// add a title for it in the locale files (en.json / hi.json).
//
// See EDITING_GUIDE.md → "Adding gallery photos or a new subcategory".
// ─────────────────────────────────────────────────────────────────────────

export const gallerySections = [
  {
    id: "jai-jai",
    titleKey: "gallery.section.jaijai",
    photos: [
      { id: "jj-1", caption: "Jai Jai Vaani — sample photo 1", src: "" },
      { id: "jj-2", caption: "Jai Jai Vaani — sample photo 2", src: "" },
      { id: "jj-3", caption: "Jai Jai Vaani — sample photo 3", src: "" },
    ],
  },
  {
    id: "jagannath",
    titleKey: "gallery.section.jagannath",
    photos: [
      { id: "jg-1", caption: "Jagannath — sample photo 1", src: "" },
      { id: "jg-2", caption: "Jagannath — sample photo 2", src: "" },
      { id: "jg-3", caption: "Jagannath — sample photo 3", src: "" },
    ],
  },
  {
    id: "pandharpur",
    titleKey: "gallery.section.pandharpur",
    photos: [
      { id: "pp-1", caption: "Pandharpur — sample photo 1", src: "" },
      { id: "pp-2", caption: "Pandharpur — sample photo 2", src: "" },
    ],
  },

  // TODO(ADD-GALLERY-SECTION): copy a block above for a new subcategory,
  // e.g. "Dwarka", "Puri Rath Yatra", "Local Satsang" — anything you like.
];
