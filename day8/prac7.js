/**
 * 45. Filter out Falsy Values
 * 
 * Problem Description:
 * Given an array containing truthy and falsy values (like 0, false, empty strings, null, undefined).
 * Filter out all falsy values and return an array containing only the truthy values.
 * 
 * Example 1:
 * Input: arr = [0, 1, false, 2, "", 3, null, undefined]
 * Output: [1, 2, 3]
 * 
 * Constraints:
 * - Elements can be of any data type.
 */
const arr = [0, 1, false, 2, "", 3, null, undefined];

console.log(arr.filter(item => item));
