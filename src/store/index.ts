import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Store {
  input: string;
  overlay: string;
  overlaySrc: string;
  overlaySize: [number, number];
  level: 'L' | 'M' | 'Q' | 'H';
  size: number;
  lastT: number;
  setInput: (input: string) => void;
  setOverlay: (input: string) => void;
  setOverlaySrc: (input: string) => void;
  setOverlaySize: (input: [number, number]) => void;
  setLevel: (input: Store['level']) => void;
  setSize: (input: number) => void;
}

export const useStore = create(
  persist<Store>(
    (set, get) => ({
      input: '',
      overlay: '',
      overlaySrc: '',
      overlaySize: [0, 0],
      level: 'L',
      size: 256,
      lastT: 0,
      setInput: (input) => set({ input, lastT: input ? Date.now() : 0 }),
      setOverlay: (overlay) =>
        set((s) => (overlay ? { overlay } : { overlay, overlaySrc: '' })),
      setOverlaySrc: (overlaySrc) => set({ overlaySrc }),
      setOverlaySize: (overlaySize) => set({ overlaySize }),
      setLevel: (level) => set({ level }),
      setSize: (size) => set({ size }),
    }),
    { name: 'simple-qr' }
  )
);
