#!/bin/bash
export PATH="/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin:/opt/homebrew/bin:$PATH"

git ls-files --stage | awk '$1 == "160000"' | cut -f2 | while IFS= read -r folder; do
  echo "Processing $folder..."
  git rm --cached "$folder"
  rm -rf "$folder/.git"
  git add "$folder"
done

git commit -m "fix(git): remove submodules in Projetos/ and replace with regular folders"
git push
