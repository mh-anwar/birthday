#!/bin/bash

echo "Building Vite project..."
vite build

echo "Cloning birthday repo..."
mkdir temp
temp_dir=temp
git clone git@github.com:mh-anwar/birthday.git "$temp_dir"
cd "$temp_dir"

echo "Creating and updating temporary branch..."
git checkout -b temp-deploy
git rm -rf .
cp -r ../dist/* . # recursively copy all files from dist/
git add -A
git commit -m "Update /docs with latest build"

echo "Merging temporary branch into /docs..."
git checkout docs
git merge temp-deploy

echo "Pushing changes to /docs branch..."
git push origin docs

echo "Cleaning up..."
git branch -d temp-deploy
cd ..
rm -rf "$temp_dir"

echo "Deployment complete!"
