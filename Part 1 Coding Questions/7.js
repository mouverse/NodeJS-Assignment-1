let userInput = ["a","ab","abc"]

let output = userInput.map(lengthFinder)

function lengthFinder(n) {
    return n.length
}

console.log(output)