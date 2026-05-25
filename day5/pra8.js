/**
 * 26. Revenue from Completed Orders
 * 
 * Problem Description:
 * Given an array of order objects where each order has `customer`, `amount`, and `status`.
 * Filter out pending orders.
 * Compute and return:
 * 1. `totalCompletedOrders`: The total count of completed orders.
 * 2. `totalRevenue`: The sum of all completed order amounts.
 * 
 * Example 1:
 * Input:
 * orders = [
 *   { customer: "Gaurav", amount: 5000, status: "completed" },
 *   { customer: "Rahul", amount: 2000, status: "pending" },
 *   { customer: "Amit", amount: 7000, status: "completed" },
 *   { customer: "Neha", amount: 3000, status: "completed" }
 * ]
 * Output: { totalCompletedOrders: 3, totalRevenue: 15000 }
 * 
 * Constraints:
 * - Each order contains `customer` (string), `amount` (number), and `status` (string).
 */
const orders = [
  { customer: "Gaurav", amount: 5000, status: "completed" },
  { customer: "Rahul", amount: 2000, status: "pending" },
  { customer: "Amit", amount: 7000, status: "completed" },
  { customer: "Neha", amount: 3000, status: "completed" },
];

const ouput = orders.filter((item) => item.status === "completed");

console.log("Output", {
  totalCompletedOrders: ouput.length,
  totalRevenue: ouput.reduce((acc, item) => {
    acc = acc + item.amount;
    return acc;
  }, 0),
});
