// https://nodejs.org/api/path.html
const path = require('path');

function demo() {
    const path1 = 'a/b/';
    const path2 = 'c/d/file.txt';
    console.log(`path: ${path.join(path1, path2)}`);
}

function moduleDemoPath() {
    console.log(`Exported API: ${Object.keys(path)}`);
    demo();
}

module.exports = {
    moduleDemoPath : moduleDemoPath
};