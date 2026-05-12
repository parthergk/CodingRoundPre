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
  