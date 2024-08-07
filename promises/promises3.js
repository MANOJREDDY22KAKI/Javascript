console.log("Starting the process...");

// Function returning a promise
function step1(count) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Step 1 completed with count: ${count}`);
      resolve(count + 1); // Pass the incremented count to the next step
    }, 1000);
  });
}

function step2(count) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Step 2 completed with count: ${count}`);
      resolve(count + 1); // Pass the incremented count to the next step
    }, 1000);
  });
}

function step3(count) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Step 3 completed with count: ${count}`);
      resolve(count + 1); // Pass the incremented count to the next step
    }, 1000);
  });
}

function step4(count) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Step 4 completed with count: ${count}`);
      resolve(count + 1); // Pass the incremented count to the final step
    }, 1000);
  });
}

function finalStep(count) {
  console.log(`All steps completed with final count: ${count}`);
}

// Initiating the process using promises
const initialCount = 1;

step1(initialCount)
  .then(count => step2(count))
  .then(count => step3(count))
  .then(count => step4(count))
  .then(count => finalStep(count))
  .catch(error => console.error("An error occurred:", error));
