const products = [
  { name: "Laptop", category: "Electronics", stock: 10 },
  { name: "Mouse", category: "Electronics", stock: 0 },
  { name: "Shirt", category: "Clothing", stock: 5 },
  { name: "Jeans", category: "Clothing", stock: 0 },
  { name: "Book", category: "Books", stock: 8 }
];

const grpd = products.filter(item => item.stock > 0).reduce((acc, item)=>{
    const key = item.category;

    if (!acc[key]) {
        acc[key] = []
    }
    acc[key].push(item.name)
    return acc;
},{})

console.log("Output", grpd);
