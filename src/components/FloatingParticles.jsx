import { useEffect, useRef } from "react";
import "./FloatingParticles.css";

// ─────────────────────────────────────────────────────────────────────────
// AMBIENT FLOATING PARTICLES
// Dreamy golden / amber orbs drifting across the background of every page,
// giving a celestial, spiritual feel to the entire site.
// ─────────────────────────────────────────────────────────────────────────

export default function FloatingParticles() {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let w, h;
    const particles = [];
    const PARTICLE_COUNT = 50;

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = document.documentElement.scrollHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Initialize particles
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        size: Math.random() * 3 + 0.5,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: -(Math.random() * 0.3 + 0.1),
        opacity: Math.random() * 0.5 + 0.1,
        hue: Math.random() * 50 + 20, // gold to amber
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.02 + 0.01,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, w, h);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.pulse += p.pulseSpeed;

        const pulsedOpacity = p.opacity * (0.5 + 0.5 * Math.sin(p.pulse));
        const pulsedSize = p.size * (0.8 + 0.2 * Math.sin(p.pulse));

        // Wrap around
        if (p.y < -10) p.y = h + 10;
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;

        // Core
        ctx.beginPath();
        ctx.arc(p.x, p.y, pulsedSize, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 80%, 65%, ${pulsedOpacity})`;
        ctx.fill();

        // Glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, pulsedSize * 4, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 80%, 65%, ${pulsedOpacity * 0.15})`;
        ctx.fill();
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="floating-particles-canvas"
      aria-hidden="true"
    />
  );
}
