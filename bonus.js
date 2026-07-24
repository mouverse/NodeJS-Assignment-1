
let createCounter = function(init) {
    let current = init;

    function operation(type) {
        switch (type) {
            case "increment":
                current++;
                return current;

            case "decrement":
                current--;
                return current;

            case "reset":
                current = init;
                return current;
        }
    }

    return {
        increment: function() {
            return operation("increment");
        },

        decrement: function() {
            return operation("decrement");
        },

        reset: function() {
            return operation("reset");
        }
    };
};

let counter = createCounter(5);

console.log(counter.increment())
console.log(counter.reset())
console.log(counter.decrement())
