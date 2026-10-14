// Bundles the app into one self-contained HTML page.
//   node build.mjs             -> dist/index.html (website: Vercel, any static host, serve.mjs)
//   node build.mjs --artifact  -> also artifact/c1-trainer.html (+ preview.html) for claude.ai,
//                                 with React and ReactDOM from cdnjs (pinned UMD builds)
import { build } from 'esbuild';
import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';

const globals = {
  react: 'React',
  'react/jsx-runtime': 'React',
  'react-dom': 'ReactDOM',
  'react-dom/client': 'ReactDOM',
};

const umdGlobals = {
  name: 'umd-globals',
  setup(b) {
    b.onResolve({ filter: /^react(-dom)?(\/.*)?$/ }, (args) => ({ path: args.path, namespace: 'umd-global' }));
    b.onLoad({ filter: /.*/, namespace: 'umd-global' }, (args) => {
      const g = globals[args.path];
      if (!g) throw new Error(`no global for ${args.path}`);
      if (args.path === 'react/jsx-runtime') {
        // minimal automatic-runtime shim on top of React.createElement
        return {
          contents: `const R = window.React;
            function jsx(type, props, key) {
              const { children, ...rest } = props || {};
              if (key !== undefined) rest.key = key;
              return children === undefined ? R.createElement(type, rest)
                : Array.isArray(children) ? R.createElement(type, rest, ...children)
                : R.createElement(type, rest, children);
            }
            export { jsx, jsx as jsxs };
            export const Fragment = R.Fragment;`,
          loader: 'js',
        };
      }
      return { contents: `module.exports = window.${g};`, loader: 'js' };
    });
  },
};

const prod = !process.argv.includes('--dev');
const result = await build({
  entryPoints: ['src/main.tsx'],
  bundle: true,
  format: 'iife',
  target: 'es2020',
  minify: prod,
  jsx: 'automatic',
  write: false,
  legalComments: 'none',
  plugins: [umdGlobals],
});
const js = result.outputFiles[0].text;
const css = readFileSync('src/styles.css', 'utf8');

const title = 'C1 Administratif – Prüfungstrainer';
const description = 'Übungstrainer für das examen d’admissibilité, secteur communal, C1 sous-groupe administratif (Luxemburg).';
const fonts = `<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600&family=Source+Sans+3:wght@400;500;600;700&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&display=swap">`;
const inlineScript = (code) => `<script>\n${code.replace(/<\/script/gi, '<\\/script')}\n</script>`;

// ---------------------------------------------------------------- website
const favicon =
  'data:image/svg+xml,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="6" fill="#1b3a6b"/><text x="16" y="21.5" font-family="Arial,sans-serif" font-size="14" font-weight="700" fill="#fff" text-anchor="middle">C1</text></svg>`,
  );
const site = `<!doctype html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>${title}</title>
<meta name="description" content="${description}">
<meta name="theme-color" content="#1b3a6b">
<link rel="icon" href="${favicon}">
${fonts}
<style>
${css}
</style>
</head>
<body style="margin:0">
<div id="root"></div>
${inlineScript(readFileSync('node_modules/react/umd/react.production.min.js', 'utf8'))}
${inlineScript(readFileSync('node_modules/react-dom/umd/react-dom.production.min.js', 'utf8'))}
${inlineScript(js)}
</body>
</html>
`;
if (site.includes('cdnjs.cloudflare.com')) throw new Error('website build must not reference the CDN');
rmSync('dist', { recursive: true, force: true });
mkdirSync('dist', { recursive: true });
writeFileSync('dist/index.html', site);
console.log(`dist/index.html ${(site.length / 1024).toFixed(0)} KiB`);

// --------------------------------------------------------------- artifact
if (process.argv.includes('--artifact')) {
  const html = `<title>${title}</title>
<meta name="description" content="${description}">
${fonts}
<style>
${css}
</style>
<div id="root"></div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/18.3.1/umd/react.production.min.js" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.3.1/umd/react-dom.production.min.js" crossorigin="anonymous"></script>
${inlineScript(js)}
`;
  mkdirSync('artifact', { recursive: true });
  writeFileSync('artifact/c1-trainer.html', html);
  // local preview with a full document wrapper
  writeFileSync(
    'artifact/preview.html',
    `<!doctype html><html lang="de"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"></head><body style="margin:0">${html}</body></html>`,
  );
  console.log(`artifact/c1-trainer.html ${(html.length / 1024).toFixed(0)} KiB`);
}
