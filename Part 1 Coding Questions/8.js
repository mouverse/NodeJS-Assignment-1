let userInput = 15

function checkDivision(n) {
    if(n % 3 == 0 && n % 5 == 0 ){
        console.log("Divisible by both")
    }else{
        console.log("Not divisible by both.")
    }
}

checkDivision(userInput)