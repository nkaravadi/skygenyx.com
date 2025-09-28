#!/bin/bash

echo "🚀 Generating favicon files..."

echo "🔹 Creating favicon.ico..."
convert -background none public/favicon.svg -define icon:auto-resize=16,32,48 public/favicon.ico

echo "🔹 Creating PNG versions..."
convert -background none public/favicon.svg -resize 16x16 public/favicon-16x16.png
convert -background none public/favicon.svg -resize 32x32 public/favicon-32x32.png
convert -background none public/favicon.svg -resize 180x180 public/apple-touch-icon.png

echo "🔹 Copying for Safari..."
cp public/favicon.svg public/safari-pinned-tab.svg

echo "✅ Favicons generated successfully!"
echo "\nAdd this to your index.html head section:"
echo '
<!-- Favicon for most browsers -->
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link rel="icon" type="image/x-icon" href="/favicon.ico" />

<!-- Apple Touch Icons for iOS and Safari -->
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#2563eb">

<!-- Favicon for legacy browsers -->
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">

<!-- Theme color for mobile browsers -->
<meta name="theme-color" content="#ffffff">
<meta name="msapplication-TileColor" content="#2563eb">
'

echo "\nTo make the script executable, run:"
echo "chmod +x generate-favicons.sh"
echo "\nThen run it with:"
echo "./generate-favicons.sh"
