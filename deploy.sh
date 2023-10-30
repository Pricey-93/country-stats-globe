git checkout main
git pull
git push
npm run build
git add dist -f
git commit -m "Update dist"
git subtree push --prefix dist origin gh-pages