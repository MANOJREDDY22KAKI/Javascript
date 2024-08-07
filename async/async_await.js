const items = ["Mobile", "Laptop", "Sprite", "Shoes"];

const createOrder = (items) => {
  return new Promise((resolve) => {
    console.log("Items in the cart are", items);
    resolve();
  });
};

const proceedToPayment = () => {
  return new Promise((resolve) => {
    console.log("Payment Processing");
    resolve();
  });
};

const paymentCompleted = () => {
  return new Promise((resolve) => {
    console.log("Payment Completed");
    resolve();
  });
};

const orderWillBeDeliveredSoon = () => {
  return new Promise((resolve) => {
    console.log("Order Will be Delivered Soon");
    resolve();
  });
};

// Using async/await to handle the promises
const processOrder = async (items) => {
  await createOrder(items);
  await proceedToPayment();
  await paymentCompleted();
  await orderWillBeDeliveredSoon();
};

processOrder(items);


async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  console.log('Start');
  await delay(2000); // Wait for 2 seconds
  console.log('After 2 seconds');
  await delay(1000); // Wait for 1 second
  console.log('After 3 seconds total');
}

main();

