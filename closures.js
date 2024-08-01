const a = 'hello';
console.log(a); // hello
abc();
function abc() {
    //const a= 'world';
    console.log(a); //hello
}
function myCount() {
    let count = 0;
    return function () {
        return count++; 
    }
}
function myCount2() {
    let count = 0;
    return count++
} 
let cnt = myCount();
let cnt2 = myCount2;
for (let x = 0; x < 10; x++) {
    console.log(cnt()); //0 1 2 ......9 -> 9 iterations
    console.log(cnt2()); //0 0 .......0 ->9 iterations
}