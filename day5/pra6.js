const students = [
  { name: "Gaurav", marks: 80 },
  { name: "Rahul", marks: 60 },
  { name: "Amit", marks: 95 },
  { name: "Neha", marks: 70 },
  { name: "Riya", marks: 90 },
];

const output = students.sort((a, b) => b.marks - a.marks).slice(0,2);

console.log("Output", output);
