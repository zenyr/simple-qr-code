import create from 'zustand';
import { persist } from 'zustand/middleware';

export interface Store {
  input: string;
  level: 'L' | 'M' | 'Q' | 'H';
  size: number;
  lastT: number;
  setInput: (input: string) => void;
  setLevel: (input: Store['level']) => void;
  setSize: (input: number) => void;
}

export const useStore = create(
  persist<Store>(
    (set, get) => ({
      input: '',
      level: 'L',
      size: 256,
      lastT: 0,
      setInput: (input) => set({ input, lastT: Date.now() }),
      setLevel: (level) => set({ level }),
      setSize: (size) => set({ size }),
    }),
    { name: 'simple-qr' }
  )
);
