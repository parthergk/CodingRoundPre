/**
 * 50. Calculate Cart Totals using Reduce
 * 
 * Problem Description:
 * Given an array of cart items where each item has `product` (string), `price` (number), and `quantity` (number).
 * Calculate the total number of items (`totalItems`) and the total price of all items in the cart (`totalPrice`) 
 * using the `reduce` array method.
 * 
 * Example 1:
 * Input:
 * cart = [
 *   { product: "Laptop", price: 50000, quantity: 1 },
 *   { product: "Mouse", price: 500, quantity: 2 },
 *   { product: "Keyboard", price: 1500, quantity: 1 }
 * ]
 * Output: { totalItems: 4, totalPrice: 52500 }
 * 
 * Constraints:
 * - Must use array `reduce` helper.
 */
const cart = [
  { product: "Laptop", price: 50000, quantity: 1 },
  { product: "Mouse", price: 500, quantity: 2 },
  { product: "Keyboard", price: 1500, quantity: 1 },
];

console.log("Ouput", {
  totalItems: cart.reduce((acc, item) => acc = acc + item.quantity, 0), 
  totalPrice: cart.reduce(
    (acc, item) => (acc = acc + item.price * item.quantity),
    0,
  ),
});
