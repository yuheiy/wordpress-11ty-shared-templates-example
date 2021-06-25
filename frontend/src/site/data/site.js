// Fake object of Timber\Site
// https://timber.github.io/docs/reference/timber-site/
// https://github.com/timber/timber/blob/1.18.2/lib/Site.php
module.exports = {
	// Properties
	admin_email: "wordpress@example.com",
	charset: "UTF-8",
	description: "Just another WordPress site",
	get id() {
		throw new Error("not implemented");
	},
	language: "ja",
	multisite: false,
	name: "wordpress",
	pingback_url: "https://example.com/xmlrpc.php",
	get theme() {
		throw new Error("not implemented");
	},
	get title() {
		throw new Error("not implemented");
	},
	rdf: "https://example.com/?feed=rdf",
	// Methods
	link: "https://example.com",
};
