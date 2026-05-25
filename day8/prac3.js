/**
 * 41. Missing Number in Range
 * 
 * Problem Description:
 * Given an array `nums` containing numbers from `1` to `N` with one number missing.
 * Identify and return the missing number using a `Set`.
 * 
 * Example 1:
 * Input: nums = [1, 2, 3, 5], range = 1 to 5
 * Output: 4
 * 
 * Constraints:
 * - The missing number is in the defined range.
 */
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
