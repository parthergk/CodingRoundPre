const users = [
  { id: 1, name: "Gaurav", age: 22, active: true },
  { id: 2, name: "Rahul", age: 17, active: true },
  { id: 3, name: "Amit", age: 25, active: false },
  { id: 4, name: "Neha", age: 30, active: true },
];

const output = users
  .filter((item) => item.age >= 18 && item.active === true)
  .map((item) => ({ id: item.id, name: item.name }));

console.log("Out put", output);
