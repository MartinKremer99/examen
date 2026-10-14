import { useEffect, useRef, type ReactNode } from 'react';
import { formatClock } from '../lib/timer';

export function ConfirmDialog(props: {
  title: string;
  children: ReactNode;
  confirmLabel: string;
  cancelLabel?: string;
  danger?: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    ref.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') props.onCancel();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className="overlay" role="presentation" onClick={props.onCancel}>
      <div className="dialog" role="alertdialog" aria-modal="true" aria-labelledby="dlg-title" onClick={(e) => e.stopPropagation()}>
        <h2 id="dlg-title">{props.title}</h2>
        <div className="muted">{props.children}</div>
        <div className="btn-row" style={{ justifyContent: 'flex-end' }}>
          <button className="btn" ref={ref} onClick={props.onCancel}>
            {props.cancelLabel ?? 'Abbrechen'}
          </button>
          <button className={`btn ${props.danger ? 'danger' : 'primary'}`} onClick={props.onConfirm}>
            {props.confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}

export function TimerDisplay({ remainingMs, elapsedMs, label }: { remainingMs: number | null; elapsedMs: number; label?: string }) {
  if (remainingMs === null)
    return (
      <div className="timer" title="Ohne Zeitlimit – verstrichene Zeit" aria-label={`Verstrichene Zeit ${formatClock(elapsedMs)}`}>
        <span className="sr-only">{label}</span>⏱ {formatClock(elapsedMs)}
      </div>
    );
  const cls = remainingMs <= 0 ? 'timer out' : remainingMs <= 30000 ? 'timer low' : 'timer';
  return (
    <div className={cls} role="timer" aria-label={`Verbleibende Zeit ${formatClock(remainingMs)}`}>
      {formatClock(remainingMs)}
    </div>
  );
}

export function Progress({ done, total, label }: { done: number; total: number; label: string }) {
  const pct = total ? (done / total) * 100 : 0;
  return (
    <div className="progress" aria-label={label}>
      <span className="small muted">{label}</span>
      <div className="bar" role="progressbar" aria-valuemin={0} aria-valuemax={total} aria-valuenow={done}>
        <span style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

export function ScorePill({ value }: { value: number | null | undefined }) {
  if (value === null || value === undefined) return <span className="score-pill">–</span>;
  const v = Math.round(value);
  const cls = v >= 70 ? 'good' : v >= 50 ? 'mid' : 'low';
  return <span className={`score-pill ${cls}`}>{v}</span>;
}

export function ScoreBar({ value }: { value: number | null }) {
  return (
    <div className="bar" aria-hidden="true">
      <span style={{ width: `${Math.max(0, Math.min(100, value ?? 0))}%` }} />
    </div>
  );
}

export function Sparkline({ values, height = 56 }: { values: number[]; height?: number }) {
  if (values.length < 2) return <p className="small muted">Für einen Verlauf sind mindestens zwei Versuche nötig.</p>;
  const w = 300;
  const pad = 6;
  const x = (i: number) => pad + (i * (w - 2 * pad)) / (values.length - 1);
  const y = (v: number) => pad + (1 - v / 100) * (height - 2 * pad);
  const d = values.map((v, i) => `${i ? 'L' : 'M'}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(' ');
  const area = `${d} L${x(values.length - 1)},${height - pad} L${x(0)},${height - pad} Z`;
  return (
    <svg className="sparkline" viewBox={`0 0 ${w} ${height}`} preserveAspectRatio="none" role="img" aria-label={`Verlauf: ${values.map((v) => Math.round(v)).join(', ')}`}>
      <line x1={pad} x2={w - pad} y1={y(50)} y2={y(50)} strokeDasharray="3 3" />
      <path className="area" d={area} />
      <path className="line" d={d} />
      <circle cx={x(values.length - 1)} cy={y(values[values.length - 1])} r="3.5" />
    </svg>
  );
}

export function Seg<T extends string | number>(props: {
  value: T;
  options: { value: T; label: string; hint?: string; disabled?: boolean }[];
  onChange: (v: T) => void;
  label: string;
}) {
  return (
    <div className="choice-group" role="group" aria-label={props.label}>
      <span className="eyebrow">{props.label}</span>
      <div className="opts">
        {props.options.map((o) => (
          <button
            key={String(o.value)}
            className="seg"
            aria-pressed={props.value === o.value}
            disabled={o.disabled}
            onClick={() => props.onChange(o.value)}
          >
            <span>{o.label}</span>
            {o.hint && <small>{o.hint}</small>}
          </button>
        ))}
      </div>
    </div>
  );
}

export const pct = (x: number | null | undefined) => (x === null || x === undefined ? '–' : `${Math.round(x)} %`);
export const secs = (ms: number) => formatClock(ms);
export const dateTime = (t: number) =>
  new Date(t).toLocaleString('de-LU', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });

/** Global key handler that ignores typing in form fields. */
export function useKeys(handler: (e: KeyboardEvent) => void, deps: unknown[]) {
  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement;
      if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.tagName === 'SELECT')) return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      if (document.querySelector('.overlay')) return;
      handler(e);
    };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, deps); // eslint-disable-line react-hooks/exhaustive-deps
}
