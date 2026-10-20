#!/usr/bin/env bash
# MINIATURAS: crea img/thumbs/<nombre>.webp (máx. 900 px de ancho) para cada imagen de
# img/diseno e img/digital, y escribe js/data/thumbs.js con el tamaño de cada miniatura
# (sirve para acomodar la galería sin saltos). Requiere ffmpeg y ffprobe.
# Uso (desde la carpeta del portafolio, en Git Bash):  bash tools/miniaturas.sh
set -euo pipefail
cd "$(dirname "$0")/.."
mkdir -p img/thumbs

out="js/data/thumbs.js"
{
  echo "/* GENERADO por tools/miniaturas.sh: tamaño [ancho, alto] de cada miniatura. No editar a mano. */"
  echo "const THUMBS = {"
} > "$out"

for f in img/diseno/* img/digital/*; do
  [ -f "$f" ] || continue
  name=$(basename "${f%.*}")
  thumb="img/thumbs/$name.webp"
  if [ ! -f "$thumb" ] || [ "$f" -nt "$thumb" ]; then
    ffmpeg -loglevel error -y -i "$f" -vf "scale='min(900,iw)':-2" -c:v libwebp -quality 80 "$thumb"
    echo "miniatura: $thumb"
  fi
  size=$(ffprobe -v error -select_streams v:0 -show_entries stream=width,height -of csv=p=0:s=, "$thumb")
  echo "  \"$name\": [$size]," >> "$out"
done

echo "};" >> "$out"
echo "listo: $out"
