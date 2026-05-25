/**
 * 25. Department Employee Stats and Highest Paid Employee
 * 
 * Problem Description:
 * Given an array of employee objects where each employee has a `name`, `department`, `salary`, and `active` status.
 * Filter out inactive employees (`active === false`).
 * Group the active employees by their `department`. For each department, compute:
 * 1. `totalEmployees`: The count of active employees.
 * 2. `highestSalaryEmployee`: The name of the active employee with the highest salary.
 * Return an array of objects representing these statistics for each department.
 * 
 * Example 1:
 * Input:
 * employees = [
 *   { name: "Gaurav", department: "Engineering", salary: 70000, active: true },
 *   { name: "Rahul", department: "HR", salary: 40000, active: false },
 *   { name: "Amit", department: "Engineering", salary: 90000, active: true },
 *   { name: "Neha", department: "Design", salary: 60000, active: true },
 *   { name: "Riya", department: "Engineering", salary: 85000, active: true }
 * ]
 * Output: [
 *   { department: "Engineering", totalEmployees: 3, highestSalaryEmployee: "Amit" },
 *   { department: "Design", totalEmployees: 1, highestSalaryEmployee: "Neha" }
 * ]
 * 
 * Constraints:
 * - Each employee object contains `name` (string), `department` (string), `salary` (number), and `active` (boolean).
 */
const employees = [
  { name: "Gaurav", department: "Engineering", salary: 70000, active: true },
  { name: "Rahul", department: "HR", salary: 40000, active: false },
  { name: "Amit", department: "Engineering", salary: 90000, active: true },
  { name: "Neha", department: "Design", salary: 60000, active: true },
  { name: "Riya", department: "Engineering", salary: 85000, active: true },
];

const groupd = employees
  .filter((item) => item.active === true)
  .reduce((acc, item) => {
    const key = item.department;

    if (!acc[key]) {
      acc[key] = {
        heighSalary: 0,
        totalEmployees: 0,
        highestSalaryEmployee: "",
      };
    }

    acc[key].totalEmployees += 1;
    if (item.salary > acc[key].heighSalary) {
      acc[key].heighSalary = item.salary;
      acc[key].highestSalaryEmployee = item.name;
    }
    return acc;
  }, {})
  

  console.log("Output", Object.keys(groupd).map((item) => ({
    department: item,
    totalEmployees: groupd[item].totalEmployees,
    highestSalaryEmployee: groupd[item].highestSalaryEmployee,
  })));
  