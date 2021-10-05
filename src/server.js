import { Worker, isMainThread } from 'worker_threads';
import { cpus } from 'os';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { readFile } from 'fs/promises';
let payload = 'ok';
if (process.env.LARGE) payload = (await readFile(`${dirname(fileURLToPath(import.meta.url))}/large.txt`)).toString();
const host = '127.0.0.1', port = 8080;

let use_uws = true, pkg = await import('http');
try { pkg = (await import('uWebSockets.js')).default; } catch { use_uws = false; };

function uws(host, port) {
    const filename = fileURLToPath(import.meta.url);
    if (isMainThread) cpus().forEach(() => { new Worker(filename) });
    else pkg.App()
        .get('/*', (res) => {
            res.writeHeader('Content-Type', 'text/plain');
            res.end(payload);
        })
        .listen(host, port, (sock) => console.log(sock, ' active.'));
};

function http(_, port) {
    pkg
        .createServer((req, res) => {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(payload);
            return;
        })
        .listen(port, () => console.log('Awaiting requests.'));
};

if (use_uws) uws(host, port);
else http(host, port)