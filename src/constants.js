import { Agent } from 'http';
import undici from 'undici';

export const defer = { defer: true };

export const agentConfig = { keepAlive: true };
export const base = 'http://localhost:8080';

export const undiciClient = new undici.Client(base);

export const gotOptions = {
    agent: { http: new Agent(agentConfig) },
    retry: 0
};
export const requestOptions = { agent: new Agent(agentConfig) };
export const fetchOptions = { agent: new Agent(agentConfig) };
export const httpOptions = { agent: new Agent(agentConfig) };
export const axiosOptions = {
    url: base,
    method: 'GET',
    httpAgent: new Agent(agentConfig)
};
export const httpRequestOptions = {
    agent: new Agent(agentConfig),
    protocol: 'http:',
    hostname: 'localhost',
    method: 'GET',
    path: '/',
    url: base,
    port: 8080
}