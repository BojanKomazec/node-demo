// https://www.npmjs.com/package/ansi-colors
const colors = require('ansi-colors');

function demo() {
    console.log(colors.red.bold.underline('this is a bold red underlined message'));
}

function packageDemoAnsiColors() {
    console.log(`Exported API: ${Object.keys(colors)}`);
    demo();
}

module.exports = {
    packageDemoAnsiColors : packageDemoAnsiColors
};