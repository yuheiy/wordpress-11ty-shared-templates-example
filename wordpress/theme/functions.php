<?php

declare(strict_types=1);

Timber::$dirname = ["templates", "assets"];

add_action("wp_head", function (): void {
	$manifest = vite_manifest();

	echo sprintf(
		'<link rel="icon" href="%s">',
		get_theme_file_uri("/assets/favicon.ico")
	) . "\n";

	foreach ($manifest["src/assets/main.js"]["css"] as $css_path) {
		echo sprintf(
			'<link rel="stylesheet" href="%s">',
			get_theme_file_uri("build/" . $css_path)
		) . "\n";
	}

	echo sprintf(
		'<script type="module" src="%s"></script>',
		get_theme_file_uri(
			"build/" . $manifest["src/assets/main.js"]["file"]
		)
	) . "\n";
});

function vite_manifest(): array
{
	return json_decode(
		file_get_contents(get_theme_file_path("build/manifest.json")),
		true
	);
}
