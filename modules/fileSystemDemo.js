const fs = require("fs")

/**
 * Function which writes text into a file on disk.
 * It is implemented as a simple Promise wrapper around request API.
 * @param filePath Path to file.
 * @param text Text to be written in file.
 */
function writeFile(filePath, text) {
    return new Promise((resolve, reject) => {
        if (!filePath) {
            reject(new Error("filePath argument is NULL"));
        }

        fs.writeFile(filePath, text, (err: any) => {
            if (err) {
                reject(err);
            } else {
                console.log("Text successfully written to file.");
                resolve();
            }
        });
    });
}



