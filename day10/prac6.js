/**
 * 55. Toggle Todo Completed Status
 * 
 * Problem Description:
 * Given an array of todo items, each with an `id`, `task`, and `completed` status.
 * Toggle the `completed` status of the todo item matching `targetId`.
 * Ensure that the original objects are not mutated and other todo items are unchanged.
 * 
 * Example 1:
 * Input:
 * todos = [
 *   { id: 1, task: "Learn JS", completed: false },
 *   { id: 2, task: "Practice Coding", completed: true }
 * ]
 * targetId = 1
 * Output: [
 *   { id: 1, task: "Learn JS", completed: true },
 *   { id: 2, task: "Practice Coding", completed: true }
 * ]
 * 
 * Constraints:
 * - Return a new array containing a new, toggled todo object for the target ID.
 */
const todos = [
  { id: 1, task: "Learn JS", completed: false },
  { id: 2, task: "Practice Coding", completed: true }
];

const targetId = 1;

const output = todos.map(item => {
    if (item.id === targetId) {
    return {
            ...item,
            completed: !item.completed
        }
    }
    return item
})
console.log("Output", output);
