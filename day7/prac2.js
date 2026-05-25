/**
 * 33. Find All Duplicate Numbers
 * 
 * Problem Description:
 * Given an array of integers, find all numbers that appear more than once in the array.
 * Implement the solution in two ways:
 * 1. Using a frequency count object.
 * 2. Using a `Set` to track visited numbers.
 * 
 * Example 1:
 * Input: nums = [1, 2, 3, 2, 4, 5, 1]
 * Output (Duplicates): [1, 2]
 * 
 * Constraints:
 * - The input array contains integers.
 */
const nums = [1, 2, 3, 2, 4, 5, 1];

const obj = {};
const dublicate = [];

for (const itm of nums) {
    obj[itm] = (obj[itm] || 0) + 1
};


for (const key in obj) {
    if (obj[key] > 1) {
        dublicate.push(key)
    }
}

console.log("Dublicate", dublicate);


const newSet = new Set();
const setDub = []

for (const itm of nums) {
    if (newSet.has(itm)) {
        setDub.push(itm);
    }else{
        newSet.add(itm)
    }
}

console.log("SetDub", setDub);
