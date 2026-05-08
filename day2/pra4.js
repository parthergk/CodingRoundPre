const orders = [
  { id: 1, category: "Electronics", status: "completed" },
  { id: 2, category: "Clothing", status: "pending" },
  { id: 3, category: "Electronics", status: "completed" },
  { id: 4, category: "Books", status: "completed" },
  { id: 5, category: "Books", status: "pending" },
];

const output = orders
  .filter((item) => item.status === "completed").reduce((acc, item) => {
    
    acc[item.category]= (acc[item.category] || 0) + 1
    return acc;
  }, {});

console.log("Ouput", output);
