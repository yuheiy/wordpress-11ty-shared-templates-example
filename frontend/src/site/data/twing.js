const { promises: fsPromises } = require("fs");
const globby = require("globby");
const path = require("path");
const { TwingEnvironment, TwingLoaderArray } = require("twing");

module.exports = async () => {
	const templates = Object.assign(
		{},
		...(await Promise.all([
			loadFrom(path.join(__dirname, "../../assets"), "components/**/*.twig"),
			loadFrom(path.join(__dirname, "../includes"), "**/*.twig"),
		]))
	);
	const loader = new TwingLoaderArray(templates);
	const environment = new TwingEnvironment(loader);
	return environment;
};

async function loadFrom(dir, pattern) {
	const result = {};
	const paths = await globby(path.join(dir, pattern));
	await Promise.all(
		paths.map(async (path_) => {
			const key = path.relative(dir, path_);
			const content = await fsPromises.readFile(path_, "utf-8");
			result[key] = content;
		})
	);
	return result;
}
