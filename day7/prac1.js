/**
 * 32. Frequency of Numbers
 * 
 * Problem Description:
 * Given an array of integers, count the occurrences of each integer and return 
 * an object containing the integers as keys and their respective frequency counts as values.
 * 
 * Example 1:
 * Input: nums = [1, 2, 2, 3, 1, 4, 2]
 * Output: { '1': 2, '2': 3, '3': 1, '4': 1 }
 * 
 * Constraints:
 * - The elements in the input array are integers.
 */
const nums = [1, 2, 2, 3, 1, 4, 2];

const obj = {}
for (const i of nums) {
    obj[i] = (obj[i] || 0) + 1 
}

console.log("object", obj);