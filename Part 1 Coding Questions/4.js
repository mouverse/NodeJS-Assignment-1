let userInput = [1,2,3,4,5]

let result = userInput.filter(filter)

function filter(n) {
    if(n % 2 == 0){
        return n 
    }
}

console.log(result)