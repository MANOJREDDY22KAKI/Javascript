function originalFunction(a,b) {
    return a + b ;
}

function memorize(fn){
    const cache = {} ;
    return function(...args){
        const key = JSON.stringify(args) ;
        if (cache[key]!==undefined){
            console.log("fetched from cache")
            return cache[key];
        }
        const result = fn(...args) ;
        cache[key] = result ;
        return result ;
    }
    
}

const memorizationFunction = memorize(originalFunction);
console.log(memorizationFunction(1,2));
console.log(memorizationFunction(3,4));
console.log(memorizationFunction(5,6));

console.log("Demonstration of cache") ;
console.log(memorizationFunction(1,2));
console.log(memorizationFunction(5,6));
console.log(memorizationFunction(3,4));