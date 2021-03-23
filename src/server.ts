import * as http from "http";
import type { AddressInfo } from "net";

const server = http
	.createServer((_req, response) => response.end("ok"))
	.listen(8080, () => {
		const { port } = server.address() as AddressInfo;
		console.log(`Listening at http://localhost:${port}`);
	});
