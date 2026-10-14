import type { Lang, MatrixBlock, NumBlock, NumTab } from '../data/types';
import { fmt } from '../lib/calc';

const NA = { fr: 'n. d.', de: 'k. A.' };
const SERIES = ['var(--s1)', 'var(--s2)', 'var(--s3)'];

function niceStep(range: number, ticks = 5): number {
  const raw = range / ticks;
  const mag = 10 ** Math.floor(Math.log10(raw));
  const n = raw / mag;
  return (n <= 1 ? 1 : n <= 2 ? 2 : n <= 2.5 ? 2.5 : n <= 5 ? 5 : 10) * mag;
}

function scale(values: number[], fromZero: boolean) {
  const max = Math.max(...values);
  let min = fromZero ? 0 : Math.min(...values);
  if (min > 0 && fromZero) min = 0;
  if (!fromZero) {
    const span = max - min || Math.abs(max) || 1;
    min = min - span * 0.25;
    if (min < 0 && Math.min(...values) >= 0) min = 0;
  }
  const step = niceStep(max - min || 1);
  const lo = Math.floor(min / step) * step;
  const hi = Math.ceil((max * 1.08) / step) * step;
  const ticks: number[] = [];
  for (let v = lo; v <= hi + step / 2; v += step) ticks.push(Number(v.toFixed(6)));
  return { lo, hi, ticks };
}

function Legend({ b, lang }: { b: MatrixBlock; lang: Lang }) {
  if (b.rows.length < 2) return null;
  return (
    <div className="chart-legend">
      {b.rows.map((r, i) => (
        <span key={r.key}>
          <i style={{ background: SERIES[i % SERIES.length] }} />
          {r.label[lang]}
        </span>
      ))}
    </div>
  );
}

