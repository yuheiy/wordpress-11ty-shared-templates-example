<?php

declare(strict_types=1);

Timber::$dirname = "templates";

add_action("wp_head", function (): void {
	$manifest = asset_manifest();

	echo sprintf(
		'<link rel="icon" href="%s">',
		get_theme_file_uri("/assets/favicon.ico")
	) . "\n";

	foreach ($manifest["src/main.js"]["css"] as $css) {
		echo sprintf(
			'<link rel="stylesheet" href="%s">',
			get_theme_file_uri($css)
		) . "\n";
	}

	echo sprintf(
		'<script type="module" src="%s"></script>',
		get_theme_file_uri($manifest["src/main.js"]["file"])
	) . "\n";
});

function asset_manifest(): array
{
	return json_decode(
		file_get_contents(get_theme_file_path("/manifest.json")),
		true
	);
}
