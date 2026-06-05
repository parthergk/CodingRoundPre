async function getUsers() {
  return [
    { id: 1, name: "Gaurav" },
    { id: 2, name: "Rahul" }
  ];
}

async function getOrders() {
  return [
    { userId: 1, product: "Laptop" },
    { userId: 1, product: "Mouse" },
    { userId: 2, product: "Keyboard" }
  ];
}

async function main() {
    const [users, orders] = await Promise.all([getUsers(), getOrders()]);

    const output = users.map(usr=>{
        const products = [];
        orders.forEach(ord=>{
            if (usr.id === ord.userId) {
                products.push(ord.product)
            }
        })
        return {
            ...usr,
            products
        }
    });
    console.log(output);
}

main();