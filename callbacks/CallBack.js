const items = ["Mobile", "Laptop", "Sprite", "Shoes"];

console.log("Using arrow function");

const createOrder = (items, proceedToPayment) => {
  console.log("Items in the cart are", items);
  proceedToPayment(paymentCompleted);
}

const proceedToPayment = (paymentCompleted) => {
  console.log("Payment Processing");
  paymentCompleted(OrderWillbeDeliveredSoon);
}

const paymentCompleted = (OrderWillbeDeliveredSoon) => {
  console.log("Payment Completed");
  OrderWillbeDeliveredSoon();
}

const OrderWillbeDeliveredSoon = () => {
  console.log("Order Will be Delivered Soon");
}

createOrder(items, proceedToPayment);

console.log('\n')


console.log("Using normal function");

function CreateOrder(items, proceedToPayment) {
  console.log("Items in the cart are", items);
  ProceedToPayment(PaymentCompleted);
}

function ProceedToPayment(PaymentCompleted) {
  console.log("Payment Processing");
  PaymentCompleted(OrderWillbeDeliveredSoon);
}

function PaymentCompleted(orderWillbeDeliveredSoon) {
  console.log("Payment Completed");
  orderWillbeDeliveredSoon();
}

function orderWillbeDeliveredSoon() {
  console.log("Order Will be Delivered Soon");
}

CreateOrder(items, proceedToPayment);
