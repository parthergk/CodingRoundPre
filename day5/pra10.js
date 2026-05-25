/**
 * 28. Department Sales Metrics and Top Performer
 * 
 * Problem Description:
 * Given an array of sales records where each record contains `employee`, `department`, and sales `amount`.
 * Group these records by `department`. For each department, calculate:
 * 1. `totalSales`: The total sum of sale amounts in that department.
 * 2. `topPerformer`: The employee name with the single highest sale amount in that department.
 * Return an array of objects representing these department metrics.
 * 
 * Example 1:
 * Input:
 * sales = [
 *   { employee: "Gaurav", department: "Engineering", amount: 5000 },
 *   { employee: "Rahul", department: "HR", amount: 3000 },
 *   { employee: "Amit", department: "Engineering", amount: 7000 },
 *   { employee: "Neha", department: "Design", amount: 4000 },
 *   { employee: "Riya", department: "Engineering", amount: 2000 }
 * ]
 * Output: [
 *   { item: "Engineering", totalSales: 14000, topPerformer: "Amit" },
 *   { item: "HR", totalSales: 3000, topPerformer: "Rahul" },
 *   { item: "Design", totalSales: 4000, topPerformer: "Neha" }
 * ]
 * 
 * Constraints:
 * - Each sales record contains `employee` (string), `department` (string), and `amount` (number).
 */
const sales = [
  { employee: "Gaurav", department: "Engineering", amount: 5000 },
  { employee: "Rahul", department: "HR", amount: 3000 },
  { employee: "Amit", department: "Engineering", amount: 7000 },
  { employee: "Neha", department: "Design", amount: 4000 },
  { employee: "Riya", department: "Engineering", amount: 2000 },
];

const groupd = sales.reduce((acc, item) => {
  const key = item.department;

  if (!acc[key]) {
    acc[key] = {
      topAm: 0,
      totalSales: 0,
      topPerformer: "",
    };
  }
  acc[key].totalSales += item.amount;

  if (item.amount > acc[key].topAm) {
    acc[key].topAm = item.amount
    acc[key].topPerformer = item.employee
  }
  return acc;
}, {});

const output = Object.keys(groupd).map(item => ({item,
    totalSales: groupd[item].totalSales,
    topPerformer: groupd[item].topPerformer})) 
console.log("Grpopued", output);
