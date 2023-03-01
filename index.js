const arr = [3,"a","a","a",2,3,"a",3,"a",2,4,9,3];
function getOccurrence(array, value){
    let count=0;
    array.forEach(v => (v === value && count++));
    return count;
}
function arrMode(array){
    array.forEach(v => console.log(v));
}
console.log(getOccurrence(arr,3));