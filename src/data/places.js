// ─────────────────────────────────────────────────────────────────────────
// SHREE THAKURJI — PLACES TO VISIT
// Priority darshan places for the "Thakurji Darshan" page.
//
// Fields: same idea as kathas.js — mapQuery just needs a findable name,
// no coordinates needed. Leave "image" as "" for the default artwork.
//
// See EDITING_GUIDE.md → "Adding a Thakurji darshan place".
// ─────────────────────────────────────────────────────────────────────────

export const places = [
  {
    id: "jagannath-puri",
    name: "Jagannath Puri",
    address: "Shree Jagannath Temple, Grand Road, Puri, Odisha 752001",
    mapQuery: "Shree Jagannath Temple, Puri, Odisha",
    image: "",
    comingSoon: false,
  },
  {
    id: "pandharpur",
    name: "Pandharpur (Vitthal Rukmini)",
    address: "Shree Vitthal Rukmini Mandir, Pandharpur, Maharashtra 413304",
    mapQuery: "Vitthal Rukmini Temple, Pandharpur, Maharashtra",
    image: "",
    comingSoon: false,
  },

  // TODO(ADD-PLACE): copy a block above for each new place, and set
  // comingSoon: false once you have its real address and map link.
];

// This placeholder card always renders after the real places above,
// as long as at least one entry has comingSoon: true, or you can just
// leave the array as-is — the page shows a permanent "more coming soon"
// note automatically when there's nothing else marked comingSoon.
export const morePlacesComingSoon = true;
