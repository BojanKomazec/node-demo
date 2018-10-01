function demo() {
    var json = {
        'person' : {
            'name' : 'Bojan',
            'surname' : 'Komazec'
        },
        'address' : {},
        'hasPilotLicense' : false,
        'hasDrivingLicense' : true,
        'hasSpaceShuttleLicense' : null
    };
    
    var json_person_empty = {
        'person' : {}
    };
    
    var json_person_null = {
        'person' : null
    };
    
    
    //
    // Retrieve the value of the property and check if it's true or false.
    // WRONG! Because existing properties can also return 'false'.
    //
    
    console.log('Retrieve the value of the property and check if it\'s true or false: ');
    
    var job = json['job'];
    if (job) {
        console.log('Json contains property \'job\'');
    } else {
        console.log('Json does not contain property \'job\'');
    }
    
    var hasPilotLicense = json['hasPilotLicense'];
    if (hasPilotLicense) {
        console.log('Json contains property \'hasPilotLicense\'');
    } else {
        console.log('Json does not contain property \'hasPilotLicense\'');
    }
    
    console.log();
    
    //
    // Use 'in' operator.
    // WRONG! As it returns 'true' for properites implicitly inherited from the object's hierarchy (like 'toString').
    //
    
    console.log('Use \'in\' operator:');
    
    if ('job' in json) {
        console.log('Json contains property \'job\'');
    } else {
        console.log('Json does not contain property \'job\'');
    }
    
    if ('hasPilotLicense' in json) {
        console.log('Json contains property \'hasPilotLicense\'');
    } else {
        console.log('Json does not contain property \'hasPilotLicense\'');
    }
    
    if ('toString' in json) {
        console.log('Json contains property \'toString\'');
        console.log('json.toString = ' + json.toString);
        console.log('json.toString() = ' + json.toString());
    } else {
        console.log('Json does not contain property \'toString\'');
    }
    
    console.log();
    
    //
    // Using dot (.) operator.
    // WRONG! As expression returns false if existing property is boolean and has value 'false'
    //
    
    console.log('Use \'.\' operator:');
    
    if (json.job) {
        console.log('Json contains property \'job\'');
    } else {
        console.log('Json does not contain property \'job\'');
    }
    
    if (json.hasPilotLicense) {
        console.log('Json contains property \'hasPilotLicense\'');
    } else {
        console.log('Json does not contain property \'hasPilotLicense\'');
    }
    
    console.log();
    
    //
    // Use 'hasOwnProperty' operator.
    // Probably the most suitable for checking if JSON contains some property as it returns false for those properties whcih are
    // implicitly inherited.
    //
    
    console.log('Use \'hasOwnProperty\' operator:');
    
    if (json.hasOwnProperty('job')) {
        console.log('Json contains property \'job\'');
    } else {
        console.log('Json does not contain property \'job\'');
    }
    
    if (json.hasOwnProperty('hasPilotLicense')) {
        console.log('Json contains property \'hasPilotLicense\'');
    } else {
        console.log('Json does not contain property \'hasPilotLicense\'');
    }
    
    if (json.hasOwnProperty('toString')) {
        console.log('Json contains property \'toString\'');
    } else {
        console.log('Json does not contain property \'toString\'');
    }
    
    console.log();
    
    console.log('json.keys = ' + json.keys);
    console.log('Object.keys(json) = ' + Object.keys(json));
    
    
    console.log();
    
    console.log('Checking nested properties:');
    
    //
    // Seems both approaches are acceptable:
    //
    
    if (json.hasOwnProperty('person')) {
        if (json.person.hasOwnProperty('name')) {
            console.log('Json.person contains property \'name\'');
        } else {
            console.log('Json.person does not contain property \'name\'');
        }
    }
    
    if (json.hasOwnProperty('person')) {
        if (json['person'].hasOwnProperty('name')) {
            console.log('Json.person contains property \'name\'');
        } else {
            console.log('Json.person does not contain property \'name\'');
        }
    }
    
    if (json_person_empty.hasOwnProperty('person')) {
        if (json_person_empty.person.hasOwnProperty('name')) {
            console.log('json_person_empty.person contains property \'name\'');
        } else {
            console.log('json_person_empty.person does not contain property \'name\'');
        }
    }
    
    // if (json_person_empty.hasOwnProperty('person')) {
    //     if (json_person_empty['person'].hasOwnProperty('name')) {  // <-- json_person_empty['person'] is null! => TypeError: Cannot read property 'hasOwnProperty' of null
    //         console.log('json_person_empty.person contains property \'name\'');
    //     } else {
    //         console.log('json_person_empty.person does not contain property \'name\'');
    //     }
    // }
    
    if (json_person_empty.hasOwnProperty('person')) {
        var person = json_person_empty['person'];
        if (person && person.hasOwnProperty('name')) {
            console.log('json_person_empty.person contains property \'name\'');
        } else {
            console.log('json_person_empty.person does not contain property \'name\'');
        }
    }
    
    // if (json_person_null.hasOwnProperty('person')) {
    //     if (json_person_null.person.hasOwnProperty('name')) { // <-- TypeError: Cannot read property 'hasOwnProperty' of null
    //         console.log('json_person_null.person contains property \'name\'');
    //     } else {
    //         console.log('json_person_null.person does not contain property \'name\'');
    //     }
    // }
    
    if (json_person_null.hasOwnProperty('person')) {
        if (json_person_null.person && json_person_null.person.hasOwnProperty('name')) {
            console.log('json_person_null.person contains property \'name\'');
        } else {
            console.log('json_person_null.person does not contain property \'name\'');
        }
    }
    
    // if (json_person_null.hasOwnProperty('person')) {
    //     if (json_person_null['person'].hasOwnProperty('name')) { // <-- TypeError: Cannot read property 'hasOwnProperty' of null
    //         console.log('json_person_null.person contains property \'name\'');
    //     } else {
    //         console.log('json_person_null.person does not contain property \'name\'');
    //     }
    // }
    
    console.log();
    
    var boolFalseValue = false;
    
    if (boolFalseValue) {
        console.log('boolFalseValue is true');
    } else {
        console.log('boolFalseValue is false');
    }
    
    // JSON is null
    var nullObject = null;
    
    if (nullObject) {
        console.log('nullObject is true');
    } else {
        console.log('nullObject is false');
    }
    
    if (json.hasSpaceShuttleLicense) {
        console.log('json.hasSpaceShuttleLicense is true');
    } else {
        console.log('json.hasSpaceShuttleLicense is false'); // although the value is actually 'null'!!!
    }
    
    if (json.hasSpaceShuttleLicense == null) {
        console.log('json.hasSpaceShuttleLicense is null');
    } else {
        console.log('json.hasSpaceShuttleLicense is not null');
    }
    
    var json_empty = {};
    
    if (json_empty) {
        console.log('json_empty is true'); // this is printed out
    } else {
        console.log('json_empty is false');
    }
    
    if (Object.keys(json_empty) == 0) {
        console.log('json_empty has no properties (JSON is empty)'); // this is printed out
    } else {
        console.log('json_empty has some properties (JSON is not empty)');
    }
}

//
// JSON.parse() turns json string into JS object

function jsonParseDemo() {
    var malformedJson = '{ \'name\' : \'Bojan\', \'surname\' }';
    var personObject = null;

    try {
        personObject = JSON.parse(malformedJson);
    } catch(e) {
        console.log('Exception caught: ' + e);
    }

    if (personObject == null) {
        console.log('JSON string is malformed.');
    } else {
        console.log('JSON string is valid.');
    }
}

function jsonManipulationDemo() {
    demo();
    jsonParseDemo();
}

module.exports = {
    jsonManipulationDemo : jsonManipulationDemo
};