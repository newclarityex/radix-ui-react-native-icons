const path = require("path");
const fs = require("fs");

function defaultIndexTemplate(filePaths) {
  const exportEntries = filePaths.map(({ path: filePath, originalPath }) => {
    const basename = path.basename(filePath, path.extname(filePath));
    const kebabName = basename
      .replace(/([a-z])([A-Z0-9])/g, "$1-$2")
      .toLowerCase();

    return {
      import: `import ${basename} from "./icons/${basename}"`,
      entry: `  "${kebabName}": ${basename},`,
    };
  });
  return `
import React from "react";
${exportEntries.map((entry) => entry.import).join("\n")}

interface IconMap {
  [key: string]: React.ReactElement;
}

export const icons = {
${exportEntries.map((entry) => entry.entry).join("\n")}
} as const satisfies IconMap;
  `;
}

module.exports = defaultIndexTemplate;
