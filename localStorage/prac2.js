const cart = [
  { id: 1, product: "Laptop", quantity: 1 },
  { id: 2, product: "Mouse", quantity: 2 }
];


localStorage.setItem("cart", JSON.stringify(cart))

const data = localStorage.getItem("cart"); 