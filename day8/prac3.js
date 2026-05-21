const nums = [1, 2, 3, 5];
const numsSet = new Set(nums);
let num
for (let i = 1; i <= 5; i++) {
    if (!numsSet.has(i)) {
       num = i;
       break; 
    }
}

console.log("number", num);
