// https://www.npmjs.com/package/replace-in-file
const replace = require('replace-in-file');

function demo() {
    const fs = require('fs');
    const filePath = 'temp_from_node_demo_3.txt';
    fs.writeFileSync(filePath, 'Bojankomazec');
    let currentText = fs.readFileSync(filePath);
    console.log(`Current content: ${currentText}`);

    replace.sync({
        from: 'Bojankomazec',
        to: 'Bojan Komazec',
        files: [filePath],
    });

    currentText = fs.readFileSync(filePath);
    console.log(`Current content: ${currentText}`);

    fs.unlinkSync(filePath);
}

function packageDemoReplaceInFile() {
    console.log(`Exported API: ${Object.keys(replace)}`);
    demo();
}

module.exports = {
    packageDemoReplaceInFile : packageDemoReplaceInFile
};
