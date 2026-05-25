/**
 * 20. Region Sales Performance Tracker
 * 
 * Problem Description:
 * Given an array of sales records where each record contains `employee`, `region`, and sale `amount`.
 * Group the sales by `region` and compute:
 * 1. `totalSales`: The total sum of sale amounts in the region.
 * 2. `maxSale`: The single highest sale amount in that region.
 * 3. `topEmployee`: The employee who achieved the highest sale amount in that region.
 * Return an array of objects, one for each region, containing the `region` name, `totalSales`, and `maxSale`.
 * 
 * Example 1:
 * Input:
 * sales = [
 *   { employee: "Gaurav", region: "North", amount: 5000 },
 *   { employee: "Rahul", region: "South", amount: 3000 },
 *   { employee: "Amit", region: "North", amount: 7000 },
 *   { employee: "Neha", region: "East", amount: 4000 },
 *   { employee: "Riya", region: "North", amount: 2000 },
 *   { employee: "Karan", region: "South", amount: 6000 }
 * ]
 * Output: [
 *   { region: "North", totalSales: 14000, maxSale: 7000 },
 *   { region: "South", totalSales: 9000, maxSale: 6000 },
 *   { region: "East", totalSales: 4000, maxSale: 4000 }
 * ]
 * 
 * Constraints:
 * - Each sales record contains `employee` (string), `region` (string), and `amount` (number).
 */
const sales = [
  { employee: "Gaurav", region: "North", amount: 5000 },
  { employee: "Rahul", region: "South", amount: 3000 },
  { employee: "Amit", region: "North", amount: 7000 },
  { employee: "Neha", region: "East", amount: 4000 },
  { employee: "Riya", region: "North", amount: 2000 },
  { employee: "Karan", region: "South", amount: 6000 },
];

const output = sales.reduce((acc, item) => {
  const key = item.region;

  if (!acc[key]) {
    acc[key] = {
      totalSales: 0,
      topEmployee: "",
      maxSale: 0,
    };
  }

  acc[key].totalSales += item.amount;
  if (item.amount > acc[key].maxSale) {
    acc[key].maxSale = item.amount;
    acc[key].topEmployee = item.employee;
  }
  return acc;
}, {});

console.log(
  "output",
  Object.keys(output).map((region) => ({
    region,
    totalSales: output[region].totalSales,
    maxSale: output[region].maxSale,
  })),
);
