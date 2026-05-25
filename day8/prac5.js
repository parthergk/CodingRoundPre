/**
 * 43. Group Users by Age
 * 
 * Problem Description:
 * Given an array of user objects where each user has a `name` and `age`.
 * Group the users by `age`. Return an object where the keys are ages and values 
 * are arrays containing only the names of users with that age.
 * 
 * Example 1:
 * Input:
 * users = [
 *   { name: "Gaurav", age: 22 },
 *   { name: "Rahul", age: 20 },
 *   { name: "Amit", age: 22 },
 *   { name: "Neha", age: 21 }
 * ]
 * Output: {
 *   '20': ["Rahul"],
 *   '21': ["Neha"],
 *   '22': ["Gaurav", "Amit"]
 * }
 * 
 * Constraints:
 * - Each user contains `name` (string) and `age` (number).
 */
const users = [
  { name: "Gaurav", age: 22 },
  { name: "Rahul", age: 20 },
  { name: "Amit", age: 22 },
  { name: "Neha", age: 21 }
];

const ouptut = users.reduce((acc, itm)=> {
    const key = itm.age
    if (!acc[key]) {
        acc[key] = []
    };

    acc[key].push(itm.name)
    return acc
}, {});
console.log("Output", ouptut);
