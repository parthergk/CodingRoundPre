/**
 * 2. Filter Active Adult Users
 * 
 * Problem Description:
 * Given an array of user objects, where each user has an `id`, `name`, `age`, and `active` status.
 * Filter the users who are adults (age >= 18) and whose account is active (active === true).
 * Return an array of objects containing only the `id` and `name` of these filtered users.
 * 
 * Example 1:
 * Input:
 * users = [
 *   { id: 1, name: "Gaurav", age: 22, active: true },
 *   { id: 2, name: "Rahul", age: 17, active: true },
 *   { id: 3, name: "Amit", age: 25, active: false },
 *   { id: 4, name: "Neha", age: 30, active: true }
 * ]
 * Output: [
 *   { id: 1, name: "Gaurav" },
 *   { id: 4, name: "Neha" }
 * ]
 * 
 * Constraints:
 * - Each user object contains `id` (number), `name` (string), `age` (number), and `active` (boolean).
 */
const users = [
  { id: 1, name: "Gaurav", age: 22, active: true },
  { id: 2, name: "Rahul", age: 17, active: true },
  { id: 3, name: "Amit", age: 25, active: false },
  { id: 4, name: "Neha", age: 30, active: true },
];

const output = users
  .filter((item) => item.age >= 18 && item.active === true)
  .map((item) => ({ id: item.id, name: item.name }));

console.log("Out put", output);
