/**
 * 48. Convert Array of Users to Lookup Map
 * 
 * Problem Description:
 * Given an array of user objects where each user has an `id` and `name`.
 * Convert this array into a lookup object (hash map) where the keys are the user IDs 
 * and the values are the full user objects.
 * 
 * Example 1:
 * Input:
 * users = [
 *   { id: 1, name: "Gaurav" },
 *   { id: 2, name: "Rahul" },
 *   { id: 3, name: "Amit" }
 * ]
 * Output: {
 *   '1': { id: 1, name: "Gaurav" },
 *   '2': { id: 2, name: "Rahul" },
 *   '3': { id: 3, name: "Amit" }
 * }
 * 
 * Constraints:
 * - Each user contains `id` (number) and `name` (string).
 */
const users = [
  { id: 1, name: "Gaurav" },
  { id: 2, name: "Rahul" },
  { id: 3, name: "Amit" }
];

const output = users.reduce((acc, itm)=>{
    acc[itm.id] = itm;
    return acc
},{});

console.log("Output", output);
