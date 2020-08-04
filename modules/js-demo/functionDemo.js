// https://softwareengineering.stackexchange.com/questions/225682/is-it-a-bad-idea-to-return-different-data-types-from-a-single-function-in-a-dyn
function returnDiffTypes(n) {
    switch(n) {
    case 0:
        return;
    case 1:
        return 1;
    case 2:
        return '2';
    }
}

function demo() {
    console.log('returnDiffTypes(0) = ', returnDiffTypes(0)); // undefined
    console.log('returnDiffTypes(1) = ', returnDiffTypes(1)); // 1
    console.log('returnDiffTypes(2) = ', returnDiffTypes(2)); // 2
}

module.exports = {
    functionDemo: demo
};