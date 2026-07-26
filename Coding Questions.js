// ========== Question 1 ==========
let string = "130"
let number = Number(string)
console.log(number) 

// I can do console.log(Number(string)) aswell

// ========== Question 2 ==========
let userInput = "Hello"

if (userInput) {
    console.log("Truthy Value!")
}else{
    console.log("Invalid")
}

// ========== Question 3 ==========
for(let i = 1; i<=10 ;i++){
    if(i % 2 == 1){
        console.log(i)
    }
}

// ========== Question 4 ==========
let userInput = [1,2,3,4,5]

let result = userInput.filter(filter)

function filter(n) {
    if(n % 2 == 0){
        return n 
    }
}

console.log(result)

// ========== Question 5 ==========
let firstArray = [1,2,3]
let secondArray = [4,5,6]

let mergedArray = [...firstArray, ...secondArray]

console.log(mergedArray)

// ========== Question 6 ==========
let userInput = 21

switch (userInput) {
    case 1:
        console.log("Sunday")
        break;
    case 2:
        console.log("Monday")
        break;
    case 3:
        console.log("Tuesday")
        break;
    case 4:
        console.log("Wednesday")
        break;
    case 5:
        console.log("Thursday")
        break;
    case 6:
        console.log("Friday")
        break;
    case 7:
        console.log("Saturday")
        break;
    default:
        console.log("Wrong Input")
        break;
}

// ========== Question 7 ==========
let userInput = ["a","ab","abc"]

let output = userInput.map(lengthFinder)

function lengthFinder(n) {
    return n.length
}

console.log(output)

// ========== Question 8 ==========
let userInput = 15

function checkDivision(n) {
    if(n % 3 == 0 && n % 5 == 0 ){
        console.log("Divisible by both")
    }else{
        console.log("Not divisible by both.")
    }
}

checkDivision(userInput)

// ========== Question 9 ==========
let userInput = 10

let output = (n) => n * n

console.log(output(userInput))

// ========== Question 10 ==========
const person = {
    name: "John",
    age: 25
}

function destruct(person) {
    let {name,age} = person;
    return name + " " + "is " + age + " years old"
}

console.log(destruct(person))

// ========== Question 11 ==========
let userInput = [1,2,3,4,5]
let total = 0
function sum(...userInput){
    for(let i = 0;i < userInput.length;i++){
        total += userInput[i];
    }
    return total
}

console.log(sum(...userInput))

// ========== Question 12 ==========
function getSuccessMessage() {
    setTimeout(() => {
      console.log("Success");
    }, 3000);
  }

  getSuccessMessage()

  // انا كنت هعملها بـ Set Interval 
  // ولكن لما سرشت لقيت التايم اوت احسن لانها بتنفذ الكود مرة واحدة انما عن طريق الانترفل هنضطر نعمل فانكشن ونطلع منها عشان اللوب

// ========== Question 13 ==========
let userInput = [1, 3, 7, 2, 4];

function firstLargest(n) {
    let max = n[0];

    for (let i = 0; i < n.length; i++) {
        if (n[i] > max) {
            max = n[i];
        }
    }

    return max;
}

console.log(firstLargest(userInput));

// ========== Question 14 ==========
let userInput = {
    name: "John",
    age: 30
}

function findKeys(object) {
    return Object.keys(object)
}

console.log(findKeys(userInput))

// ========== Question 15 ==========
let userInput = "The quick brown fox"


function splitText(string) {
    return string.split(" ")
}

console.log(splitText(userInput))
