
import React, { useEffect, useRef } from 'react';

export const CursorBlackHole = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas to full window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();

    // Mouse position
    let mouse = {
      x: canvas.width / 2,
      y: canvas.height / 2,
      radius: 15 // Size of the cursor dot
    };

    // Track mouse movement
    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', resizeCanvas);

    // Particle class declaration must come before any usage
    class Particle {
      x: number;
      y: number;
      size: number;
      vx: number;
      vy: number;
      origVx: number;
      origVy: number;
      color: string;

      constructor() {
        // Random position on screen
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        
        // Random size between 1 and 3
        this.size = Math.random() * 2 + 1;
        
        // Random velocity (much slower now)
        this.vx = (Math.random() - 0.5) * 0.2;
        this.vy = (Math.random() - 0.5) * 0.2;
        
        // Original speed for reset
        this.origVx = this.vx;
        this.origVy = this.vy;
        
        // Black color
        this.color = 'black';
      }

      update() {
        // Calculate distance to mouse
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Only affect particles within attraction range
        const attractionRadius = 200;
        if (distance < attractionRadius) {
          // Calculate attraction force (stronger when closer)
          const force = (attractionRadius - distance) / attractionRadius;
          
          // Apply force toward mouse position (slower)
          this.vx += (dx / distance) * force * 0.2;
          this.vy += (dy / distance) * force * 0.2;
        } else {
          // Gradually return to original velocity
          this.vx = this.vx * 0.95 + this.origVx * 0.05;
          this.vy = this.vy * 0.95 + this.origVy * 0.05;
        }
        
        // Apply velocity with speed limit
        const maxSpeed = 1.5;
        const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
        if (speed > maxSpeed) {
          this.vx = (this.vx / speed) * maxSpeed;
          this.vy = (this.vy / speed) * maxSpeed;
        }
        
        this.x += this.vx;
        this.y += this.vy;
        
        // Wrap around screen edges
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Array to store particles - declare before any usage
    let particles: Particle[] = [];

    // Initialize particles - define function before using it
    const initParticles = () => {
      particles = [];
      const particleCount = Math.min(canvas.width * canvas.height / 10000, 300);
      
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    // Animation loop - define function before using it
    const animate = () => {
      if (!ctx) return;
      
      // Clear the canvas with slight transparency for trail effect
      ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw cursor
      ctx.fillStyle = 'black';
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, mouse.radius, 0, Math.PI * 2);
      ctx.fill();
      
      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      
      return requestAnimationFrame(animate);
    };

    // Initialize particles and start animation
    initParticles();
    window.addEventListener('resize', initParticles);
    const animationId = animate();

    // Cleanup function
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('resize', initParticles);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 z-50 pointer-events-none" 
    />
  );
};
