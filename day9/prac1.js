/**
 * 46. Left Join Users with Orders
 * 
 * Problem Description:
 * Given two arrays: `users` (each with `id` and `name`) and `orders` (each with `userId` and `product`).
 * Perform a left-join style transformation such that each user object in the result includes 
 * an array of `products` containing the products they have ordered.
 * If a user has no orders, their `products` array should be empty.
 * 
 * Example 1:
 * Input:
 * users = [
 *   { id: 1, name: "Gaurav" },
 *   { id: 2, name: "Rahul" },
 *   { id: 3, name: "Amit" }
 * ]
 * orders = [
 *   { userId: 1, product: "Laptop" },
 *   { userId: 2, product: "Mouse" },
 *   { userId: 1, product: "Keyboard" }
 * ]
 * Output: [
 *   { id: 1, name: "Gaurav", products: ["Laptop", "Keyboard"] },
 *   { id: 2, name: "Rahul", products: ["Mouse"] },
 *   { id: 3, name: "Amit", products: [] }
 * ]
 * 
 * Constraints:
 * - Time complexity should be optimized where possible.
 */
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
