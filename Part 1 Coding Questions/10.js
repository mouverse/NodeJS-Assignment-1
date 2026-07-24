const person = {
    name: "John",
    age: 25
}

function destruct(person) {
    let {name,age} = person;
    return name + " " + "is " + age + " years old"
}

console.log(destruct(person))
