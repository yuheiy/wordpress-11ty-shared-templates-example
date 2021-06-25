const { promises: fsPromises } = require("fs");
const path = require("path");

const isProd = process.env.ELEVENTY_ENV === "production";

const manifestPath = path.join(
	__dirname,
	"../../../dist/wp-content/themes/my-theme/manifest.json"
);

module.exports = async () => {
	let manifest = null;

	if (isProd) {
		manifest = JSON.parse(await fsPromises.readFile(manifestPath));
	}

	return {
		is_dev: !isProd,
		manifest,
	};
};
