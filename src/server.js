import { Worker, isMainThread } from 'worker_threads';
import { cpus } from 'os';
import { fileURLToPath } from 'url';
const host = '127.0.0.1', port = 8080;

let use_uws = true, pkg = await import('http');
try { pkg = (await import('uWebSockets.js')).default; } catch { use_uws = false; };

function uws(host, port) {
    const filename = fileURLToPath(import.meta.url);
    if (isMainThread) cpus().forEach(() => { new Worker(filename) });
    else pkg.App()
        .get('/*', (res) => {
            res.writeHeader('Content-Type', 'text/plain');
            res.end('ok');
        })
        .listen(host, port, (sock) => console.log(sock, ' active.'));
};

function http(_, port) {
    pkg
        .createServer((req, res) => {
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end("ok");
            return;
        })
        .listen(port, () => console.log("Awaiting requests."));
};

if (use_uws) uws(host, port);
else http(host, port)