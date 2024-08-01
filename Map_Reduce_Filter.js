const products = [
    { name: 'Shirt', price: 25 },
    { name: 'Shoes', price: 15 },
    { name: 'Hat', price: 30 },
    { name: 'Socks', price: 5 }
  ];

  
  const keys = products.keys();
  
  const prices_greater15 = products.filter(product=>product.price > 15)
      .map(product => product.price * 10)
      .reduce((acc,curr)=>acc+curr,0)
  console.log(prices_greater15)
  
  

  for (let key of keys) {
    console.log(products[key].name);
  }