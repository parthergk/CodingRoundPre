/**
 * 1. Filter and Map Products by Price
 * 
 * Problem Description:
 * Given an array of products, where each product has an `id`, `name`, and `price`.
 * Filter out the products whose price is strictly greater than 1000, and return 
 * an array containing only the names of these filtered products.
 * 
 * Example 1:
 * Input:
 * products = [
 *   { id: 1, name: "Laptop", price: 50000 },
 *   { id: 2, name: "Mouse", price: 500 },
 *   { id: 3, name: "Keyboard", price: 1500 },
 *   { id: 4, name: "Monitor", price: 12000 }
 * ]
 * Output: ["Laptop", "Keyboard", "Monitor"]
 * 
 * Constraints:
 * - Each product object contains `id` (number), `name` (string), and `price` (number).
 * - The input array can contain 0 or more products.
 */
const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mouse", price: 500 },
  { id: 3, name: "Keyboard", price: 1500 },
  { id: 4, name: "Monitor", price: 12000 },
];

const output = products.filter((item) => item.price>1000).map(item => item.name);

console.log("Output", output);
