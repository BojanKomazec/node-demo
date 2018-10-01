// https://www.npmjs.com/package/del

const del = require('del');
const fs = require('fs'); // used to create a file

function logExistence(path) {
    if (fs.existsSync(path)) {
        console.log(`'${path}' exists.`);
    } else {
        console.log(`'${path}' does not exist.`);
    }
}

function demoDel() {
    const fileName = 'temp_from_node_demo.txt';
    fs.writeFileSync(fileName);
    logExistence(fileName);
    del('temp*.*')
        .then(() => {
            console.log('File deleted');
            logExistence(fileName);
        })
        .catch(() => console.log('Failed to delete file'));
    
}

function packageDemoDel() {
    console.log(`Exported API: ${Object.keys(del)}`);
    demoDel();
}

module.exports = {
    packageDemoDel : packageDemoDel
};
