/**
 * 52. Sort Products by Price
 * 
 * Problem Description:
 * Given an array of products, where each product has a `name` and `price`.
 * Sort the products by price in ascending order.
 * 
 * Example 1:
 * Input:
 * products = [
 *   { name: "Laptop", price: 50000 },
 *   { name: "Mouse", price: 500 },
 *   { name: "Keyboard", price: 1500 }
 * ]
 * Output: [
 *   { name: 'Mouse', price: 500 },
 *   { name: 'Keyboard', price: 1500 },
 *   { name: 'Laptop', price: 50000 }
 * ]
 * 
 * Constraints:
 * - Must sort the original array or a copy in ascending order of `price`.
 */
const products = [
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 500 },
  { name: "Keyboard", price: 1500 }
];

console.log(products.sort((a,b)=> a.price - b.price));