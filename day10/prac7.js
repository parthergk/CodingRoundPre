/**
 * 56. Paginate Products List
 * 
 * Problem Description:
 * Given an array of products, a `page` number (1-indexed), and a `limit` indicating the maximum items per page.
 * Return the subset of products representing that page.
 * 
 * Example 1:
 * Input:
 * products = [
 *   "Laptop",
 *   "Mouse",
 *   "Keyboard",
 *   "Monitor",
 *   "Tablet",
 *   "Phone"
 * ]
 * page = 2
 * limit = 2
 * Output: ["Keyboard", "Monitor"]
 * 
 * Constraints:
 * - Calculate the starting index correctly as `(page - 1) * limit`.
 */
const products = [
  "Laptop",
  "Mouse",
  "Keyboard",
  "Monitor",
  "Tablet",
  "Phone"
];

const page = 2;
const limit = 2;
const start = (page-1)*limit
console.log("output", products.slice(start, start + limit));