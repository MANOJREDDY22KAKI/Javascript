console.log("Starting the process...");

function step1(step2) {
  setTimeout(() => {
    console.log("Step 1 completed");
    step2();
  }, 1000);
}

function step2(step3) {
  setTimeout(() => {
    console.log("Step 2 completed");
    step3();
  }, 1000);
}

function step3(step4) {
  setTimeout(() => {
    console.log("Step 3 completed");
    step4();
  }, 1000);
}

function step4(finalStep) {
  setTimeout(() => {
    console.log("Step 4 completed");
    finalStep();
  }, 1000);
}

function finalStep() {
  console.log("All steps completed!");
}

// Initiating the nested callbacks
step1(() => {
  step2(() => {
    step3(() => {
      step4(() => {
        finalStep();
      });
    });
  });
});

console.log("Starting the process...");

function step1(count, step2) {
  setTimeout(() => {
    console.log(`Step 1 completed with count: ${count}`);
    step2(count + 1); // Pass the incremented count to the next step
  }, 1000);
}

function step2(count, step3) {
  setTimeout(() => {
    console.log(`Step 2 completed with count: ${count}`);
    step3(count + 1); // Pass the incremented count to the next step
  }, 1000);
}

function step3(count, step4) {
  setTimeout(() => {
    console.log(`Step 3 completed with count: ${count}`);
    step4(count + 1); // Pass the incremented count to the next step
  }, 1000);
}

function step4(count, finalStep) {
  setTimeout(() => {
    console.log(`Step 4 completed with count: ${count}`);
    finalStep(count + 1); // Pass the incremented count to the final step
  }, 1000);
}

function finalStep(count) {
  console.log(`All steps completed with final count: ${count}`);
}

// Initiating the nested callbacks with initial count
const initialCount = 1;
step1(initialCount, (count) => {
  step2(count, (count) => {
    step3(count, (count) => {
      step4(count, (count) => {
        finalStep(count);
      });
    });
  });
});



