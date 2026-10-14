# C1 Administratif – Prüfungstrainer

Übungstrainer für das *examen d'admissibilité*, secteur communal, C1 sous-groupe administratif (Luxemburg).
Originales Übungsmaterial – keine offiziellen Prüfungsfragen, kein offizielles Ergebnis.

React 18 + TypeScript, gebündelt mit esbuild zu **einer** statischen Datei `dist/index.html`
(React inline, keine Server-Logik). Fortschritt wird im `localStorage` des Browsers gespeichert.

## Befehle

| Befehl | Zweck |
| --- | --- |
| `npm ci` | Abhängigkeiten installieren |
| `npm run build` | `dist/index.html` erzeugen |
| `npm start` | bauen und lokal auf http://127.0.0.1:4310 starten (`PORT`, `HOST` anpassbar) |
| `npm test` | Tests (Aufgabenbanken, Engines, Speicherung) |
| `npm run typecheck` | TypeScript prüfen |
| `npm run build:artifact` | zusätzlich `artifact/c1-trainer.html` für claude.ai |

## Deployment auf Vercel

1. Repository auf GitHub pushen (`dist/` und `node_modules/` sind in `.gitignore`).
2. In Vercel: **Add New → Project → Repository importieren**. Die Einstellungen kommen aus `vercel.json`
   (`npm ci`, `npm run build`, Ausgabeordner `dist`) – nichts weiter einzustellen, keine Umgebungsvariablen.
3. Jeder Push auf den Hauptbranch deployt automatisch neu.

Hinweis: Der Fortschritt liegt pro Browser und pro Domain. Wechselt die Domain (z. B. von `*.vercel.app`
auf eine eigene Domain), beginnt der Verlauf dort neu – vorher unter *Einstellungen* als JSON exportieren.
