/**
 * 9. Count Completed Orders by Category
 * 
 * Problem Description:
 * Given an array of order objects, where each order has `id`, `category`, and `status`.
 * Filter for orders where `status` is "completed".
 * Group and count these completed orders by their `category` and return an object 
 * containing categories as keys and their completed order counts as values using `reduce`.
 * 
 * Example 1:
 * Input:
 * orders = [
 *   { id: 1, category: "Electronics", status: "completed" },
 *   { id: 2, category: "Clothing", status: "pending" },
 *   { id: 3, category: "Electronics", status: "completed" },
 *   { id: 4, category: "Books", status: "completed" },
 *   { id: 5, category: "Books", status: "pending" }
 * ]
 * Output: { Electronics: 2, Books: 1 }
 * 
 * Constraints:
 * - Each order has `id` (number), `category` (string), and `status` (string).
 */
const orders = [
  { id: 1, category: "Electronics", status: "completed" },
  { id: 2, category: "Clothing", status: "pending" },
  { id: 3, category: "Electronics", status: "completed" },
  { id: 4, category: "Books", status: "completed" },
  { id: 5, category: "Books", status: "pending" },
];

const output = orders
  .filter((item) => item.status === "completed").reduce((acc, item) => {
    
    acc[item.category]= (acc[item.category] || 0) + 1
    return acc;
  }, {});

console.log("Ouput", output);
