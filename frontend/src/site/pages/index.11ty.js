module.exports = {
	data() {
		return {
			is_home: true,
		};
	},
	render(data) {
		return data.twing.render("index.twig", data);
	},
};
