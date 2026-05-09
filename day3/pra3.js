const students = [
  { name: "Gaurav", marks: 80 },
  { name: "Rahul", marks: 60 },
  { name: "Amit", marks: 90 },
  { name: "Neha", marks: 70 }
];

const total = students.reduce((acc, item)=> acc + item.marks, 0);

const avr = total/students.length
console.log("avr", avr);

