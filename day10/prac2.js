const products = [
  { name: "Laptop" },
  { name: "Mouse" },
  { name: "Keyboard" },
  { name: "Monitor" }
];

const search = "mo";

const output = products.filter(item => item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()));

console.log("OutPut", output);
