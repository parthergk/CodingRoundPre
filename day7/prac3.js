/**
 * 34. Remove Duplicates from Array
 * 
 * Problem Description:
 * Given an array of integers, remove all duplicate elements so that each element 
 * appears only once. Return the unique elements as an array.
 * 
 * Example 1:
 * Input: nums = [1, 2, 2, 3, 4, 4, 5]
 * Output: [1, 2, 3, 4, 5]
 * 
 * Constraints:
 * - The input array contains integers.
 */
const nums = [1, 2, 2, 3, 4, 4, 5];

console.log("ouput", [...new Set(nums)]);