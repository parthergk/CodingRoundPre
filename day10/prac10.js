/**
 * 59. Remove Completed Todos
 * 
 * Problem Description:
 * Given an array of todo items, each containing an `id`, `task`, and `completed` status.
 * Filter out all completed todo items, returning a new array containing only the uncompleted (active) todo items.
 * 
 * Example 1:
 * Input:
 * todos = [
 *   { id: 1, task: "Learn JS", completed: false },
 *   { id: 2, task: "Practice React", completed: true },
 *   { id: 3, task: "Build Project", completed: false },
 *   { id: 4, task: "Read Docs", completed: true }
 * ]
 * Output: [
 *   { id: 1, task: "Learn JS", completed: false },
 *   { id: 3, task: "Build Project", completed: false }
 * ]
 * 
 * Constraints:
 * - Return a new filtered array. Do not mutate the original array.
 */
const todos = [
  { id: 1, task: "Learn JS", completed: false },
  { id: 2, task: "Practice React", completed: true },
  { id: 3, task: "Build Project", completed: false },
  { id: 4, task: "Read Docs", completed: true }
];

const output = todos.filter(itm => !itm.completed);
console.log("Removed all completed", output);