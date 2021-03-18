import {URL} from 'url';
import * as https from 'https';
import Benchmark from 'benchmark';
import fetch from 'node-fetch';
import request from 'request';
import c from '@helperdiscord/centra';
import got from 'got';
import ce from 'centra';

const httpsAgent = new https.Agent({
	keepAlive: true,
	rejectUnauthorized: false
});

const url = new URL('https://127.0.0.1:8080');
const urlString = url.toString();

const gotOptions = {
	agent: {
		https: httpsAgent
	},
	https: {
		rejectUnauthorized: false
	},
	retry: 0
};



const requestOptions = {
	strictSSL: false,
	agent: httpsAgent
};

const fetchOptions = {
	agent: httpsAgent
};


const httpsOptions = {
	https: {
		rejectUnauthorized: false
	},
	agent: httpsAgent
};

const suite = new Benchmark.Suite();

// Benchmarking
suite.add('got - promise', {
	defer: true,
	fn: async (deferred: {resolve: () => void}) => {
		await got(url, gotOptions);
		deferred.resolve();
	}
}).add('request - callback', {
	defer: true,
	fn: (deferred: {resolve: () => void}) => {
		request(urlString, requestOptions, (error: Error) => {
			if (error) {
				throw error;
			}

			deferred.resolve();
		});
	}
}).add('node-fetch - promise', {
	defer: true,
	fn: async (deferred: {resolve: () => void}) => {
		const response = await fetch(url, fetchOptions);
		await response.text();

		deferred.resolve();
	}
})
.add('centra - promise', {
	defer: true,
	fn: async (deferred: {resolve: () => void}) => {
		const req = ce(url);
        req.coreOptions = httpsOptions;
        await req.send();
        deferred.resolve();
	}
})
.add('https - stream', {
	defer: true,
	fn: (deferred: {resolve: () => void}) => {
		https.request(urlString, httpsOptions, response => {
			response.resume();
			response.once('end', () => {
				deferred.resolve();
			});
		}).end();
	}
})
.add('@helperdiscord/centra - promise', {
	defer: true,
	fn: async (deferred: {resolve: () => void}) => {
		const req = c(url);
        req.coreOptions = httpsOptions;
        await req.send();
        deferred.resolve();
	}
}).on('cycle', (event: Benchmark.Event) => {
	console.log(String(event.target));
}).on('complete', function (this: any) {
	console.log(`Fastest is ${this.filter('fastest').map('name') as string}`);

}).run();


// Results (i7-7700k, CPU governor: performance):

// got - promise x 2,770 ops/sec ±6.67% (71 runs sampled)
// request - callback x 4,888 ops/sec ±7.46% (74 runs sampled)
// node-fetch - promise x 5,457 ops/sec ±3.33% (74 runs sampled)
// centra - promise x 8,263 ops/sec ±2.10% (84 runs sampled)
// https - stream x 7,453 ops/sec ±3.19% (78 runs sampled)
// @helperdiscord/centra - promise x 8,202 ops/sec ±1.30% (82 runs sampled)
// Fastest is @helperdiscord/centra - promise
