let sentence = "The quick brown fox jumps over the lazy dog";

let newarr = sentence.split(" ")
reverse_arr = []
for(let word of newarr){
    reverse_arr.push(word.split("").reverse().join(""))
}
console.log(reverse_arr.join(" "))


//optimized code 

let sentence1 = "The quick brown fox jumps over the lazy dog";

// Split the sentence into words, reverse each word, and join them back into a sentence
let reversedSentence = sentence1
    .split(" ")                        // Split sentence into words
    .map(word => word.split("").reverse().join(""))  // Reverse each word
    .join(" ");                        // Join the words back into a sentence

console.log(reversedSentence);


let fruits = ['apple', 'banana', 'mango', 'orange'];
let newfruits = []
for(let fruit of fruits){
    capitalized = fruit.charAt(0).toUpperCase()+fruit.slice(1)
    newfruits.push(capitalized)
    
}
console.log(newfruits)

let capitalizedfuits = fruits.map(fruit =>{
    return fruit.charAt(0).toUpperCase()+fruit.slice(1)
})
console.log(capitalizedfuits)
