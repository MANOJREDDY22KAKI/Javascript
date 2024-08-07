
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

const counter = async (initialCount) => {
  try {
    let count = await step1(initialCount); // Get result from step1
    count = await step2(count); // Get result from step2
    count = await step3(count); // Get result from step3
    count = await step4(count); // Get result from step4
    finalStep(count); // Call finalStep with the final count
  } catch (err) {
    console.log(err);
  }
}

counter();
