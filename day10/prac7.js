const products = [
  "Laptop",
  "Mouse",
  "Keyboard",
  "Monitor",
  "Tablet",
  "Phone"
];

const page = 2;
const limit = 2;
const start = (page-1)*limit
console.log("output", products.slice(start, start + limit));