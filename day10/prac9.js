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