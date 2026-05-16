const users = [
  { name: "Gaurav", city: "Delhi" },
  { name: "Rahul", city: "Mumbai" },
  { name: "Amit", city: "Delhi" },
  { name: "Neha", city: "Bangalore" },
  { name: "Riya", city: "Delhi" }
];

const output = users.reduce((acc, item)=> {
    
    acc[item.city] = (acc[item.city] || 0) +1
    return acc
},{});

console.log("Output", output);
