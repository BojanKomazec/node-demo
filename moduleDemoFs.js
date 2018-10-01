// https://nodejs.org/api/fs.html#fs_file_system
const fs = require('fs');

function logExistence(path) {
    if (fs.existsSync(path)) {
        console.log(`'${path}' exists.`);
    } else {
        console.log(`'${path}' does not exist.`);
    }
}

function demo() {
    const filepath = 'temp_from_node_demo_2.txt';
    logExistence(filepath);

    // create an empty file

    // next two commands end up writing 'undefined' string in the file
    // because 2nd argument (string or data to be written) is mandatory.
    // fs.writeFileSync(filepath); 
    // fs.appendFileSync(filepath);
    fs.closeSync(fs.openSync(filepath, 'w'));

    logExistence(filepath);

    const objectToBeSerialized = {
        name : 'Bojan',
        surname : 'Komazec'
    };

    // add some JSON to it
    let json = JSON.stringify(objectToBeSerialized);
    console.log(`json = ${json}`);
    fs.writeFileSync(filepath, json);
    // fs.appendFileSync(filepath, json); // to append the content if needed

    // get some stats about that file
    const stats = fs.statSync(filepath);
    const fileSizeInBytes = stats.size;
    console.log(`File size: ${fileSizeInBytes} bytes`);

    // now deserialize its content into JSON object
    const deserializedObject = JSON.parse(fs.readFileSync(filepath));
    console.log(`Deserialized object: ${JSON.stringify(deserializedObject)}`);

    // delete file
    fs.unlinkSync(filepath);

    logExistence(filepath);
}

function moduleDemoFs() {
    console.log(`Exported API: ${Object.keys(fs)}`);
    demo();
}

module.exports = {
    moduleDemoFs : moduleDemoFs
};