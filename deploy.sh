#!/bin/bash

echo "Building Vite project..."
vite build

echo "Cloning birthday repo..."
mkdir temp
temp_dir=temp
git clone git@github.com:mh-anwar/birthday.git "$temp_dir"
cd "$temp_dir"

echo "Recreating docs branch..."
git branch -D docs
git checkout -b docs

echo "Copying files from dist/ to /docs..."
git rm -rf .
cp -r ../dist/* . # recursively copy all files from dist/
git add -A
git commit -m "Update /docs with latest build"


echo "Pushing changes to /docs branch..."
git push origin docs -f #haha. (I know, I shouldn't do this)

echo "Cleaning up..."
cd ..
rm -rf "$temp_dir"

echo "Deployment complete!"
