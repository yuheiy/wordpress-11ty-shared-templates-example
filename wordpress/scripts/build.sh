#!/bin/bash

set -e

# twig templates, images, etc
rm -rf theme/assets
cp -r ../frontend/src/assets theme/assets

# build files
rm -rf theme/build
npm install --prefix ../frontend
npm run build-assets --prefix ../frontend
cp -r ../frontend/dist/wp-content/themes/theme/build theme/build
