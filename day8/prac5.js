const users = [
  { name: "Gaurav", age: 22 },
  { name: "Rahul", age: 20 },
  { name: "Amit", age: 22 },
  { name: "Neha", age: 21 }
];

const ouptut = users.reduce((acc, itm)=> {
    const key = itm.age
    if (!acc[key]) {
        acc[key] = []
    };

    acc[key].push(itm.name)
    return acc
}, {});
console.log("Output", ouptut);
