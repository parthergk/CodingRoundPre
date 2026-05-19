const nums = [2, 7, 11, 15];
const target = 9;

const obj = {}

for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i]
    if (diff in obj) {
        console.log("ans", [obj[diff], i]);
        break;
    }    
    obj[nums[i]] = i   
}
