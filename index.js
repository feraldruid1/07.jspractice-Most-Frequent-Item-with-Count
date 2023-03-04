const arr = [3,"a","a","a",2,3,"a",3,"a",2,4,9,3];
const array=[];
const iterator = array.values();
let count=0;
let countA=0;
for(let y=0; y<arr.length; y++){
    count=0;
for(let i=0; i<arr.length; i++){
    if(arr[i]===arr[countA]){
        count++;
    }
}
countA++;
array.push(count);
}
const index=array.indexOf(Math.max(...array));
console.log(arr[index]+"-"+Math.max(...array)+"times")