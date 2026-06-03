/**
 * 58. Update Todo Task Text
 * 
 * Problem Description:
 * Given an array of todo items, each with `id`, `task`, and `completed` status.
 * Update the task text of the todo item matching `targetId` to the `newTask` string.
 * Return the updated array.
 * 
 * Example 1:
 * Input:
 * todos = [
 *   { id: 1, task: "Learn JS", completed: false },
 *   { id: 2, task: "Practice React", completed: true }
 * ]
 * targetId = 1
 * newTask = "Learn Advanced JS"
 * Output: [
 *   { id: 1, task: "Learn Advanced JS", completed: false },
 *   { id: 2, task: "Practice React", completed: true }
 * ]
 * 
 * Constraints:
 * - Make sure other todo items and properties remain unchanged.
 */
const todos = [
  { id: 1, task: "Learn JS", completed: false },
  { id: 2, task: "Practice React", completed: true }
];

const targetId = 1;
const newTask = "Learn Advanced JS";

const output = todos.map(itm => {
    if (itm.id === targetId) {
        return{
            ...itm,
            task: newTask
        }
    }
    return itm
});

console.log("Ouput", output);