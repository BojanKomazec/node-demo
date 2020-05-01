const request = require('request');
const axios = require('axios');

/**
 * Function which fetches http response asynchronously.
 * It is implemented as a simple Promise wrapper around request API.
 * @param url Request URL.
 */
function fetchData(url) {
    return new Promise((resolve, reject) => {
        if (!url) {
            reject(ErrorFactory.createInvalidArgumentError("url"));
        }

        request(url, (error, response, body) => {
            if (error) {
                reject(error);
            } else {
                if (response) {
                    console.log("statusCode: ", response.statusCode);
                    if (body) {
                        resolve(body);
                    } else {
                        reject(new Error("body is empty"));
                    }
                } else {
                    reject(new Error("response is empty"));
                }
            }
        });
    });
}

async function requestDemo() {
    try {
        const responseBody = await fetchData('https://www.reddit.com/r/nodejs.json');
        console.log(`responseBody: ${responseBody}`);
    } catch (err) {
        console.log(`fetchData() failed. Error: ${err}`);
    }
}

async function axiosDemo() {
    try {
        // const response = await axios.get('https://www.reddit.com/r/nodejs.json');
        console.log(`request headers: ${JSON.stringify(axios.defaults.headers)}`);
        const response = await axios.get('https://google.com');
        // console.log(`response: ${JSON.stringify(response.data, null, 2)}`);
        console.log(`response headers: ${JSON.stringify(response.headers)}`);
    } catch (err) {
        console.log(`axios.get() failed. Error: ${err}`);
    }
}

function demo() {
    console.log("httpClientDemo.demo()");
    //requestDemo();
    axiosDemo();
}

module.exports = {
    httpClientDemo: demo
}
