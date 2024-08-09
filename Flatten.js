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


// FLATTEN ARRAY BASED ON THE REQUIRED DEPTH 

/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    if(n===0 || !Array.isArray(arr)){
        return arr ;
    }
    return arr.reduce((acc,val) =>{
        if(Array.isArray(val)){
            acc.push(...flat(val,n-1));
        }
        else{
            acc.push(val)
        }
        return acc ;
    },[])
};

let a = 100 ;
let b =200 ;
a= a^b;
b=a^b
a=a^b
console.log(a)
console.log(b)


