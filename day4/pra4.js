/**
 * 18. Aggregate Completed Orders by Category
 * 
 * Problem Description:
 * Given an array of order objects where each order has `customer`, `category`, `amount`, and `status`.
 * Filter out pending orders (keep only `status === "completed"`).
 * Group the completed orders by their `category`. For each category, compute:
 * 1. `totalOrders`: The total count of completed orders in that category.
 * 2. `totalRevenue`: The sum of all order amounts in that category.
 * 3. `customers`: An array of customer names who placed those completed orders.
 * Return an object where keys are the category names, and values are the computed aggregates.
 * 
 * Example 1:
 * Input:
 * orders = [
 *   { customer: "Gaurav", category: "Electronics", amount: 5000, status: "completed" },
 *   { customer: "Rahul", category: "Books", amount: 1500, status: "pending" },
 *   { customer: "Amit", category: "Electronics", amount: 8000, status: "completed" },
 *   { customer: "Neha", category: "Clothing", amount: 3000, status: "completed" },
 *   { customer: "Riya", category: "Electronics", amount: 4000, status: "completed" }
 * ]
 * Output: {
 *   Electronics: {
 *     totalOrders: 3,
 *     totalRevenue: 17000,
 *     customers: ["Gaurav", "Amit", "Riya"]
 *   },
 *   Clothing: {
 *     totalOrders: 1,
 *     totalRevenue: 3000,
 *     customers: ["Neha"]
 *   }
 * }
 * 
 * Constraints:
 * - Each order object has `customer` (string), `category` (string), `amount` (number), and `status` (string).
 */
const orders = [
  {
    customer: "Gaurav",
    category: "Electronics",
    amount: 5000,
    status: "completed",
  },
  { customer: "Rahul", category: "Books", amount: 1500, status: "pending" },
  {
    customer: "Amit",
    category: "Electronics",
    amount: 8000,
    status: "completed",
  },
  { customer: "Neha", category: "Clothing", amount: 3000, status: "completed" },
  {
    customer: "Riya",
    category: "Electronics",
    amount: 4000,
    status: "completed",
  },
];

const filtOrd = orders
  .filter((item) => item.status === "completed")
  .reduce((acc, item) => {
    const key = item.category;

    if (!acc[key]) {
      acc[key] = {
        totalOrders: 0,
        totalRevenue: 0,
        customers: [],
      };
    }

    acc[key].totalOrders += 1;
    acc[key].totalRevenue += item.amount;
    acc[key].customers.push(item.customer);

    return acc
  }, {});

console.log("Output", filtOrd);
