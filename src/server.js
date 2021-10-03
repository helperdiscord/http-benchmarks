import { Worker, isMainThread } from 'worker_threads';
import { cpus } from 'os';
import { fileURLToPath } from 'url';
import pkg from 'uWebSockets.js';

process.env.UV_THREADPOOL_SIZE = cpus().length;

const filename = fileURLToPath(import.meta.url);

if (isMainThread) cpus().forEach(() => {new Worker(filename)});
else pkg.App()
	.get('/*', (res) => {
        res.writeHeader('Content-Type', 'text/plain');
		res.end('ok');
	})
	.listen('127.0.0.1', 8080, (sock) => console.log(sock, ' active.'));