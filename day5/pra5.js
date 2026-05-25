/**
 * 23. Group In-Stock Products by Category
 * 
 * Problem Description:
 * Given an array of products where each product contains a `name`, `category`, and a `stock` count.
 * Filter out products that are out of stock (`stock <= 0`).
 * Group the remaining in-stock products by `category`, returning an object where keys are the 
 * categories and values are arrays containing only the names of the products in those categories.
 * 
 * Example 1:
 * Input:
 * products = [
 *   { name: "Laptop", category: "Electronics", stock: 10 },
 *   { name: "Mouse", category: "Electronics", stock: 0 },
 *   { name: "Shirt", category: "Clothing", stock: 5 },
 *   { name: "Jeans", category: "Clothing", stock: 0 },
 *   { name: "Book", category: "Books", stock: 8 }
 * ]
 * Output: {
 *   Electronics: ["Laptop"],
 *   Clothing: ["Shirt"],
 *   Books: ["Book"]
 * }
 * 
 * Constraints:
 * - Each product object contains `name` (string), `category` (string), and `stock` (number).
 */
const products = [
  { name: "Laptop", category: "Electronics", stock: 10 },
  { name: "Mouse", category: "Electronics", stock: 0 },
  { name: "Shirt", category: "Clothing", stock: 5 },
  { name: "Jeans", category: "Clothing", stock: 0 },
  { name: "Book", category: "Books", stock: 8 }
];

const grpd = products.filter(item => item.stock > 0).reduce((acc, item)=>{
    const key = item.category;

    if (!acc[key]) {
        acc[key] = []
    }
    acc[key].push(item.name)
    return acc;
},{})

console.log("Output", grpd);
