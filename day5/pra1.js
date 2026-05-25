/**
 * 19. Aggregate Successful Payments by Method
 * 
 * Problem Description:
 * Given an array of payment objects, where each object contains a `user`, `method`, `amount`, and `success` status.
 * Filter out unsuccessful payments (keep only `success === true`).
 * Group the successful payments by their `method`. For each payment method, calculate:
 * 1. `totalTransactions`: The count of successful transactions.
 * 2. `totalAmount`: The sum of all successful payment amounts.
 * 3. `users`: An array of users who successfully paid using this method.
 * Return an object representing these grouped aggregates.
 * 
 * Example 1:
 * Input:
 * payments = [
 *   { user: "Gaurav", method: "UPI", amount: 2000, success: true },
 *   { user: "Rahul", method: "Card", amount: 5000, success: false },
 *   { user: "Amit", method: "UPI", amount: 3000, success: true },
 *   { user: "Neha", method: "NetBanking", amount: 4000, success: true },
 *   { user: "Riya", method: "UPI", amount: 1500, success: false }
 * ]
 * Output: {
 *   UPI: { totalTransactions: 2, totalAmount: 5000, users: ["Gaurav", "Amit"] },
 *   NetBanking: { totalTransactions: 1, totalAmount: 4000, users: ["Neha"] }
 * }
 * 
 * Constraints:
 * - Each payment object contains `user` (string), `method` (string), `amount` (number), and `success` (boolean).
 */
const payments = [
  { user: "Gaurav", method: "UPI", amount: 2000, success: true },
  { user: "Rahul", method: "Card", amount: 5000, success: false },
  { user: "Amit", method: "UPI", amount: 3000, success: true },
  { user: "Neha", method: "NetBanking", amount: 4000, success: true },
  { user: "Riya", method: "UPI", amount: 1500, success: false },
];

const output = payments
  .filter((item) => item.success === true)
  .reduce((acc, item) => {
    const key = item.method;

    if (!acc[key]) {
      acc[key] = {
        totalTransactions: 0,
        totalAmount: 0,
        users: [],
      };
    }

    acc[key].totalTransactions += 1;
    acc[key].totalAmount += item.amount;
    acc[key].users.push(item.user);

    return acc;
  }, {});

console.log("Output", output);
  