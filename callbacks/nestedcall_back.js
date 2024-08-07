// Define the person object with properties
const person = {
    name: "John Doe",
    age: 30,
    address: "123 Main St",
    education: "Bachelor's Degree"
  };
  
  function getName(person, callback) {
    setTimeout(() => {
      console.log(`Name: ${person.name}`);
      callback(); // Call the next function without the `person` object
    }, 1000);
  }
  
  function getAge(person, callback) {
    setTimeout(() => {
      console.log(`Age: ${person.age}`);
      callback(); // Call the next function without the `person` object
    }, 1000);
  }
  
  function getAddress(person, callback) {
    setTimeout(() => {
      console.log(`Address: ${person.address}`);
      callback(); // Call the next function without the `person` object
    }, 1000);
  }
  
  function getEducation(person, callback) {
    setTimeout(() => {
      console.log(`Education: ${person.education}`);
      callback(); // End the callback chain
    }, 1000);
  }
  
  function finalStep() {
    console.log("All properties have been retrieved.");
  }
  
  // Initiate the callbacks
  getName(person, () => {
    getAge(person, () => {
      getAddress(person, () => {
        getEducation(person, finalStep);
      });
    });
  });
  