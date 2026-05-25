/**
 * 10. Multi-Part Homework: Reduce Operations
 * 
 * Problem Description:
 * This file contains three separate implementations of array reduce patterns:
 * 
 * 1. Sum of Elements:
 *    Calculate the sum of all numerical values in an array.
 * 
 * 2. Element Frequency Count:
 *    Count the occurrence frequency of items in an array and return a key-value object of counts.
 * 
 * 3. Group by Category:
 *    Group an array of objects by their `category` key and return a key-value object where each 
 *    key points to an array of objects belonging to that category.
 * 
 * Note: These snippets are demonstrated using a generic array reference `orders`.
 */
const sum = orders.reduce((acc, item)=> acc + item,0);
console.log("Sum", sum);

const count = orders.reduce((acc, item)=> {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
},{});
console.log("Count", count);


const grp = orders.reduce((acc, item)=> {
    const key = item.category
    if (!acc[key]) {
        acc[key] = []
    };

    acc[key].push(item);
    return acc
},{});
console.log("Group", grp);