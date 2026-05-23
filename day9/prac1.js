const users = [
  { id: 1, name: "Gaurav" },
  { id: 2, name: "Rahul" },
  { id: 3, name: "Amit" }
];

const orders = [
  { userId: 1, product: "Laptop" },
  { userId: 2, product: "Mouse" },
  { userId: 1, product: "Keyboard" }
];

// const output = users.map(usr => {
//     orders.forEach(ord => {
//         if (usr.id === ord.userId) {
//             if(!usr["product"]){
//                 usr["product"] = []
//             }

//             usr["product"].push(ord.product)
//         }
//     });
//     return usr
// });

// console.log("user", output);


// second and main approach

const output1 = users.map(usr =>{
    const products = [];
    orders.forEach(ord => {
        if (usr.id === ord.userId) {
            products.push(ord.product)
        }
    });

    return{
        ...usr,
        products
    }
})

console.log("Ouputputsecond", output1);
