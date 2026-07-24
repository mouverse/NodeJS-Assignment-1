let userInput = [1,2,3,4,5]
let total = 0
function sum(...userInput){
    for(let i = 0;i < userInput.length;i++){
        total += userInput[i];
    }
    return total
}

console.log(sum(...userInput))