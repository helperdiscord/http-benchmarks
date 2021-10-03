import bench from 'benchmark';
import petitio from 'petitio';
import axios from 'axios';
import centra from 'centra';
import fetch from 'node-fetch';
import got from 'got';
import request from 'request';
import * as http from 'http';

import { Writable } from 'stream';

import { undiciClient, defer, axiosOptions, base, fetchOptions, gotOptions, requestOptions, httpOptions, httpRequestOptions } from './constants.js';

new bench.Suite()
    .add('petitio', async (deferred) => {
        await petitio(base)
            .client(undiciClient, true)
            .send();
        deferred.resolve();
    }, defer)
    .add('axios', async deferred => {
        await axios(axiosOptions);
        deferred.resolve();
    }, defer)
    .add('got', async deferred => {
        await got(base, gotOptions);
        deferred.resolve();
    }, defer)
    .add('request', async deferred => {
        request(base, requestOptions, () => deferred.resolve());
    }, defer)
    .add('centra', async deferred => {
        const req = centra(base, 'GET');
        req.coreOptions = httpOptions;
        await req.send();
        deferred.resolve();
    }, defer)
    /*.add('node-fetch', async (deferred) => {
		// await fetch(base, fetchOptions); - this apparently mem leaks
        const res = await fetch(base, fetchOptions);
        await res.buffer();
		deferred.resolve();
	}, defer)*/
    .add('native/http', async deferred => {
        http.get(httpRequestOptions, res => {
            res
                .pipe(new Writable({ write(chunk, encoding, callback) { callback() } }))
                .on('finish', () => deferred.resolve());
        });
    }, defer)
    .on('cycle', (event) => console.log(event.target.toString()))
    .run({ async: true });
