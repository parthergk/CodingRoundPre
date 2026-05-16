const sales = [
  { employee: "Gaurav", department: "Engineering", amount: 5000 },
  { employee: "Rahul", department: "HR", amount: 3000 },
  { employee: "Amit", department: "Engineering", amount: 7000 },
  { employee: "Neha", department: "Design", amount: 4000 },
  { employee: "Riya", department: "Engineering", amount: 2000 },
];

const groupd = sales.reduce((acc, item) => {
  const key = item.department;

  if (!acc[key]) {
    acc[key] = {
      topAm: 0,
      totalSales: 0,
      topPerformer: "",
    };
  }
  acc[key].totalSales += item.amount;

  if (item.amount > acc[key].topAm) {
    acc[key].topAm = item.amount
    acc[key].topPerformer = item.employee
  }
  return acc;
}, {});

const output = Object.keys(groupd).map(item => ({item,
    totalSales: groupd[item].totalSales,
    topPerformer: groupd[item].topPerformer})) 
console.log("Grpopued", output);
