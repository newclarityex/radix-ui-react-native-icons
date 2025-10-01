curl --output "radix-icons.zip" "https://raw.githubusercontent.com/radix-ui/icons/master/radix-icons.zip";


# Unzip the downloaded file
unzip -o "radix-icons.zip" -d "radix-icons";
# Clean up the zip file
rm "radix-icons.zip";
# Iterate over the unzipped files and update the icon registry
npx @svgr/cli --typescript --native --no-prettier --expand-props end --index-template index-template.js --out-dir jsx-icons -- radix-icons

mv -f ./jsx-icons/index.ts ../src/IconRegistry.tsx
mv -f ./jsx-icons/* ../src/icons/

rm -rf radix-icons
rm -rf jsx-icons