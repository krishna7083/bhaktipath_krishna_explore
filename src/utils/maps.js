// Builds a Google Maps link that works without needing coordinates or a
// Place ID — just pass a place name (and city, ideally).
export function googleMapsUrl(query) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}