function BarChart({ b, lang }: { b: MatrixBlock; lang: Lang }) {
  const dec = b.decimals ?? 0;
  const vals = b.rows.flatMap((r) => r.values.filter((v): v is number => v !== null));
  const { lo, hi, ticks } = scale(vals, true);
  const W = 620;
  const H = 280;
  const L = 52;
  const R = 10;
  const T = 18;
  const B = 46;
  const plotW = W - L - R;
  const plotH = H - T - B;
  const y = (v: number) => T + plotH - ((v - lo) / (hi - lo)) * plotH;
  const groupW = plotW / b.cols.length;
  const nS = b.rows.length;
  const barW = Math.min(46, (groupW * 0.78) / nS);
  return (
    <svg className="chart" viewBox={`0 0 ${W} ${H}`} role="img" aria-label={b.caption[lang]}>
      {ticks.map((t) => (
        <g key={t}>
          <line className="grid" x1={L} x2={W - R} y1={y(t)} y2={y(t)} />
          <text x={L - 6} y={y(t) + 4} textAnchor="end">
            {fmt(t, Number.isInteger(t) ? 0 : 1, lang)}
          </text>
        </g>
      ))}
      <line className="axis" x1={L} x2={W - R} y1={y(lo)} y2={y(lo)} />
      {b.cols.map((c, ci) => {
        const gx = L + ci * groupW + (groupW - barW * nS) / 2;
        return (
          <g key={c.key}>
            {b.rows.map((r, ri) => {
              const v = r.values[ci];
              if (v === null) return null;
              const x = gx + ri * barW;
              return (
                <g key={r.key}>
                  <rect x={x + 1} y={y(v)} width={barW - 2} height={Math.max(0, y(lo) - y(v))} style={{ fill: SERIES[ri % SERIES.length] }} />
                  <text className="val" x={x + barW / 2} y={y(v) - 4} textAnchor="middle">
                    {fmt(v, dec, lang)}
                  </text>
                </g>
              );
            })}
            <text x={L + ci * groupW + groupW / 2} y={H - B + 18} textAnchor="middle">
              {c.label[lang]}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

function LineChart({ b, lang }: { b: MatrixBlock; lang: Lang }) {
  const dec = b.decimals ?? 0;
  const vals = b.rows.flatMap((r) => r.values.filter((v): v is number => v !== null));
  const { lo, hi, ticks } = scale(vals, false);
  const W = 620;
  const H = 290;
  const L = 52;
  const R = 22;
  const T = 22;
  const B = 44;
  const plotW = W - L - R;
  const plotH = H - T - B;
  const x = (i: number) => L + (b.cols.length === 1 ? plotW / 2 : (i * plotW) / (b.cols.length - 1));
  const y = (v: number) => T + plotH - ((v - lo) / (hi - lo)) * plotH;
  return (
    <svg className="chart" viewBox={`0 0 ${W} ${H}`} role="img" aria-label={b.caption[lang]}>
      {ticks.map((t) => (
        <g key={t}>
          <line className="grid" x1={L} x2={W - R} y1={y(t)} y2={y(t)} />
          <text x={L - 6} y={y(t) + 4} textAnchor="end">
            {fmt(t, Number.isInteger(t) ? 0 : 1, lang)}
          </text>
        </g>
      ))}
      {b.cols.map((c, i) => (
        <text key={c.key} x={x(i)} y={H - B + 20} textAnchor="middle">
          {c.label[lang]}
        </text>
      ))}
      {b.rows.map((r, ri) => {
        const pts = r.values.map((v, i) => (v === null ? null : ([x(i), y(v)] as const)));
        const d = pts
          .map((p, i) => (p ? `${i === 0 || !pts[i - 1] ? 'M' : 'L'}${p[0].toFixed(1)},${p[1].toFixed(1)}` : ''))
          .join(' ');
        return (
          <g key={r.key}>
            <path d={d} fill="none" style={{ stroke: SERIES[ri % SERIES.length] }} strokeWidth={2.5} />
            {r.values.map((v, i) => {
              if (v === null) return null;
              // place the label above for the higher series, below for lower ones
              const others = b.rows.filter((_, k) => k !== ri).map((o) => o.values[i]).filter((o): o is number => o !== null);
              const below = others.some((o) => o > v);
              return (
                <g key={i}>
                  <circle cx={x(i)} cy={y(v)} r={3.5} style={{ fill: SERIES[ri % SERIES.length] }} />
                  <text className="val" x={x(i)} y={below ? y(v) + 15 : y(v) - 8} textAnchor="middle">
                    {fmt(v, dec, lang)}
                  </text>
                </g>
              );
            })}
          </g>
        );
      })}
    </svg>
  );
}

function Table({ b, lang }: { b: MatrixBlock; lang: Lang }) {
  const dec = b.decimals ?? 0;
  return (
    <div className="table-scroll">
      <table className="doc-table">
        <thead>
          <tr>
            <th />
            {b.cols.map((c) => (
              <th key={c.key} style={{ textAlign: 'right' }}>
                {c.label[lang]}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {b.rows.map((r) => (
            <tr key={r.key}>
              <th scope="row" style={{ fontWeight: 500 }}>
                {r.label[lang]}
              </th>
              {r.values.map((v, i) => (
                <td key={i} className="n">
                  {v === null ? NA[lang] : fmt(v, dec, lang)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function NumBlockView({ b, lang, highlighted }: { b: NumBlock; lang: Lang; highlighted?: boolean }) {
  const style = highlighted ? { outline: '3px solid var(--flag)', outlineOffset: 4, borderRadius: 4 } : undefined;
  if (b.t === 'text') return <p className="small" style={{ fontFamily: 'var(--font-doc)', fontSize: '0.98rem' }}>{b.text[lang]}</p>;
  if (b.t === 'facts')
    return (
      <div className="nblock" style={style}>
        {b.caption && <div className="caption">{b.caption[lang]}</div>}
        <div className="facts">
          {b.items.map((it) => (
            <div key={it.key}>
              <span>{it.label[lang]}</span>
              <b>
                {fmt(it.value, it.decimals ?? 0, lang)}
                {it.unit ? ` ${it.unit[lang]}` : ''}
              </b>
            </div>
          ))}
        </div>
      </div>
    );
  return (
    <div className="nblock" style={style}>
      <div>
        <div className="caption">{b.caption[lang]}</div>
        {b.unit && <div className="unit">{b.unit[lang]}</div>}
      </div>
      {b.t === 'table' && <Table b={b} lang={lang} />}
      {b.t === 'bar' && (
        <>
          <Legend b={b} lang={lang} />
          <BarChart b={b} lang={lang} />
        </>
      )}
      {b.t === 'line' && (
        <>
          <Legend b={b} lang={lang} />
          <LineChart b={b} lang={lang} />
        </>
      )}
    </div>
  );
}

export function NumTabView({ tab, lang, highlightBlocks = [] }: { tab: NumTab; lang: Lang; highlightBlocks?: string[] }) {
  return (
    <div className="doc-body" style={{ maxWidth: 'none', gap: 20 }}>
      {tab.blocks.map((b, i) => (
        <NumBlockView key={i} b={b} lang={lang} highlighted={b.t !== 'text' && highlightBlocks.includes(b.id)} />
      ))}
    </div>
  );
}
