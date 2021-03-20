import * as constants from "##/constants";
import * as https from "https";
// @ts-ignore: No declarations
import { CompletionLogger, CycleLogger } from "@kludge-cs/bench-utils";
import Benchmark from "benchmark";
import type { Deferred } from "benchmark";
import { URL } from "url";
import centra from "centra";
import centraFork from "@helperdiscord/centra";
import fetch from "node-fetch";
import got from "got";
import request from "request";

const url = new URL("https://127.0.0.1:8080");
const urlString = url.toString();
const defer = {"defer": true};

new Benchmark.Suite()
	.add("got - promise", async (deferred: Deferred) => {
		await got(url, constants.gotOptions);
		deferred.resolve();
	}, defer)
	.add("request - callback", (deferred: Deferred) => {
		request(urlString, constants.requestOptions, (error: Error) => {
			if (error) throw error;
			deferred.resolve();
		});
	}, defer)
	.add("node-fetch - promise", async (deferred: Deferred) => {
		const response = await fetch(url, constants.fetchOptions);
		await response.text();
		deferred.resolve();
	}, defer)
	.add("centra - promise", async (deferred: Deferred) => {
		const req = centra(url);
		req.coreOptions = constants.httpsOptions;
		await req.send();
		deferred.resolve();
	}, defer)
	.add("https - stream", (deferred: Deferred) => {
		https.request(urlString, constants.httpsOptions, (response) => {
			response.resume();
			response.once("end", () => {
				deferred.resolve();
			});
		}).end();
	}, defer)
	.add("@helperdiscord/centra - promise", async (deferred: Deferred) => {
		const req = centraFork(url);
		req.coreOptions = constants.httpsOptions;
		await req.send();
		deferred.resolve();
	}, defer)
	.on("cycle", CycleLogger)
	.on("complete", CompletionLogger)
	.run({"async": true});
