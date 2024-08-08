const items = ["Mobile", "Laptop", "Sprite", "Shoes"];

console.log("Using arrow function");

const createOrder = (items, proceedToPayment) => {
  console.log("Items in the cart are", items);
  proceedToPayment();
}

const proceedToPayment = (callback) => {
  console.log("Payment Processing");
  callback();
}

const paymentCompleted = (callback) => {
  console.log("Payment Completed");
  callback();
}

const OrderWillbeDeliveredSoon = () => {
  console.log("Order Will be Delivered Soon");
}

createOrder(items, ()=>{
    proceedToPayment(()=>{
        paymentCompleted( ()=>{
            OrderWillbeDeliveredSoon
            
        })
    })
});

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
