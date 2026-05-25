/**
 * 4. Aggregate Credit Transactions
 * 
 * Problem Description:
 * Given a list of transactions where each transaction contains `id`, `type` (credit or debit), and `amount`.
 * Implement a function `main` that:
 * 1. Filters all transactions where `type` is "credit".
 * 2. Computes the sum of amounts of all credit transactions.
 * 3. Returns an object containing the list of filtered credit transactions and their total accumulated amount.
 * 
 * Example 1:
 * Input:
 * transactions = [
 *   { id: 1, type: "credit", amount: 1000 },
 *   { id: 2, type: "debit", amount: 500 },
 *   { id: 3, type: "credit", amount: 2000 },
 *   { id: 4, type: "credit", amount: 1500 }
 * ]
 * Output: {
 *   transactions: [
 *     { id: 1, type: "credit", amount: 1000 },
 *     { id: 3, type: "credit", amount: 2000 },
 *     { id: 4, type: "credit", amount: 1500 }
 *   ],
 *   totalAmount: 4500
 * }
 * 
 * Constraints:
 * - Each transaction has `id` (number), `type` ("credit" | "debit"), and `amount` (number).
 */
function main() {
  const transactions = [
    { id: 1, type: "credit", amount: 1000 },
    { id: 2, type: "debit", amount: 500 },
    { id: 3, type: "credit", amount: 2000 },
    { id: 4, type: "credit", amount: 1500 },
  ];

  const output = transactions
    .filter((item) => item.type === "credit")

    return {
        transactions: output,
        totalAmount: output.reduce((acc, item) => acc + item.amount, 0)
    }
}
console.log("output", main());
