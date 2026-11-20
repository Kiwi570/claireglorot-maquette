#!/bin/bash
# Première mise en ligne de la maquette Claire Glorot (GitHub Kiwi570 puis Vercel).
set -e
cd ~/Downloads
unzip -q -o claireglorot-maquette-v1.zip
cd claireglorot-maquette
if [ "$(git rev-parse --show-toplevel 2>/dev/null)" != "$(pwd)" ]; then git init -q; fi
if [ "$(git rev-parse --show-toplevel)" != "$(pwd)" ]; then echo "ARRET : le dossier n est pas son propre depot git"; exit 1; fi
git add -A
git commit -q -m "Maquette v1 Claire Glorot"
git branch -M main
git remote remove origin 2>/dev/null || true
gh repo create claireglorot-maquette --public --source=. --remote=origin --push
npx vercel --prod --yes
npx vercel git connect || true
git add .gitignore 2>/dev/null || true
git commit -q -m "Fichier gitignore cree par Vercel" || true
git push -q || true
echo "TERMINE : https://claireglorot-maquette.vercel.app"
