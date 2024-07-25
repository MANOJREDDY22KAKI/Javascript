// // Online Javascript Editor for free
// // Write, Edit and Run your Javascript code using JS Online Compiler

const items = ["Mobile" , "Laptop" ,"Sprite" ,"Shoes"]
const createOrder = (items) =>{
    return new Promise((resolve,reject)=>{
        resolve("createOrder Promise resolved");
        console.log("items are " ,items);
    })
};

const ProceedToPayment = ()=>{
    return new Promise((resolve,reject) =>{
        resolve("Proceed To Payment resolved");
        console.log("Processing your payment");
    })
}

const PaymentSuccess = () =>{
    return new Promise ((resolve,reject) =>{
        resolve("Promise Resolved");
        console.log("Payment successful");
    })
}

const OrderWillbeDeliveredSoon = () =>{
    return new Promise((resolve,reject) =>{
        resolve("OrderWillbeDeliveredSoon resolved");
        console.log("Order Will be Delivered Soon")
    })
}

createOrder(items)

   .then(ProceedToPayment)
   .then(PaymentSuccess)
   .then(OrderWillbeDeliveredSoon)
   .catch((err)=>{
       console.log(err)
   })


