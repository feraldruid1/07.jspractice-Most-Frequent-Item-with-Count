const arr = [3,"a","a","a",2,3,"a",3,"a",2,4,9,3];
let count=0;
for(let i=0; i<arr.length; i++){
    arr.forEach(v => v === arr[0] && count++)
    arr.shift;
}
console.log(count);