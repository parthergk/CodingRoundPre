/**
 * 7. Count Frequency of Elements in an Array
 * 
 * Problem Description:
 * Given an array of strings representing items (like fruits), count the frequency 
 * of each item in the array and return an object with items as keys and their 
 * respective counts as values using `reduce`.
 * 
 * Example 1:
 * Input: fruits = ["apple", "banana", "apple", "orange", "banana", "apple"]
 * Output: { apple: 3, banana: 2, orange: 1 }
 * 
 * Constraints:
 * - Elements are strings.
 */
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

const count = fruits.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc
}, {});

console.log("OutPut", count);
