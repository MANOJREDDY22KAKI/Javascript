function sum(arr,n){
    if (n < 0){
        return 0
    }
    return sum(arr,n-1)+arr[n]
}

const arr = [1,2,3,4];
let len = arr.length - 1
console.log(sum(arr,len))

//print numbers 0 to 10

function PrintNumbers(n){
    if (n > 10){
        return 
    }
    console.log(n)
    PrintNumbers(n+1)
}

//print numbers from 10 to 1

function PrintNumbersReverse(n){
    if (n === 1) return ;
    console.log(n-1);
    PrintNumbersReverse(n-1)
}

var m = 1;

var n = 10;
PrintNumbers(m)

PrintNumbersReverse(n)


