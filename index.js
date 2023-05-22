const sum = require('./utils/sum.js')
const subtract = require('./utils/subtract.js')


// define the main
function main() {
    const sumResult = sum(1, 2)
    console.log('1 + 2 = 3', sumResult)

    const sumSubtract = subtract(3, 1)
    console.log('3 - 1 = 2', sumSubtract)
}

// call the main
main()