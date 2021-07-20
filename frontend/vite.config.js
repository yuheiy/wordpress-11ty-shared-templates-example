/**
 * @type {import("vite").UserConfig}
 */
export default {
	base: "/wp-content/themes/theme/",
	logLevel: "warn",
	build: {
		outDir: "dist/wp-content/themes/theme",
		assetsDir: "build",
		rollupOptions: {
			input: "src/assets/main.js",
		},
		manifest: true,
	},
};
