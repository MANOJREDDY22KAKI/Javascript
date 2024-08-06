function flaten(arr){
    
    for(let i =0 ;i<arr.length ;i++){
        if(!Array.isArray(arr[i])){
            newarr.push(arr[i]);
            
        }
        else{
             flaten(arr[i])
        }
    }
    return newarr;
}

const arr = [[1, 2, [7, 8]], [3,[9,10], 4], [5]];

newarr = []

flaten(arr)
console.log(newarr)