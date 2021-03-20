import { Agent } from "https";
import type { AgentOptions } from "https";

export const agentConfig: AgentOptions = {
	keepAlive: true,
	rejectUnauthorized: false
};

const httpsAgent = new Agent(agentConfig);

export const gotOptions = {
	agent: {https: httpsAgent},
	https: {rejectUnauthorized: false},
	retry: 0
};
export const requestOptions = {
	strictSSL: false,
	agent: httpsAgent
};
export const fetchOptions = {agent: httpsAgent};
export const httpsOptions = {
	https: {rejectUnauthorized: false},
	agent: httpsAgent
};
