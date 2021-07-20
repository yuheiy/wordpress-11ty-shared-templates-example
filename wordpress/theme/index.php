<?php

$context = Timber::context();
$context["is_home"] = true;

Timber::render("index.twig", $context);
