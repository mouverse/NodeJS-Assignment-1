let userInput = {
    name: "John",
    age: 30
}

function findKeys(object) {
    return Object.keys(object)
}

console.log(findKeys(userInput))