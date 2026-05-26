const cart = [
  { id: 1, product: "Laptop" },
  { id: 2, product: "Mouse" },
  { id: 3, product: "Keyboard" }
];

const removeId = 2;

console.log(cart.filter(item => item.id !== removeId));