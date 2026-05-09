const orders = [
  {
    customer: "Gaurav",
    category: "Electronics",
    amount: 5000,
    status: "completed",
  },
  { customer: "Rahul", category: "Books", amount: 1500, status: "pending" },
  {
    customer: "Amit",
    category: "Electronics",
    amount: 8000,
    status: "completed",
  },
  { customer: "Neha", category: "Clothing", amount: 3000, status: "completed" },
  {
    customer: "Riya",
    category: "Electronics",
    amount: 4000,
    status: "completed",
  },
];

const filtOrd = orders
  .filter((item) => item.status === "completed")
  .reduce((acc, item) => {
    const key = item.category;

    if (!acc[key]) {
      acc[key] = {
        totalOrders: 0,
        totalRevenue: 0,
        customers: [],
      };
    }

    acc[key].totalOrders += 1;
    acc[key].totalRevenue += item.amount;
    acc[key].customers.push(item.customer);

    return acc
  }, {});

console.log("Output", filtOrd);
