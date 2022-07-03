import { useEffect, useRef } from 'react';
import { useStore } from '../../../store';

export const InputOverlaySrcRenderer = () => {
  const ref = useRef<HTMLCanvasElement>(null);
  const overlay = useStore((s) => s.overlay);
  const setOverlaySrc = useStore((s) => s.setOverlaySrc);
  const setOverlaySize = useStore((s) => s.setOverlaySize);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx || !overlay) return;

    // a lot of magic numbers here
    ctx.font = '32px sans-serif';
    const lines = overlay.split('\n');
    const maxLineWidth = lines.reduce(
      (max, line) => Math.max(max, ctx.measureText(line).width),
      0
    );
    canvas.width = maxLineWidth + 10;
    canvas.height = lines.length * 32 + 10;
    setOverlaySize([canvas.width / 2, canvas.height / 2]);

    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#000';
    ctx.font = '32px sans-serif';
    lines.forEach((line, i) => ctx.fillText(line, 5, 32 + 32 * i));

    setOverlaySrc(canvas.toDataURL());
  }, [overlay, setOverlaySrc, setOverlaySize]);
  return <canvas style={{ display: 'none' }} ref={ref} />;
};
