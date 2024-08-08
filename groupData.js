const fruits = [
    { name: "apples", quantity: 300,rating:3},
    { name: "bananas", quantity: 500,rating:4 },
    { name: "oranges", quantity: 200,rating:2 },
    { name: "kiwi", quantity: 150,rating:5 }
  ];
  
  const groupedFruits = fruits.reduce((acc, fruit) => {
    if (fruit.quantity > 200) {
      acc['quantity > 200'].push({name:fruit.name,rating:fruit.rating});
    } else {
      acc['quantity <= 200'].push({name:fruit.name,rating:fruit.rating});
    }
    return acc;
  }, { 'quantity > 200': [], 'quantity <= 200': [] });
  
  console.log(groupedFruits);