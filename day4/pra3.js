/**
 * 17. Get Top 2 Active Employees by Salary
 * 
 * Problem Description:
 * Given an array of employee objects, where each employee has a `name`, a `salary`, and an `active` status.
 * Filter out inactive employees.
 * Sort the active employees by salary in descending order.
 * Select the top 2 highest-paid active employees, and return their names.
 * 
 * Example 1:
 * Input:
 * employees = [
 *   { name: "Gaurav", salary: 70000, active: true },
 *   { name: "Rahul", salary: 40000, active: false },
 *   { name: "Amit", salary: 90000, active: true },
 *   { name: "Neha", salary: 60000, active: true },
 *   { name: "Riya", salary: 85000, active: false }
 * ]
 * Output: ["Amit", "Gaurav"]
 * 
 * Constraints:
 * - Each employee object contains `name` (string), `salary` (number), and `active` (boolean).
 */
const employees = [
  { name: "Gaurav", salary: 70000, active: true },
  { name: "Rahul", salary: 40000, active: false },
  { name: "Amit", salary: 90000, active: true },
  { name: "Neha", salary: 60000, active: true },
  { name: "Riya", salary: 85000, active: false }
];

const ouput = employees.filter(item => item.active === true).sort((a, b)=> b.salary - a.salary).slice(0, 2).map(item=> item.name);
console.log("Output", ouput);
