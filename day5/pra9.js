/**
 * 27. Count Users by City
 * 
 * Problem Description:
 * Given an array of user objects where each user has a `name` and `city`.
 * Count the total number of users in each city and return an object with city names 
 * as keys and their respective user counts as values.
 * 
 * Example 1:
 * Input:
 * users = [
 *   { name: "Gaurav", city: "Delhi" },
 *   { name: "Rahul", city: "Mumbai" },
 *   { name: "Amit", city: "Delhi" },
 *   { name: "Neha", city: "Bangalore" },
 *   { name: "Riya", city: "Delhi" }
 * ]
 * Output: { Delhi: 3, Mumbai: 1, Bangalore: 1 }
 * 
 * Constraints:
 * - Each user contains `name` (string) and `city` (string).
 */
const users = [
  { name: "Gaurav", city: "Delhi" },
  { name: "Rahul", city: "Mumbai" },
  { name: "Amit", city: "Delhi" },
  { name: "Neha", city: "Bangalore" },
  { name: "Riya", city: "Delhi" }
];

const output = users.reduce((acc, item)=> {
    
    acc[item.city] = (acc[item.city] || 0) +1
    return acc
},{});

console.log("Output", output);
