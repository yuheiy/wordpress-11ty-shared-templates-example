<?php

declare(strict_types=1);

$context = Timber::context();
$context["post"] = Timber::get_post();

Timber::render("single.twig", $context);
