async function getUsers() {
  return [
    { id: 1, name: "Gaurav" },
    { id: 2, name: "Rahul" }
  ];
}

async function getOrders() {
  return [
    { userId: 1, product: "Laptop" },
    { userId: 2, product: "Mouse" }
  ];
}