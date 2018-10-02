// https://nodejs.org/api/child_process.html
const childProcess = require('child_process');

function demoPing() {
    let command = 'ping 8.8.8.8';
    let options = null;
    childProcess.exec(command, options, function (err, stdout, stderr) {
        if (stdout) {
            console.log(stdout);
        }
        if (stderr) {
            console.log(stderr);
        }
        if (err) {
            console.log(err.code);
        }
    });
}

function demoOptions() {
    let command = 'echo %TEMP_ENV_VAR%';
    let options = { env : { TEMP_ENV_VAR : 'Boom!' }};
    childProcess.exec(command, options, function (err, stdout, stderr) {
        if (stdout) {
            console.log(stdout);
        }
        if (stderr) {
            console.log(stderr);
        }
        if (err) {
            console.log(err.code);
        }
    });
}

function moduleDemoChildProcess() {
    console.log(`Exported API: ${Object.keys(childProcess)}`);
    demoPing();
    demoOptions();
}

module.exports = {
    moduleDemoChildProcess : moduleDemoChildProcess
};