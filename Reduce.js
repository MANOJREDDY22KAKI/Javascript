const arr = [
    { name: 'Alice', age: 30, city: 'New York' },
    { name: 'Bob', age: 25, city: 'San Francisco' },
    { name: 'Charlie', age: 35, city: 'New York' },
    { name: 'David', age: 20, city: 'San Francisco' },
    { name: 'Edward', age: 30, city: 'New York' },
  ];
  
  
  //filtering the no of person whose age > 20
  //output : {30:2,}


  const count = arr.reduce((result,person)=>{
      if(result[person.age]){
          result[person.age]++
      }
      else{
          result[person.age] = 1
      }
      return result
  },{})
  
  const  output  = arr.reduce((result,person)=>{
      if(result[person.age]){
          result[person.age].push({name : person.name,city : person.city})
      }
      else{
          result[person.age] = [{name:person.name,city:person.city}]
      }
      return result
  },{})
  
  const  output1  = arr.reduce((result,person)=>{
      if(result[person.city]){
          result[person.city].push({name : person.name,age : person.age})
      }
      else{
          result[person.city] = [{name:person.name,age:person.age}]
      }
      return result
  },{})
  
  console.log(output)
  
  console.log(output1)

console.log(count)


const fruits = [
    {name:"apples", quantity:300},
    {name:"bananas", quantity:500},
    {name:"oranges", quantity:200},
    {name:"kiwi", quantity:150}
  ];
  
  const grouped_data = fruits.reduce((result,curr)=>{
      if(curr.quantity > 200){
          result["quantity>200"].push(curr.name)
      }
      else{
          result["quantity<=200"].push(curr.name)
      }
      return result
  },{'quantity>200':[],'quantity<=200':[]})
  
  console.log(grouped_data)