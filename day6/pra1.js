/**
 * 29. Aggregate Credits from Transactions
 * 
 * Problem Description:
 * Given an array of transaction records, where each record contains `user`, `type` (credit/debit), and `amount`.
 * Filter out all debit transactions (keep only `type === "credit"`).
 * Return an aggregated object containing:
 * 1. `totalCredits`: Count of credit transactions.
 * 2. `totalCreditAmount`: The total sum of all credit transaction amounts.
 * 3. `creditUsers`: An array of user names who had credit transactions.
 * 
 * Example 1:
 * Input:
 * transactions = [
 *   { user: "Gaurav", type: "credit", amount: 3000 },
 *   { user: "Rahul", type: "debit", amount: 1000 },
 *   { user: "Amit", type: "credit", amount: 5000 },
 *   { user: "Neha", type: "credit", amount: 2000 }
 * ]
 * Output: {
 *   totalCredits: 3,
 *   totalCreditAmount: 10000,
 *   creditUsers: ["Gaurav", "Amit", "Neha"]
 * }
 * 
 * Constraints:
 * - Each transaction contains `user` (string), `type` (string), and `amount` (number).
 */
const transactions = [
  { user: "Gaurav", type: "credit", amount: 3000 },
  { user: "Rahul", type: "debit", amount: 1000 },
  { user: "Amit", type: "credit", amount: 5000 },
  { user: "Neha", type: "credit", amount: 2000 }
];

const output = transactions.filter(item=> item.type === "credit")

console.log("ouput", {
     totalCredits: output.length,
  totalCreditAmount: output.reduce((acc, item)=> acc = acc + item.amount, 0),
  creditUsers: output.map(item => item.user)
});
