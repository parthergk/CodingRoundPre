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
