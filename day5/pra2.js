const sales = [
  { employee: "Gaurav", region: "North", amount: 5000 },
  { employee: "Rahul", region: "South", amount: 3000 },
  { employee: "Amit", region: "North", amount: 7000 },
  { employee: "Neha", region: "East", amount: 4000 },
  { employee: "Riya", region: "North", amount: 2000 },
  { employee: "Karan", region: "South", amount: 6000 },
];

const output = sales.reduce((acc, item) => {
  const key = item.region;

  if (!acc[key]) {
    acc[key] = {
      totalSales: 0,
      topEmployee: "",
      maxSale: 0,
    };
  }

  acc[key].totalSales += item.amount;
  if (item.amount > acc[key].maxSale) {
    acc[key].maxSale = item.amount
    acc[key].topEmployee = item.employee
  }
   return acc
}, {});

console.log("output", Object.keys(output));
