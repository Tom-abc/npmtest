import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["src/index.ts"],
	format: ["cjs", "esm"],
	dts: true,
	clean: true,
	minify: true,
	target: "es5",
	shims: true,
	outExtension({ format }) {
		return { js: `.${format === "cjs" ? "cjs" : "mjs"}` };
	},
});
