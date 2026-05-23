const users = [
  { name: "Rahul" },
  { name: "Amit" },
  { name: "Gaurav" }
];

const ouptut = users.sort((a, b) => a.name.localeCompare(b.name))
console.log("OutPut", ouptut);
