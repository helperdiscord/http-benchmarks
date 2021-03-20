import { build } from "esbuild";

build({
	entryPoints: ["src/index.ts", "src/constants.ts", "src/server.ts"],
	outdir: "dist",
	platform: "node",
	treeShaking: "ignore-annotations",
	tsconfig: "./tsconfig.json"
}).catch((err) => console.error(err));
