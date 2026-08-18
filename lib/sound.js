// ============================================================
// Tiny synthesized retro-Mac sound kit, built with the Web Audio
// API. No .mp3/.wav assets to license or host - every sound below
// is generated on the fly with oscillators.
// ============================================================

let ctx = null;
let muted = false;

function getCtx() {
  if (typeof window === 'undefined') return null;
  if (!ctx) {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
  }
  if (ctx.state === 'suspended') {
    try {
      ctx.resume();
    } catch (error) {
      // Some browsers reject a resume call that is triggered outside the
      // expected gesture lifecycle; the next user interaction will unlock it.
    }
  }
  return ctx;
}

function ensureAudioReady() {
  const audio = getCtx();
  if (!audio) return false;
  if (audio.state === 'suspended') {
    try {
      audio.resume();
    } catch (error) {
      return false;
    }
  }
  return true;
}

export function isMuted() {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem('chetanos-muted') === '1';
}

export function setMuted(value) {
  muted = value;
  if (typeof window !== 'undefined') {
    localStorage.setItem('chetanos-muted', value ? '1' : '0');
  }
}

function tone(freq, start, duration, { type = 'square', gain = 0.06, glideTo = null } = {}) {
  const audio = getCtx();
  if (!audio || muted) return;
  ensureAudioReady();
  const osc = audio.createOscillator();
  const amp = audio.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, audio.currentTime + start);
  if (glideTo) {
    osc.frequency.exponentialRampToValueAtTime(glideTo, audio.currentTime + start + duration);
  }
  amp.gain.setValueAtTime(0.0001, audio.currentTime + start);
  amp.gain.exponentialRampToValueAtTime(gain, audio.currentTime + start + 0.01);
  amp.gain.exponentialRampToValueAtTime(0.0001, audio.currentTime + start + duration);
  osc.connect(amp);
  amp.connect(audio.destination);
  osc.start(audio.currentTime + start);
  osc.stop(audio.currentTime + start + duration + 0.02);
}

// Classic Mac-ish boot chord: a stacked major chord that fades in, like the
// System 7 startup bong (approximated, not a sample of the real thing).
export function playStartup() {
  const audio = getCtx();
  if (!audio) return;
  [130.81, 164.81, 196.0, 261.63].forEach((f) => {
    tone(f, 0, 1.4, { type: 'sine', gain: 0.05 });
  });
  tone(523.25, 0.02, 1.2, { type: 'triangle', gain: 0.035 });
}

// Short UI click, like a classic Mac button press.
export function playClick() {
  tone(1200, 0, 0.03, { type: 'square', gain: 0.03, glideTo: 700 });
}

// A slightly different "down" click for toggles/cancel.
export function playClickAlt() {
  tone(500, 0, 0.04, { type: 'square', gain: 0.03, glideTo: 300 });
}

// Terminal window opening whir/chime.
export function playTerminalOpen() {
  tone(220, 0, 0.08, { type: 'sawtooth', gain: 0.02 });
  tone(440, 0.05, 0.12, { type: 'square', gain: 0.03 });
  tone(880, 0.12, 0.15, { type: 'square', gain: 0.025 });
}

// Terminal command-entered "key" beep.
export function playEnter() {
  tone(660, 0, 0.05, { type: 'square', gain: 0.035 });
}

// Error / not-found beep.
export function playError() {
  tone(180, 0, 0.15, { type: 'square', gain: 0.04 });
}
