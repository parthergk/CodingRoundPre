const employees = [
  { name: "Gaurav", department: "Engineering" },
  { name: "Rahul", department: "HR" },
  { name: "Amit", department: "Engineering" },
  { name: "Neha", department: "Design" }
];

const group = employees.reduce((acc, item)=> {
    const key = item.department;

    if (!acc[key]) {
        acc[key] = [];
    };

    acc[key].push(item);
    return acc
}, {});

console.log("Output", group);
