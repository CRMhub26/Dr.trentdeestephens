import React, { useEffect, useRef } from 'react';

export const DustParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle system: floating golden dust motes & subtle candlelight embers
    const particleCount = Math.min(width < 768 ? 35 : 70, 80);
    const particles: Array<{
      x: number;
      y: number;
      radius: number;
      alpha: number;
      speedX: number;
      speedY: number;
      sinOffset: number;
      color: string;
    }> = [];

    for (let i = 0; i < particleCount; i++) {
      const isGold = Math.random() > 0.3;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.8 + 0.5,
        alpha: Math.random() * 0.5 + 0.15,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: -Math.random() * 0.35 - 0.1, // Float gently upwards like warm air in a library
        sinOffset: Math.random() * Math.PI * 2,
        color: isGold ? '212, 175, 55' : '245, 235, 215'
      });
    }

    let time = 0;
    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX + Math.sin(time + p.sinOffset) * 0.2;

        // Wrap around
        if (p.y < 0) {
          p.y = height + 5;
          p.x = Math.random() * width;
        }
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        const dynamicAlpha = p.alpha * (0.7 + 0.3 * Math.sin(time * 2 + p.sinOffset));

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${dynamicAlpha})`;
        ctx.shadowBlur = 6;
        ctx.shadowColor = `rgba(${p.color}, 0.8)`;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-10 opacity-70"
      aria-hidden="true"
    />
  );
};
