var obj = JSON.parse('{"firstName":"John", "lastName":"Doe"}');
console.log(typeof(obj))  //object

console.log(obj) //{ firstName: 'John', lastName: 'Doe' }

const stringify = JSON.stringify(obj)
console.log(typeof(stringify)) //string
console.log(stringify) // {"firstName":"John","lastName":"Doe"}
