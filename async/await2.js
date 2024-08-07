// Define the person object with properties
const person = {
    name: "John Doe",
    age: 30,
    address: "123 Main St",
    education: "Bachelor's Degree"
  };
  
  // Define the functions returning promises
  function getName(person) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`Name: ${person.name}`);
        resolve(person); // Resolve the promise with the person object
      }, 1000); // Simulate async operation with a 1-second delay
    });
  }
  
  function getAge(person) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`Age: ${person.age}`);
        resolve(person); // Resolve the promise with the person object
      }, 1000); // Simulate async operation with a 1-second delay
    });
  }
  
  function getAddress(person) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`Address: ${person.address}`);
        resolve(person); // Resolve the promise with the person object
      }, 1000); // Simulate async operation with a 1-second delay
    });
  }
  
  function getEducation(person) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`Education: ${person.education}`);
        resolve(); // Resolve the promise to indicate completion
      }, 1000); // Simulate async operation with a 1-second delay
    });
  }
  
  // Define the async function to execute the steps
  async function processPerson(person) {
    try {
      await getName(person);
      await getAge(person);
      await getAddress(person);
      await getEducation(person);
      console.log("All properties have been retrieved.");
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }
  
  // Initiate the process
  processPerson(person);
  