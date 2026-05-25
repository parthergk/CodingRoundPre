/**
 * 40. Intersection of Two Arrays (LeetCode 349)
 * 
 * Problem Description:
 * Given two arrays `arr1` and `arr2`, return an array representing their intersection.
 * Each element in the result must be unique, and you can return the result in any order.
 * Do this efficiently using a `Set`.
 * 
 * Example 1:
 * Input: arr1 = [1, 2, 3, 4], arr2 = [3, 4, 5, 6]
 * Output: [3, 4]
 * 
 * Constraints:
 * - Time complexity should be O(N + M) using Set.
 */
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];


const stArr = new Set(arr1);

const output =  arr2.filter(item => stArr.has(item));
console.log("ouput", output);
