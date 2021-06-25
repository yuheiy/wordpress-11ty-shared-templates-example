#!/bin/bash

set -e

# twig templates
rm -rf my-theme/templates/components
cp -r ../frontend/src/components my-theme/templates/components
find my-theme/templates/components -type f ! -name *.twig | xargs rm

# assets
rm -rf my-theme/assets my-theme/manifest.json
npm install --prefix ../frontend
npm run build-assets --prefix ../frontend
cp -r ../frontend/dist/wp-content/themes/my-theme/ my-theme
