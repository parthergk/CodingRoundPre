/**
 * 44. Flatten a Shallow Nested Array
 * 
 * Problem Description:
 * Given a shallow nested array containing numbers and sub-arrays of numbers, 
 * flatten it into a single-dimensional array of numbers.
 * 
 * Example 1:
 * Input: arr = [1, [2, 3], [4, 5], 6]
 * Output: [1, 2, 3, 4, 5, 6]
 * 
 * Constraints:
 * - Flatten depth is 1.
 */
const arr = [1, [2, 3], [4, 5], 6];
console.log(arr.flat());