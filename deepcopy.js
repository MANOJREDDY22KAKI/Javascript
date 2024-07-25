const original = {
  name: 'Alice',
  age: 25,
  address: {
    city: 'Wonderland',
    postalCode: 12345
  }
};

const deepCopy1 = JSON.parse(JSON.stringify(original));

// another way for deep copy
const _ = require('lodash');

const deepCopy = _.cloneDeep(original);

// Modify the nested object in the deep copy
deepCopy.address.city = "New Wonderland";

console.log(original.address.city); // Output: "Wonderland"
console.log(deepCopy.address.city); // Output: "New Wonderland"


//shallow copy
const shallowCopy = {...original}

