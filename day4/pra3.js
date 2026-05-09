const employees = [
  { name: "Gaurav", salary: 70000, active: true },
  { name: "Rahul", salary: 40000, active: false },
  { name: "Amit", salary: 90000, active: true },
  { name: "Neha", salary: 60000, active: true },
  { name: "Riya", salary: 85000, active: false }
];

const ouput = employees.filter(item => item.active === true).sort((a, b)=> b.salary - a.salary).slice(0, 2).map(item=> item.name);
console.log("Output", ouput);
