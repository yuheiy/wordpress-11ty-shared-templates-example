module.exports = {
	data() {
		return {};
	},
	render(data) {
		const post = data.fixtures.posts[0];
		return data.twing.render("single.twig", {
			...data,
			title: post.title,
			post,
		});
	},
};
