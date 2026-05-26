const cart = [
  { id: 1, product: "Laptop", quantity: 1 },
  { id: 2, product: "Mouse", quantity: 2 }
];

const targetId = 2;

const output = cart.map(item => {
    if (item.id === targetId) {
        item.quantity += 1
    }
    return item
})

console.log("output", output);
