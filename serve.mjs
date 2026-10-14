// Minimal static server for running the trainer locally: node serve.mjs
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';

const port = Number(process.env.PORT ?? 4310);
const host = process.env.HOST ?? '127.0.0.1';

createServer(async (req, res) => {
  const path = (req.url ?? '/').split('?')[0];
  if (path !== '/' && path !== '/index.html') {
    res.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' }).end('Not found');
    return;
  }
  try {
    const body = await readFile(new URL('./dist/index.html', import.meta.url));
    res.writeHead(200, { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store' }).end(body);
  } catch {
    res.writeHead(500, { 'content-type': 'text/plain; charset=utf-8' }).end('dist/index.html fehlt – zuerst "npm run build" ausführen.');
  }
}).listen(port, host, () => console.log(`C1 Prüfungstrainer läuft auf http://${host}:${port}`));
