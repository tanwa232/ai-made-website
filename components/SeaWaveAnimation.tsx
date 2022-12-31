import React, { useRef, useEffect } from 'react';

const SeaWaveAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas == null) throw new Error('Could not get canvas');

    const ctx = canvas.getContext('2d');
    if (ctx == null) throw new Error('Could not get context');

    if (ctx) {
      let x = 0;
      let wave = new Float32Array(canvas.width);
      let wave2 = new Float32Array(canvas.width);
      let time = 0;
      let offset = 0;
      let speed = 0.05;

      const draw = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.beginPath();
        ctx.moveTo(0, canvas.height / 2);

        for (let i = 0; i < canvas.width; i++) {
          wave[i] = Math.sin(i * 0.1 + time) * 50;
          wave2[i] = Math.cos(i * 0.1 + time) * 50;
          ctx.lineTo(i, wave[i] + wave2[i] + canvas.height / 2);
        }

        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.fillStyle = '#0066ff';
        ctx.fill();

        time += speed;
        requestAnimationFrame(draw);
      };

      draw();
    }
  }, []);

  return <canvas ref={canvasRef} className="w-full h-64" />;
};

export default SeaWaveAnimation;
