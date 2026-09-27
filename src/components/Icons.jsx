// Hand-drawn-style SVG symbols for Bhaktipath, kept in one file so the
// visual language stays consistent. Add a new one the same way if you need it.

export function ConchIcon(props) {
  return (
    <svg viewBox="0 0 48 48" fill="none" {...props}>
      <path d="M14 34c-4-4-5-11-1-17 4-6 12-9 18-6 5 2.5 7 8 4 13-1.7 2.9-5 4-8 2.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
      <path d="M16 32c6 6 16 6 22-1" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
      <circle cx="26" cy="18" r="2" fill="currentColor"/>
    </svg>
  );
}

export function DiyaIcon(props) {
  return (
    <svg viewBox="0 0 48 48" fill="none" {...props}>
      <path d="M20 22c-1-5 2-9 4-11 2 2 5 6 4 11" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
      <ellipse cx="24" cy="24" rx="14" ry="4.5" stroke="currentColor" strokeWidth="2.2"/>
      <path d="M8 26c1 5 8 8 16 8s15-3 16-8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
    </svg>
  );
}

export function LotusIcon(props) {
  return (
    <svg viewBox="0 0 48 48" fill="none" {...props}>
      <path d="M24 30c0-9 3-15 0-20-3 5 0 11 0 20Z" stroke="currentColor" strokeWidth="2"/>
      <path d="M24 30c-7-3-11-9-9-15 6 0 10 6 9 15Z" stroke="currentColor" strokeWidth="2"/>
      <path d="M24 30c7-3 11-9 9-15-6 0-10 6-9 15Z" stroke="currentColor" strokeWidth="2"/>
      <path d="M10 30c6 6 22 6 28 0" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
    </svg>
  );
}

export function FootprintsIcon(props) {
  return (
    <svg viewBox="0 0 48 48" fill="none" {...props}>
      <ellipse cx="18" cy="16" rx="4.5" ry="7" transform="rotate(-12 18 16)" stroke="currentColor" strokeWidth="2"/>
      <ellipse cx="30" cy="30" rx="4.5" ry="7" transform="rotate(12 30 30)" stroke="currentColor" strokeWidth="2"/>
      <circle cx="13" cy="9" r="1.6" fill="currentColor"/>
      <circle cx="34" cy="21" r="1.6" fill="currentColor"/>
    </svg>
  );
}

export function MapPinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M12 21s7-7.2 7-12a7 7 0 1 0-14 0c0 4.8 7 12 7 12Z" stroke="currentColor" strokeWidth="1.8"/>
      <circle cx="12" cy="9" r="2.4" stroke="currentColor" strokeWidth="1.8"/>
    </svg>
  );
}

export function PlayIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M8 5.5v13l11-6.5-11-6.5Z" />
    </svg>
  );
}

export function CloseIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
    </svg>
  );
}

export function MenuIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
