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