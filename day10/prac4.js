/**
 * 53. Update Product Quantity in Cart
 * 
 * Problem Description:
 * Given an array representing a shopping cart where each item has an `id`, `product`, and `quantity`.
 * Update the quantity of the item matching the `targetId` by increasing its `quantity` by 1.
 * Return the updated cart.
 * 
 * Example 1:
 * Input:
 * cart = [
 *   { id: 1, product: "Laptop", quantity: 1 },
 *   { id: 2, product: "Mouse", quantity: 2 }
 * ]
 * targetId = 2
 * Output: [
 *   { id: 1, product: "Laptop", quantity: 1 },
 *   { id: 2, product: "Mouse", quantity: 3 }
 * ]
 * 
 * Constraints:
 * - Modify the quantity of the matching object.
 */
const cart = [
  { id: 1, product: "Laptop", quantity: 1 },
  { id: 2, product: "Mouse", quantity: 2 }
];

const targetId = 2;

const output = cart.map(item => {
    if (item.id === targetId) {
        item.quantity += 1
    }
    return item
})

console.log("output", output);
