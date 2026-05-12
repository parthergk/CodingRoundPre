const tasks = [
  { employee: "Gaurav", team: "Frontend", completed: true, hours: 5 },
  { employee: "Rahul", team: "Backend", completed: false, hours: 8 },
  { employee: "Amit", team: "Frontend", completed: true, hours: 7 },
  { employee: "Neha", team: "Design", completed: true, hours: 4 },
  { employee: "Riya", team: "Backend", completed: true, hours: 6 },
  { employee: "Karan", team: "Frontend", completed: true, hours: 3 },
];

const output = tasks
  .filter((item) => item.completed === true)
  .reduce((acc, item) => {
    const key = item.team;

    if (!acc[key]) {
      acc[key] = {
        totalCompletedTasks: 0,
        totalHours: 0,
        heiHours: 0,
        mostProductiveEmployee: "",
      };
    }

    acc[key].totalCompletedTasks += 1;
    acc[key].totalHours += item.hours;

    if(item.hours > acc[key].heiHours){
        acc[key].heiHours = item.hours
        acc[key].mostProductiveEmployee = item.employee
    }
    return acc;
  }, {});

  console.log("Output", Object.keys(output).map((team) =>({
    team,
    totalCompletedTasks: output[team].totalCompletedTasks,
    totalHours: output[team].totalHours,
    mostProductiveEmployee: output[team].mostProductiveEmployee 
  })));
  