/**
 * 6. Sum of Array Elements using Reduce
 * 
 * Problem Description:
 * Given an array of numbers, calculate and return the sum of all elements in the array
 * using the `reduce` method.
 * 
 * Example 1:
 * Input: numbers = [10, 20, 30, 40]
 * Output: 100
 * Explanation: 10 + 20 + 30 + 40 = 100.
 * 
 * Constraints:
 * - The input array contains numbers.
 */
const numbers = [10, 20, 30, 40];

const sum = numbers.reduce((acc, item)=> acc + item, 0);
console.log("Sum", sum);