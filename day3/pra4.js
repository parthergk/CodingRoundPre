/**
 * 14. Fetch and Aggregate Completed Todos
 * 
 * Problem Description:
 * Implement an asynchronous function `getData` that fetches todos from the API
 * endpoint `https://jsonplaceholder.typicode.com/todos`.
 * Filter out todos where `completed === true`.
 * Return an object containing:
 * 1. `totalCompleted`: The count of completed todos.
 * 2. `completedTitles`: An array containing only the titles of completed todos.
 * 
 * Example:
 * Input (from API): Array of todo objects
 * Output: {
 *   totalCompleted: 90,
 *   completedTitles: ["delectus aut autem", "quis ut nam facilis...", ...]
 * }
 * 
 * Constraints:
 * - Return an empty object or handle error in the catch block if the request fails.
 */
async function getData() {
    try {
        const resp = await fetch("https://jsonplaceholder.typicode.com/todos");
        const res = await resp.json();

        const todos = res.filter(item => item.completed === true);

        return {
            totalCompleted: todos.length,
            completedTitles: todos.map(item => item.title)
        }
    } catch (error) {
        console.log("Error", error);
        return{}
    }
}

async function main() {
    const output = await getData();
    console.log("Output",output);
}

main();