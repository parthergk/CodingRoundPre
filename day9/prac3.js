const users = [
  { id: 1, name: "Gaurav" },
  { id: 2, name: "Rahul" },
  { id: 3, name: "Amit" }
];

const output = users.reduce((acc, itm)=>{
    acc[itm.id] = itm;
    return acc
},{});

console.log("Output", output);
