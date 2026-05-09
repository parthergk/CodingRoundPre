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
