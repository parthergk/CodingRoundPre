/**
 * 47. Deduplicate Users by ID
 * 
 * Problem Description:
 * Given an array of user objects where each user has an `id` and `name`.
 * Remove duplicate users by `id` so that only the first occurrence of each unique user is preserved.
 * Use a `Set` to track visited IDs.
 * 
 * Example 1:
 * Input:
 * users = [
 *   { id: 1, name: "Gaurav" },
 *   { id: 2, name: "Rahul" },
 *   { id: 1, name: "Gaurav" },
 *   { id: 3, name: "Amit" }
 * ]
 * Output: [
 *   { id: 1, name: "Gaurav" },
 *   { id: 2, name: "Rahul" },
 *   { id: 3, name: "Amit" }
 * ]
 * 
 * Constraints:
 * - Order of the unique users should match their first appearance in the input.
 */
const users = [
  { id: 1, name: "Gaurav" },
  { id: 2, name: "Rahul" },
  { id: 1, name: "Gaurav" },
  { id: 3, name: "Amit" }
];

const output = []
const idSet = new Set();

for (const usr of users) {
    if (!idSet.has(usr.id)) {
        output.push(usr);
        idSet.add(usr.id)
    }
}

console.log("Output", output);
