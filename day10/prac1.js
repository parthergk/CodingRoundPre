const cart = [
  { product: "Laptop", price: 50000, quantity: 1 },
  { product: "Mouse", price: 500, quantity: 2 },
  { product: "Keyboard", price: 1500, quantity: 1 },
];

console.log("Ouput", {
  totalItems: cart.reduce((acc, item) => acc = acc + item.quantity, 0), 
  totalPrice: cart.reduce(
    (acc, item) => (acc = acc + item.price * item.quantity),
    0,
  ),
});
