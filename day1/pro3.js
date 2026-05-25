/**
 * 3. Filter, Map and Sort Completed Orders
 * 
 * Problem Description:
 * Given an array of order objects, where each order has an `id`, `customer`, `amount`, and `status`.
 * Filter out all completed orders (`status === "completed"`).
 * Map them to a new structure containing only the `customer` name and the order `amount`.
 * Sort these mapped completed orders by `amount` in ascending order.
 * 
 * Example 1:
 * Input:
 * orders = [
 *   { id: 1, customer: "Gaurav", amount: 5000, status: "completed" },
 *   { id: 2, customer: "Rahul", amount: 2000, status: "pending" },
 *   { id: 3, customer: "Amit", amount: 7000, status: "completed" },
 *   { id: 4, customer: "Neha", amount: 3000, status: "completed" }
 * ]
 * Output: [
 *   { customer: "Neha", amount: 3000 },
 *   { customer: "Gaurav", amount: 5000 },
 *   { customer: "Amit", amount: 7000 }
 * ]
 * 
 * Constraints:
 * - Each order object contains `id` (number), `customer` (string), `amount` (number), and `status` (string).
 */
const orders = [
  { id: 1, customer: "Gaurav", amount: 5000, status: "completed" },
  { id: 2, customer: "Rahul", amount: 2000, status: "pending" },
  { id: 3, customer: "Amit", amount: 7000, status: "completed" },
  { id: 4, customer: "Neha", amount: 3000, status: "completed" },
];

const output = orders
  .filter((item) => item.status === "completed")
  .map((item) => ({ customer: item.customer, amount: item.amount }))
  .sort((a, b) => a.amount - b.amount)


console.log("Output", output);


