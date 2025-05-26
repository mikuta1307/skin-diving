const fs = require('fs');
const path = require('path');

const DIST_DIR = path.join(__dirname, 'out');
const BASE_PATH = '/skin-diving';

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  content = content.replace(/(["'(= ])\/(svg|_next|images|styles|favicon)/g, `$1${BASE_PATH}/$2`);
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
console.log('✅ fix-paths.js: パスの修正が完了しました');
