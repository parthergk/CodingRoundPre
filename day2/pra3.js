/**
 * 8. Group Employees by Department
 * 
 * Problem Description:
 * Given an array of employee objects where each employee has a `name` and `department`.
 * Group the employees by their department and return an object where each key is 
 * a department name and the value is an array of employee objects belonging to that department.
 * 
 * Example 1:
 * Input:
 * employees = [
 *   { name: "Gaurav", department: "Engineering" },
 *   { name: "Rahul", department: "HR" },
 *   { name: "Amit", department: "Engineering" },
 *   { name: "Neha", department: "Design" }
 * ]
 * Output: {
 *   Engineering: [
 *     { name: "Gaurav", department: "Engineering" },
 *     { name: "Amit", department: "Engineering" }
 *   ],
 *   HR: [
 *     { name: "Rahul", department: "HR" }
 *   ],
 *   Design: [
 *     { name: "Neha", department: "Design" }
 *   ]
 * }
 * 
 * Constraints:
 * - Each employee object contains `name` (string) and `department` (string).
 */
const employees = [
  { name: "Gaurav", department: "Engineering" },
  { name: "Rahul", department: "HR" },
  { name: "Amit", department: "Engineering" },
  { name: "Neha", department: "Design" }
];

const group = employees.reduce((acc, item)=> {
    const key = item.department;

    if (!acc[key]) {
        acc[key] = [];
    };

    acc[key].push(item);
    return acc
}, {});

console.log("Output", group);
