const employees = [
  { name: "Gaurav", team: "Frontend", tasks: 5 },
  { name: "Rahul", team: "Backend", tasks: 3 },
  { name: "Amit", team: "Frontend", tasks: 8 },
  { name: "Neha", team: "Design", tasks: 4 },
  { name: "Riya", team: "Frontend", tasks: 6 }
];

const grupd = employees.reduce((acc, item)=>{
    const key = item.team
    if (!acc[key]) {
        acc[key] = {
            topTsk: 0,
            totalTasks: 0,
            topPerformer: ""
        }
    }

    acc[key].totalTasks = acc[key].totalTasks + item.tasks

    if (item.tasks > acc[key].topTsk) {
        acc[key].topTsk = item.tasks
        acc[key].topPerformer = item.name
    }
    return acc;
},{})

console.log("Ouput", Object.keys(grupd).map(itm => ({
    team: itm,
    totalTasks: grupd[itm].totalTasks,
    topPerformer: grupd[itm].topPerformer
})));
