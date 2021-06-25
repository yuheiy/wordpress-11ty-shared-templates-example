// Fake object of Timber\Theme
// https://timber.github.io/docs/reference/timber-theme/
// https://github.com/timber/timber/blob/1.18.2/lib/Theme.php
module.exports = {
	// Properties
	name: "My Theme",
	version: "0.0.0",
	get parent() {
		throw new Error("not implemented");
	},
	get parent_slug() {
		throw new Error("not implemented");
	},
	slug: "my-theme",
	// Methods
	get display() {
		throw new Error("not implemented");
	},
	get get() {
		throw new Error("not implemented");
	},
	link: "https://example.com/wp-content/themes/my-theme",
	path: "/wp-content/themes/my-theme",
};
