function swap(strings,a,b){
    let temp = strings[a];
    strings[a]=strings[b];
    strings[b]=temp;

}

function selectionSort(strings){
    for(let i=0 ;i<=strings.length -2 ;i++){
        let mini = i;
        for(let j =i+1 ; j<strings.length ;j++){
            if(strings[mini] > strings[j]){
                mini = j;
            }
        }swap(strings , i,mini)
        // if(mini !== i){
        // swap(strings , i,mini)}
    }
    return strings;
}
const strings = ["banana","banana1", "apple", "cherry"];
console.log(selectionSort(strings));


/*The idea behind the selectionSort is to find the smallest element 
in the array and place it at the beginning of the array. The process 
is repeated until the array is sorted.

Time Complexity: O(n^2)
Space Complexity: O(1)
*/