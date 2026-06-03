/**
 * 54. Remove Product from Cart by ID
 * 
 * Problem Description:
 * Given an array of cart items, each with an `id` and `product`.
 * Remove the item whose `id` matches `removeId` and return the new array.
 * 
 * Example 1:
 * Input:
 * cart = [
 *   { id: 1, product: "Laptop" },
 *   { id: 2, product: "Mouse" },
 *   { id: 3, product: "Keyboard" }
 * ]
 * removeId = 2
 * Output: [
 *   { id: 1, product: "Laptop" },
 *   { id: 3, product: "Keyboard" }
 * ]
 * 
 * Constraints:
 * - Must not modify the original array (return a filtered new array).
 */
const cart = [
  { id: 1, product: "Laptop" },
  { id: 2, product: "Mouse" },
  { id: 3, product: "Keyboard" }
];

const removeId = 2;

console.log(cart.filter(item => item.id !== removeId));