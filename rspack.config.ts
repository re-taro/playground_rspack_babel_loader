import { defineConfig } from "@rspack/cli";

export default defineConfig({
	entry: {
		main: "./src/index.ts"
	},
	output: {
		filename: "bundle.js",
		path: "./dist"
	},
	resolve: {
		extensions: ["...", ".ts"]
	},
	module: {
		rules: [
			{
				loader: 'babel-loader',
			},
			{
				loader: 'builtin:swc-loader',
				options: {
					jsc: {
						parser: {
							syntax: 'typescript',
							tsx: true,
							decorators: true
						},
						target: 'es2017',
						keepClassNames: true,
						transform: {
							decoratorMetadata: true,
							legacyDecorator: true,
							react: {
								runtime: 'automatic'
							}
						}
					},
					module: {
						type: 'es6'
					},
					sourceMaps: true,
				},
			},
		]
	},
	mode: "development"
});
