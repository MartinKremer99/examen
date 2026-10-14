// Countdown driven by wall-clock timestamps (not by counting ticks), so a
// throttled tab or slow device cannot stretch the time. Remaining time is
// clamped at zero and expiry fires exactly once.

import { useEffect, useRef, useState } from 'react';

export class Countdown {
  private startedAt: number | null = null;
  private stoppedAt: number | null = null;
  private fired = false;
  constructor(
    readonly durationMs: number | null, // null = untimed
    private readonly now: () => number = () => Date.now(),
  ) {}
  start(): void {
    if (this.startedAt === null) this.startedAt = this.now();
  }
  stop(): void {
    if (this.startedAt !== null && this.stoppedAt === null) this.stoppedAt = this.now();
  }
  get stopped(): boolean {
    return this.stoppedAt !== null;
  }
  elapsed(): number {
    if (this.startedAt === null) return 0;
    const e = (this.stoppedAt ?? this.now()) - this.startedAt;
    return this.durationMs === null ? e : Math.min(e, this.durationMs);
  }
  remaining(): number | null {
    return this.durationMs === null ? null : Math.max(0, this.durationMs - this.elapsed());
  }
  /** Returns true once, the first time it is called after time ran out. */
  checkExpired(): boolean {
    if (this.fired || this.stopped || this.durationMs === null || this.startedAt === null) return false;
    if (this.remaining()! <= 0) {
      this.fired = true;
      this.stop();
      return true;
    }
    return false;
  }
}

export interface CountdownState {
  remainingMs: number | null;
  elapsedMs: number;
  stop: () => number; // stops and returns elapsed ms
}

/** React binding. `onExpire` fires once; after `stop()` nothing fires. */
export function useCountdown(durationMs: number | null, onExpire: () => void, tickMs = 200): CountdownState {
  const cdRef = useRef<Countdown>();
  if (!cdRef.current) cdRef.current = new Countdown(durationMs);
  const cd = cdRef.current;
  const cb = useRef(onExpire);
  cb.current = onExpire;
  const [, force] = useState(0);
  useEffect(() => {
    cd.start();
    const id = setInterval(() => {
      if (cd.checkExpired()) {
        clearInterval(id);
        force((x) => x + 1);
        cb.current();
        return;
      }
      if (cd.stopped) {
        clearInterval(id);
        return;
      }
      force((x) => x + 1);
    }, tickMs);
    return () => {
      clearInterval(id);
      cd.stop();
    };
  }, [cd, tickMs]);
  return {
    remainingMs: cd.remaining(),
    elapsedMs: cd.elapsed(),
    stop: () => {
      cd.stop();
      return cd.elapsed();
    },
  };
}

export function formatClock(ms: number): string {
  const s = Math.ceil(Math.max(0, ms) / 1000);
  return `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;
}
