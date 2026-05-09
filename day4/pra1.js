const products = [
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 500 },
  { name: "Monitor", price: 12000 },
  { name: "Keyboard", price: 1500 }
];

const sortPro = products.sort((a, b)=> b.price - a.price).map(item => item.name);
console.log("Output",sortPro);
