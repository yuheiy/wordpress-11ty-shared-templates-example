/**
 * @type {import("vite").UserConfig}
 */
export default {
	base: "/wp-content/themes/my-theme/",
	logLevel: "warn",
	server: {
		open: false,
	},
	build: {
		outDir: "dist/wp-content/themes/my-theme",
		rollupOptions: {
			input: "src/main.js",
		},
		manifest: true,
	},
};
