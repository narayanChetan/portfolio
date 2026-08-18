'use client';

import { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { playClick, isMuted, setMuted } from '@/lib/sound';

const SoundContext = createContext({ muted: false, toggleMuted: () => {} });

export function useSound() {
  return useContext(SoundContext);
}

export default function SoundProvider({ children }) {
  const [muted, setMutedState] = useState(false);

  useEffect(() => {
    const initial = isMuted();
    setMutedState(initial);
    setMuted(initial);
  }, []);

  const toggleMuted = useCallback(() => {
    setMutedState((prev) => {
      const next = !prev;
      setMuted(next);
      return next;
    });
  }, []);

  // Global delegated click sound: every button / link / [data-sound] element
  // in the app makes a click noise, without having to wire each one by hand.
  // Anything explicitly opted out with data-no-sound is skipped (e.g. text
  // inputs that happen to be inside a clickable label).
  useEffect(() => {
    function onPointerDown(e) {
      const el = e.target.closest('button, a, [role="button"], [data-sound]');
      if (!el || el.closest('[data-no-sound]')) return;
      if (el.disabled) return;
      playClick();
    }
    document.addEventListener('pointerdown', onPointerDown, true);
    return () => document.removeEventListener('pointerdown', onPointerDown, true);
  }, []);

  return <SoundContext.Provider value={{ muted, toggleMuted }}>{children}</SoundContext.Provider>;
}
