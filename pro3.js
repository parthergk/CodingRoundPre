const orders = [
  { id: 1, customer: "Gaurav", amount: 5000, status: "completed" },
  { id: 2, customer: "Rahul", amount: 2000, status: "pending" },
  { id: 3, customer: "Amit", amount: 7000, status: "completed" },
  { id: 4, customer: "Neha", amount: 3000, status: "completed" },
];

const output = orders
  .filter((item) => item.status === "completed")
  .map((item) => ({ customer: item.customer, amount: item.amount }))
  .sort((a, b) => a.amount - b.amount)


console.log("Output", output);


