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
