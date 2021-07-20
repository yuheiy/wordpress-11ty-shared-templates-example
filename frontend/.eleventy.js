module.exports = (eleventyConfig) => {
	eleventyConfig.addWatchTarget("src/assets/components/**/*.twig");

	eleventyConfig.setBrowserSyncConfig({
		server: null, // override
		proxy: "localhost:3000",
		serveStatic: ["dist"],
		ui: false,
		ghostMode: false,
	});

	return {
		dir: {
			input: "src/site/pages",
			includes: "../includes",
			layouts: "../layouts",
			data: "../data",
			output: "dist",
		},
	};
};
