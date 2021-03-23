import * as constants from "##/constants";
import * as http from "http";
// @ts-ignore: No declarations
import { CompletionLogger, CycleLogger } from "@kludge-cs/bench-utils";
import Benchmark from "benchmark";
import { Client } from "undici";
import type { Deferred } from "benchmark";
import { URL } from "url";
import centra from "centra";
import fetch from "node-fetch";
import got from "got";
import pi from "petitio";
import request from "request";

const url = new URL("http://127.0.0.1:8080");
const urlString = url.toString();
const defer = {"defer": true};

const client = new Client(url, { pipelining: 10 });
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
	.add("petitio - promise", async (deferred: Deferred) => {
		const req = pi(url).client(client, true);
		await req.send();
		deferred.resolve();
	}, defer)
	.add("http - stream", (deferred: Deferred) => {
		http.request(urlString, constants.httpsOptions, (response) => {
			response.resume();
			response.once("end", () => {
				deferred.resolve();
			});
		}).end();
	}, defer)
	.on("cycle", CycleLogger)
	.on("complete", CompletionLogger)
	.run({"async": true});
