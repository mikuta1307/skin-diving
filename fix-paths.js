const fs = require('fs');
const path = require('path');

const DIST_DIR = path.join(__dirname, 'out');
const BASE_PATH = '/skin-diving';

// GitHub Pages のときだけ修正を実行
if (process.env.TARGET_ENV !== 'github') {
  process.exit(0);
}

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');

  content = content.replace(/(href=|src=|url\()?"\/(svg|_next|images|styles|favicon)/g, (match, prefix = '', folder) => {
    return `${prefix}"${BASE_PATH}/${folder}`;
  });

  fs.writeFileSync(filePath, content);
}

function walk(dir) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (/\.(html|js|css)$/.test(fullPath)) {
      replaceInFile(fullPath);
    }
  });
}

walk(DIST_DIR);
