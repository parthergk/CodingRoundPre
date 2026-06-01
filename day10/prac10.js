const todos = [
  { id: 1, task: "Learn JS", completed: false },
  { id: 2, task: "Practice React", completed: true },
  { id: 3, task: "Build Project", completed: false },
  { id: 4, task: "Read Docs", completed: true }
];

const output = todos.filter(itm => !itm.completed);
console.log("Removed all completed", output);