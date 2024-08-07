const obj = {
    groceries: {
        cost: 33.22,
        amount: 1
    },
    rent: {
        cost: 899.00,
        amount: 1,
    },
    paycheck: {
        cost: -2000,
        amount: 2
    },
    restaurantBills: {
        cost: 20,
        amount: 4
    }
};

const keys = Object.keys(obj)

let ans = keys.filter((key)=>obj[key].cost>0)
                .map((key)=>obj[key].cost * obj[key].amount)
                .reduce((res,acc)=>res+acc,0)

                console.log(ans)

// const keys = Object.keys(obj)
// console.log(keys)
// const filter_Objects = keys.filter((key)=>obj[key].cost > 0)
// console.log(filter_Objects)
// const costs = filter_Objects.map((cost)=>obj[cost].cost*obj[cost].amount);
// const sum = costs.reduce((prev,curr)=>curr+prev);
// console.log(sum)

// let sum = 0;

// for (const [key, value] of Object.entries(obj)) {
//   if (value.cost > 0) {
//     sum += value.cost * value.amount;
//   }
// }

// console.log(sum);


let sum = 0;

for (const key in obj) {
  if (obj[key].cost > 0) {
    sum += obj[key].cost * obj[key].amount;
  }
}

console.log(sum);

