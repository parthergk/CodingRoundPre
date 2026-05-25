/**
 * 24. Get Top 2 Students
 * 
 * Problem Description:
 * Given an array of student objects where each student has a `name` and their `marks`.
 * Sort the students by marks in descending order, select the top 2 students, and return them.
 * 
 * Example 1:
 * Input:
 * students = [
 *   { name: "Gaurav", marks: 80 },
 *   { name: "Rahul", marks: 60 },
 *   { name: "Amit", marks: 95 },
 *   { name: "Neha", marks: 70 },
 *   { name: "Riya", marks: 90 }
 * ]
 * Output: [
 *   { name: "Amit", marks: 95 },
 *   { name: "Riya", marks: 90 }
 * ]
 * 
 * Constraints:
 * - Each student object contains `name` (string) and `marks` (number).
 */
const students = [
  { name: "Gaurav", marks: 80 },
  { name: "Rahul", marks: 60 },
  { name: "Amit", marks: 95 },
  { name: "Neha", marks: 70 },
  { name: "Riya", marks: 90 },
];

const output = students.sort((a, b) => b.marks - a.marks).slice(0,2);

console.log("Output", output);
