const orders = [
  { customer: "Gaurav", amount: 5000, status: "completed" },
  { customer: "Rahul", amount: 2000, status: "pending" },
  { customer: "Amit", amount: 7000, status: "completed" },
  { customer: "Neha", amount: 3000, status: "completed" },
];

const ouput = orders.filter((item) => item.status === "completed");

console.log("Output", {
  totalCompletedOrders: ouput.length,
  totalRevenue: ouput.reduce((acc, item) => {
    acc = acc + item.amount;
    return acc;
  }, 0),
});
