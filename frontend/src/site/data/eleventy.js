const { promises: fsPromises } = require("fs");

const isProd = process.env.ELEVENTY_ENV === "production";

module.exports = async () => {
	let manifest = null;

	if (isProd) {
		manifest = JSON.parse(
			await fsPromises.readFile("dist/wp-content/themes/theme/manifest.json")
		);
	}

	return {
		is_dev: !isProd,
		manifest
	};
};
