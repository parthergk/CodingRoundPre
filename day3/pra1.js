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