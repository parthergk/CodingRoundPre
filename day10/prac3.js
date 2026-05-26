const products = [
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 500 },
  { name: "Keyboard", price: 1500 }
];

console.log(products.sort((a,b)=> a.price - b.price));