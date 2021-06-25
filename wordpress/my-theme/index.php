<?php

declare(strict_types=1);

$context = Timber::context();
$context["is_home"] = true;

Timber::render("index.twig", $context);
