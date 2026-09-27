// ─────────────────────────────────────────────────────────────────────────
// UPCOMING KATHAS & VENUES
// Powers the "Katha & Venues" page. Add as many entries as you like.
//
// Fields:
//   id       → unique short string
//   title    → name of the katha / satsang / event
//   date     → shown as plain text, write it however you like
//              (e.g. "15–17 Nov 2026")
//   venue    → venue name
//   address  → full address line shown under the venue name
//   mapQuery → just type the place name + city; the app builds a working
//              Google Maps link from this automatically. No need to look
//              up coordinates or a Place ID.
//   image    → optional. Leave "" to show the default temple-arch artwork.
//
// See EDITING_GUIDE.md → "Adding a Katha or venue".
// ─────────────────────────────────────────────────────────────────────────

export const kathas = [
  {
    id: "sample-vrindavan-1",
    title: "Jai Jai Vaani Sammelan",
    date: "15–17 Nov 2026",
    venue: "Banke Bihari Temple",
    address: "Bihariji Marg, Vrindavan, Uttar Pradesh 281121",
    mapQuery: "Banke Bihari Temple, Vrindavan",
    image: "",
  },
  {
    id: "sample-vrindavan-2",
    title: "Radha Damodar Katha",
    date: "1–3 Dec 2026",
    venue: "ISKCON Sri Krishna Balaram Mandir",
    address: "Bhaktivedanta Swami Marg, Raman Reti, Vrindavan, Uttar Pradesh 281121",
    mapQuery: "ISKCON Sri Krishna Balaram Mandir, Vrindavan",
    image: "",
  },

  // TODO(ADD-KATHA): copy an object above and fill in your real dates,
  // venues and addresses. mapQuery just needs a name Google Maps can find.
];
