function processDemo() {
    processArgvDemo();
    processEnvDemo();
}

function processArgvDemo() {
    console.log(process.argv);
}


function processEnvDemo() {
    console.log(process.env);
}

module.exports = {
    processDemo : processDemo
};