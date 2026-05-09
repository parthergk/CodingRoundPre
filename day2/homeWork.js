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