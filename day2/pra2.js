const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

const count = fruits.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc
}, {});

console.log("OutPut", count);
