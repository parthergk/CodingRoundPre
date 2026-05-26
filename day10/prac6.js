const todos = [
  { id: 1, task: "Learn JS", completed: false },
  { id: 2, task: "Practice Coding", completed: true }
];

const targetId = 1;

const output = todos.map(item => {
    return {
        ...item,
        completed: (item.completed || !item.completed)
    }
})
console.log("Output", output);
