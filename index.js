const arr = [3,"a","a","a",2,3,"a",3,"a",2,4,9,3];
let count=0;
    arr.forEach(v => v === arr[0] && count++)
console.log(count);