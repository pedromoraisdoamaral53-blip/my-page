import React, { useEffect, useRef, useState } from 'react';

const totalFrames = 40;

// Preload helper
const preloadImages = () => {
  for (let i = 1; i <= totalFrames; i++) {
    const num = i.toString().padStart(3, '0');
    const img = new Image();
    img.src = `/robot-frames/ezgif-frame-${num}.png`;
  }
};

export default function RobotVideo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loaded, setLoaded] = useState(false);
  const frameRef = useRef(1);
  const rafIdRef = useRef<number | null>(null);

  useEffect(() => {
    // Preload all frames on mount
    preloadImages();

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = new Image();
    // Use an arbitrarily large canvas size (or matching the frames approx aspect)
    // The CSS will scale it automatically using object-fit
    canvas.width = 600;
    canvas.height = 338; // approx 16:9 

    const render = () => {
      const num = frameRef.current.toString().padStart(3, '0');
      img.src = `/robot-frames/ezgif-frame-${num}.png`;

      img.onload = () => {
        if (!loaded) setLoaded(true);
        
        // Dynamically set canvas to match frame resolution
        if (canvas.width !== img.width || canvas.height !== img.height) {
            canvas.width = img.width;
            canvas.height = img.height;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.globalCompositeOperation = 'screen';
        ctx.drawImage(img, 0, 0);
      };
    };

    let lastTime = 0;
    const fps = 15; // Slower, relaxed animation for 40 frames
    const interval = 1000 / fps;

    const tick = (time: number) => {
      if (time - lastTime >= interval) {
        frameRef.current = (frameRef.current % totalFrames) + 1;
        render();
        lastTime = time;
      }
      rafIdRef.current = requestAnimationFrame(tick);
    };

    rafIdRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, [loaded]);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <canvas
        ref={canvasRef}
        className={`w-full max-h-[80vh] object-contain transition-opacity duration-1000 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
        }}
      />
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 rounded-full border-2 border-cyan-accent border-t-transparent animate-spin"/>
        </div>
      )}
    </div>
  );
}
