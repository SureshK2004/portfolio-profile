import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

interface NodeParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  pulseSpeed: number;
  pulsePhase: number;
}

export const AmbientLight: React.FC = () => {
  const { theme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates tracking
    const mouse = {
      x: -1000,
      y: -1000,
      active: false,
      radius: 160,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });

    // Reduced motion check
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Responsive particle count: ~42 desktop, ~22 mobile
    let particles: NodeParticle[] = [];
    const initParticles = () => {
      const isMobile = width < 768;
      const count = isMobile ? 22 : 44;
      particles = [];

      for (let i = 0; i < count; i++) {
        const speedMultiplier = prefersReducedMotion ? 0 : 0.35;
        const angle = Math.random() * Math.PI * 2;
        const speed = (0.2 + Math.random() * 0.4) * speedMultiplier;

        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          radius: Math.random() * 1.5 + 1.2,
          alpha: Math.random() * 0.45 + 0.35,
          pulseSpeed: 0.02 + Math.random() * 0.03,
          pulsePhase: Math.random() * Math.PI * 2,
        });
      }
    };

    initParticles();

    // Render loop
    let lastTime = performance.now();
    const render = (time: number) => {
      const delta = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      const isDark = theme === 'dark';
      const nodeColor = isDark ? '192, 132, 252' : '124, 58, 237';
      const lineColor = isDark ? '147, 107, 240' : '139, 92, 246';
      const connectionDistance = width < 768 ? 95 : 125;

      // Update and draw particles
      const len = particles.length;
      for (let i = 0; i < len; i++) {
        const p = particles[i];

        if (!prefersReducedMotion) {
          p.x += p.vx * (delta * 60);
          p.y += p.vy * (delta * 60);
          p.pulsePhase += p.pulseSpeed;

          // Wrap edges
          if (p.x < -10) p.x = width + 10;
          else if (p.x > width + 10) p.x = -10;
          if (p.y < -10) p.y = height + 10;
          else if (p.y > height + 10) p.y = -10;

          // Gentle mouse repulsion/attraction
          if (mouse.active) {
            const dx = mouse.x - p.x;
            const dy = mouse.y - p.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < mouse.radius && dist > 1) {
              const force = (1 - dist / mouse.radius) * 0.25;
              p.x -= (dx / dist) * force;
              p.y -= (dy / dist) * force;
            }
          }
        }

        // Pulse alpha
        const currentAlpha = Math.max(0.15, p.alpha + Math.sin(p.pulsePhase) * 0.2);

        // Draw particle dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${nodeColor}, ${currentAlpha})`;
        ctx.fill();

        // Connect with other nearby particles
        for (let j = i + 1; j < len; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const lineAlpha = (1 - dist / connectionDistance) * 0.28 * currentAlpha;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(${lineColor}, ${lineAlpha})`;
            ctx.lineWidth = 0.85;
            ctx.stroke();
          }
        }

        // Draw delicate line to mouse if active & within range
        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const mouseLineAlpha = (1 - dist / mouse.radius) * 0.42;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(${nodeColor}, ${mouseLineAlpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    // Pause animation when tab is inactive
    const handleVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(animationFrameId);
      } else {
        lastTime = performance.now();
        animationFrameId = requestAnimationFrame(render);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [theme]);

  const isDark = theme === 'dark';

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* 1. Subtle High-Tech Cyber Grid Overlay */}
      <div className="absolute inset-0 cyber-grid-pattern opacity-60 dark:opacity-40 transition-opacity duration-700" />

      {/* 2. Floating Aurora Plasma Orbs (GPU Transform Animated) */}
      <div className="absolute -inset-10 overflow-hidden">
        {/* Orb 1: Upper-left / center violet glow */}
        <div
          className={`absolute -top-24 left-[15%] w-[480px] sm:w-[620px] h-[480px] sm:h-[620px] rounded-full blur-[110px] sm:blur-[140px] animate-float-orb-1 transition-opacity duration-1000 ${
            isDark ? 'bg-violet-600/18' : 'bg-purple-400/12'
          }`}
        />

        {/* Orb 2: Right / mid-screen deep amethyst aurora */}
        <div
          className={`absolute top-[35%] -right-20 w-[440px] sm:w-[580px] h-[440px] sm:h-[580px] rounded-full blur-[120px] sm:blur-[150px] animate-float-orb-2 transition-opacity duration-1000 ${
            isDark ? 'bg-purple-800/16' : 'bg-violet-400/10'
          }`}
        />

        {/* Orb 3: Lower-left indigo / electric hue */}
        <div
          className={`absolute -bottom-20 left-[5%] w-[400px] sm:w-[520px] h-[400px] sm:h-[520px] rounded-full blur-[100px] sm:blur-[130px] animate-float-orb-3 transition-opacity duration-1000 ${
            isDark ? 'bg-indigo-700/14' : 'bg-purple-300/10'
          }`}
        />
      </div>

      {/* 3. Subtle Computer-Vision Horizontal Scanline Beam */}
      <div className="absolute inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-purple-500/40 dark:via-purple-400/30 to-transparent shadow-[0_0_12px_rgba(168,85,247,0.35)] animate-scanline" />

      {/* 4. Interactive Constellation Node Mesh (HTML5 Canvas) */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
};
