import { useEffect, useRef, useCallback } from "react";
import "./CursorEffect.css";

// ─────────────────────────────────────────────────────────────────────────
// CURSOR GLOW + PARTICLE TRAIL
// A luminous golden glow follows the mouse, with tiny particles
// that drift and fade behind it — giving the site a "divine touch" feel.
// ─────────────────────────────────────────────────────────────────────────

export default function CursorEffect() {
  const glowRef = useRef(null);
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: -100, y: -100 });
  const rafRef = useRef(null);

  const createParticle = useCallback((x, y) => {
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 1.5 + 0.5;
    const life = Math.random() * 40 + 30;
    const size = Math.random() * 3 + 1;
    const hue = Math.random() * 40 + 25; // golden range
    return {
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 0.5,
      life,
      maxLife: life,
      size,
      hue,
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    let frameCount = 0;

    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX}px`;
        glowRef.current.style.top = `${e.clientY}px`;
      }
      // Spawn 2-3 particles per frame
      for (let i = 0; i < 2; i++) {
        particlesRef.current.push(createParticle(e.clientX, e.clientY));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frameCount++;

      // Update and draw particles
      particlesRef.current = particlesRef.current.filter((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.02; // gentle gravity
        p.life--;

        const alpha = (p.life / p.maxLife) * 0.7;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 85%, 60%, ${alpha})`;
        ctx.fill();

        // Add glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 85%, 60%, ${alpha * 0.2})`;
        ctx.fill();

        return p.life > 0;
      });

      // Keep particles array manageable
      if (particlesRef.current.length > 200) {
        particlesRef.current = particlesRef.current.slice(-200);
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", handleMouseMove);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [createParticle]);

  return (
    <>
      <div ref={glowRef} className="cursor-glow" aria-hidden="true" />
      <canvas
        ref={canvasRef}
        className="cursor-particles-canvas"
        aria-hidden="true"
      />
    </>
  );
}
