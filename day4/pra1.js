/**
 * 15. Sort Products by Price Descending
 * 
 * Problem Description:
 * Given an array of products where each product has a `name` and a `price`.
 * Sort the products by price in descending order, and return an array of their names.
 * 
 * Example 1:
 * Input:
 * products = [
 *   { name: "Laptop", price: 50000 },
 *   { name: "Mouse", price: 500 },
 *   { name: "Monitor", price: 12000 },
 *   { name: "Keyboard", price: 1500 }
 * ]
 * Output: ["Laptop", "Monitor", "Keyboard", "Mouse"]
 * 
 * Constraints:
 * - Each product object contains `name` (string) and `price` (number).
 */
const products = [
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 500 },
  { name: "Monitor", price: 12000 },
  { name: "Keyboard", price: 1500 }
];

const sortPro = products.sort((a, b)=> b.price - a.price).map(item => item.name);
console.log("Output",sortPro);
