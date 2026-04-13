"use client";

import { useEffect, useRef } from "react";

export default function CowCutout() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new window.Image();
    img.src = "/cow-real.png";

    img.onload = () => {
      const width = 160;
      const height = 100;
      canvas.width = width;
      canvas.height = height;

      ctx.clearRect(0, 0, width, height);
      ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, width, height);

      const frame = ctx.getImageData(0, 0, width, height);
      const data = frame.data;

      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];

        // Key out vegetation/background while keeping the cow.
        const isGreenBg = g > 78 && g > r * 1.08 && g > b * 1.05;
        const isDarkTree = g > r && g > b && g < 90;

        if (isGreenBg || isDarkTree) {
          data[i + 3] = 0;
        }
      }

      ctx.putImageData(frame, 0, 0);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="h-[82px] w-[130px] drop-shadow-[0_0_14px_rgba(255,255,255,0.38)]"
    />
  );
}
