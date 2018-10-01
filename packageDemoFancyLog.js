// https://www.npmjs.com/package/fancy-log
const fancyLog = require('fancy-log');

function demo() {
    console.log('This is message sent to console.log');
    fancyLog('This is message sent to fancyLog');
}

function packageDemoFancyLog() {
    console.log(`Exported API: ${Object.keys(fancyLog)}`);
    demo();
}

module.exports = {
    packageDemoFancyLog : packageDemoFancyLog
};
