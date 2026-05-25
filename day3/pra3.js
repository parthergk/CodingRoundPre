/**
 * 13. Calculate Average Marks of Students
 * 
 * Problem Description:
 * Given an array of student objects where each student has a `name` and their `marks`.
 * Calculate the average marks of all students in the class.
 * 
 * Example 1:
 * Input:
 * students = [
 *   { name: "Gaurav", marks: 80 },
 *   { name: "Rahul", marks: 60 },
 *   { name: "Amit", marks: 90 },
 *   { name: "Neha", marks: 70 }
 * ]
 * Output: 75
 * Explanation: Total marks = 80 + 60 + 90 + 70 = 300. Average = 300 / 4 = 75.
 * 
 * Constraints:
 * - Each student object contains `name` (string) and `marks` (number).
 */
const students = [
  { name: "Gaurav", marks: 80 },
  { name: "Rahul", marks: 60 },
  { name: "Amit", marks: 90 },
  { name: "Neha", marks: 70 }
];

const total = students.reduce((acc, item)=> acc + item.marks, 0);

const avr = total/students.length
console.log("avr", avr);

