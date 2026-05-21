const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];


const stArr = new Set(arr1);

const output =  arr2.filter(item => stArr.has(item));
console.log("ouput", output);
