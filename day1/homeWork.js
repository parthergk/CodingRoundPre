/**
 * 5. Filter, Map and Sort Credit Transactions (Homework)
 * 
 * Problem Description:
 * Given an array of transactions, each containing an `id`, `type`, and `amount`.
 * Filter out all transactions that are credits (`type === "credit"`).
 * Map them to a new list of objects containing only their `id` and `amount`.
 * Finally, sort these mapped credit transactions by their `amount` in ascending order.
 * 
 * Example 1:
 * Input:
 * transactions = [
 *   { id: 1, type: "credit", amount: 1000 },
 *   { id: 2, type: "debit", amount: 500 },
 *   { id: 3, type: "credit", amount: 2000 },
 *   { id: 4, type: "credit", amount: 1500 }
 * ]
 * Output: [
 *   { id: 1, amount: 1000 },
 *   { id: 4, amount: 1500 },
 *   { id: 3, amount: 2000 }
 * ]
 * 
 * Constraints:
 * - Each transaction has `id` (number), `type` ("credit" | "debit"), and `amount` (number).
 */
const transactions = [
  { id: 1, type: "credit", amount: 1000 },
  { id: 2, type: "debit", amount: 500 },
  { id: 3, type: "credit", amount: 2000 },
  { id: 4, type: "credit", amount: 1500 },
];

const output = transactions
  .filter((item) => item.type === "credit")
  .map((item) => ({ id: item.id, amount: item.amount }))
  .sort((a, b) => a.amount- b.amount)
console.log("Output", output);
