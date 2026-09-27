import "./Watermark.css";

// The very quiet "Bhaktipath" text tiled across every page background.
// It's deliberately kept at low opacity via CSS (--watermark opacity in
// Watermark.css) so it never competes with real content.
export default function Watermark() {
  const tiles = Array.from({ length: 40 });
  return (
    <div className="watermark" aria-hidden="true">
      {tiles.map((_, i) => (
        <span key={i}>Bhaktipath</span>
      ))}
    </div>
  );
}
