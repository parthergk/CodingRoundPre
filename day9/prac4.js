/**
 * 49. Sort Users Alphabetically
 * 
 * Problem Description:
 * Given an array of user objects where each user contains a `name`.
 * Sort the users alphabetically by `name` in ascending order and return the sorted array.
 * 
 * Example 1:
 * Input:
 * users = [
 *   { name: "Rahul" },
 *   { name: "Amit" },
 *   { name: "Gaurav" }
 * ]
 * Output: [
 *   { name: "Amit" },
 *   { name: "Gaurav" },
 *   { name: "Rahul" }
 * ]
 * 
 * Constraints:
 * - Sort should be alphabetically ascending using localeCompare.
 */
const users = [
  { name: "Rahul" },
  { name: "Amit" },
  { name: "Gaurav" }
];

const ouptut = users.sort((a, b) => a.name.localeCompare(b.name))
console.log("OutPut", ouptut);
