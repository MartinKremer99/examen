import { Fragment, type ReactNode } from 'react';
import type { DocBlock, VerbalTab } from '../data/types';

const norm = (s: string) => s.replace(/’/g, "'");

/** Wraps occurrences of any quote in <mark>. Apostrophe variants match. */
function highlight(text: string, quotes: string[]): ReactNode {
  if (!quotes.length) return text;
  const hay = norm(text);
  const ranges: [number, number][] = [];
  for (const q of quotes) {
    const needle = norm(q).trim();
    if (!needle) continue;
    let i = hay.indexOf(needle);
    while (i >= 0) {
      ranges.push([i, i + needle.length]);
      i = hay.indexOf(needle, i + needle.length);
    }
  }
  if (!ranges.length) return text;
  ranges.sort((a, b) => a[0] - b[0]);
  const out: ReactNode[] = [];
  let pos = 0;
  ranges.forEach(([s, e], k) => {
    if (s < pos) return;
    if (s > pos) out.push(text.slice(pos, s));
    out.push(<mark key={k}>{text.slice(s, e)}</mark>);
    pos = e;
  });
  if (pos < text.length) out.push(text.slice(pos));
  return out;
}

function Block({ b, hl }: { b: DocBlock; hl: string[] }) {
  switch (b.t) {
    case 'meta':
      return (
        <div className="doc-meta">
          {b.lines.map((l, i) => (
            <div key={i}>{highlight(l, hl)}</div>
          ))}
        </div>
      );
    case 'h':
      return <h4>{highlight(b.text, hl)}</h4>;
    case 'p':
      return <p>{highlight(b.text, hl)}</p>;
    case 'ul':
      return (
        <ul>
          {b.items.map((it, i) => (
            <li key={i}>{highlight(it, hl)}</li>
          ))}
        </ul>
      );
    case 'table':
      return (
        <div className="table-scroll">
          <table className="doc-table">
            <thead>
              <tr>
                {b.head.map((h, i) => (
                  <th key={i}>{highlight(h, hl)}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {b.rows.map((r, i) => (
                <tr key={i}>
                  {r.map((c, j) => (
                    <td key={j}>{highlight(c, hl)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}

export function DocView({ tab, highlights = [] }: { tab: VerbalTab; highlights?: string[] }) {
  return (
    <div className="doc-body" lang="fr">
      {tab.blocks.map((b, i) => (
        <Fragment key={i}>
          <Block b={b} hl={highlights} />
        </Fragment>
      ))}
    </div>
  );
}
