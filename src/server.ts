import * as https from "https";
import type { AddressInfo } from "net";
import devcert from "devcert";

async function main() {
	const keys = await devcert.certificateFor("localhost");
	const server = https
		.createServer(keys, (_req, response) => response.end("ok"))
		.listen(8080, () => {
			const { port } = server.address() as AddressInfo;
			console.log(`Listening at https://localhost:${port}`);
		});
}

main().catch(console.error);
