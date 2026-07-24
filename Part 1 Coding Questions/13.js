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