#!/bin/bash

set -e

rm -rf theme/assets theme/build theme/manifest.json
npm install --prefix ../frontend
npm run build-assets --prefix ../frontend
cp -r ../frontend/dist/wp-content/themes/theme/ theme/
cp -r ../frontend/src/assets/components/ theme/assets/components/
