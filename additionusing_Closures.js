function add(n) {
    let sum = n;

    function innerAdd(next) {
        if (next !== undefined) {
            sum += next;
            return innerAdd;
        } else {
            return sum;
        }
    }

    return innerAdd;
}

console.log(add(2)(2)(3)(4)());  // Output: 11
//add(2)(3).........()


// Recursive Approach

function add(n) {
    return function innerAdd(next) {
        if (next === undefined) {
            return n;
        }
        return add(n + next);
    };
}

console.log(add(2)(2)(3)(4)());  // Output: 11
