/**
 * 12. Fetch and Aggregate Posts by User IDs
 * 
 * Problem Description:
 * Implement an asynchronous function `getData` that fetches posts from the API
 * endpoint `https://jsonplaceholder.typicode.com/posts`.
 * Filter out posts where `userId <= 3`.
 * Return an object containing:
 * 1. `totalPosts`: The total number of filtered posts.
 * 2. `totalUserIds`: The sum of all `userId` fields of these filtered posts.
 * 
 * Example:
 * Input (from API): Array of post objects
 * Output: {
 *   totalPosts: 30,
 *   totalUserIds: 60
 * }
 * 
 * Constraints:
 * - Return an empty object or handle error in the catch block if the request fails.
 */
async function getData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const result = await response.json();
      
        const filterPost = result.filter((item) => item.userId <= 3);
      
        return {
          totalPosts: filterPost.length,
          totalUserIds: filterPost.reduce((acc, item) => acc + item.userId, 0),
        };
        
    } catch (error) {
        console.log("Error", error);       
        return {} 
    }
}

async function main() {
    const output = await getData()
    console.log("output", output);
}
main();
