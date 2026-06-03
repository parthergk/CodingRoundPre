/**
 * 60. Asynchronous Fetch and Join Users with Orders
 * 
 * Problem Description:
 * Given two asynchronous functions `getUsers()` and `getOrders()` which return arrays of users 
 * and orders respectively after some delay.
 * Fetch data from both functions concurrently using `Promise.all` and perform a left-join 
 * transformation to associate each user with their orders under a `products` array.
 * 
 * Example 1:
 * Input:
 * getUsers() -> [{ id: 1, name: "Gaurav" }, { id: 2, name: "Rahul" }]
 * getOrders() -> [{ userId: 1, product: "Laptop" }, { userId: 2, product: "Mouse" }]
 * Output: [
 *   { id: 1, name: "Gaurav", products: ["Laptop"] },
 *   { id: 2, name: "Rahul", products: ["Mouse"] }
 * ]
 * 
 * Constraints:
 * - Must use async/await and Promise.all to load both datasets concurrently.
 */
async function getUsers() {
  return [
    { id: 1, name: "Gaurav" },
    { id: 2, name: "Rahul" }
  ];
}

async function getOrders() {
  return [
    { userId: 1, product: "Laptop" },
    { userId: 2, product: "Mouse" }
  ];
}