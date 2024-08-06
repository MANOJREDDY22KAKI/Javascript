function flaten(arr){
    
    for(let i of arr){
        if(!Array.isArray(i)){
            val = Object.values(i)
            newarr.push(i);
            
        }
        else{
             flaten(i)
        }
    }
    return newarr;
}

const arr = [[1, 2, [7, 8]], [3,[9,10], 4], [5]];

newarr = []

flaten(arr)
console.log(newarr)//output : [1,  2, 7, 8, 3, 9, 10, 4, 5]