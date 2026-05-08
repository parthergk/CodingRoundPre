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
