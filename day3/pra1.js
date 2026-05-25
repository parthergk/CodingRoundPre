/**
 * 11. Fetch and Filter Users by City
 * 
 * Problem Description:
 * Implement an asynchronous function `getDate` that fetches user data from the API 
 * endpoint `https://jsonplaceholder.typicode.com/users`.
 * Filter out users who live in the city "South Christy" (i.e. `address.city === "South Christy"`).
 * Map the filtered users to a new structure containing only their `name` and `email`.
 * 
 * Example:
 * Input (from API): Array of user objects
 * Output: [
 *   { name: "Patricia Lebsack", email: "Julianne.OConner@kory.org" }
 * ]
 * 
 * Constraints:
 * - Return an empty object or handle error in the catch block if the request fails.
 */
async function getDate() {
    try {
        const resp = await fetch("https://jsonplaceholder.typicode.com/users");
        const res = await resp.json();

        const urs = res.filter(item => item.address.city === "South Christy").map(item => ({name: item.name, email: item.email}))
        return urs;
    } catch (error) {
        console.log("Error", error);
        return {}
    }
}

async function main() {
    const output = await getDate()
    console.log("Output", output);
}

main()