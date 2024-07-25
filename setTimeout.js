// This example demonstrates how to use setTimeout to print a counter in 1 second intervals

let count = 0; // Initialize the counter

// Use a loop to set up 1000 timeouts
for (let i = 0; i < 1000; i++) {
  setTimeout(() => {
    console.log(count + 1); // Print the current count
    count++; // Increment the counter
  }, i * 1000); // Schedule each print 1 second apart
}

