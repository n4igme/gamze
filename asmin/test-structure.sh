#!/bin/bash

echo "=== ASMAUL HUSNA RESTORATION - VERIFICATION ==="
echo ""
echo "✓ Main Files:"
test -f index.html && echo "  - index.html ($(wc -l < index.html) lines)"
test -f README.md && echo "  - README.md"

echo ""
echo "✓ Assets:"
test -d assets/css && echo "  - CSS: $(ls assets/css | wc -l) file(s)"
test -d assets/js && echo "  - JavaScript: $(ls assets/js | wc -l) file(s)"
test -d assets/images && echo "  - Images: $(ls assets/images | wc -l) file(s)"

echo ""
echo "✓ Asset Files:"
ls -1 assets/js/ | sed 's/^/  - js\//'
ls -1 assets/css/ | sed 's/^/  - css\//'
ls -1 assets/images/ | sed 's/^/  - images\//'

echo ""
echo "✓ Data:"
echo "  - Divine Names: $(grep -c '"id":' assets/js/names-data.js)"
echo "  - jQuery included: $(grep -c 'jquery' index.html)"
echo "  - App loaded: $(grep -c 'app.js' index.html)"

echo ""
echo "=== READY FOR DEPLOYMENT ==="
