/**
 * 30. Team Performance and Top Task Achiever
 * 
 * Problem Description:
 * Given an array of employee objects where each employee has a `name`, `team`, and the count of completed `tasks`.
 * Group the employees by `team`. For each team, compute:
 * 1. `totalTasks`: The sum of all completed tasks by team members.
 * 2. `topPerformer`: The name of the employee who completed the maximum tasks in that team.
 * Return an array of objects representing these aggregated metrics per team.
 * 
 * Example 1:
 * Input:
 * employees = [
 *   { name: "Gaurav", team: "Frontend", tasks: 5 },
 *   { name: "Rahul", team: "Backend", tasks: 3 },
 *   { name: "Amit", team: "Frontend", tasks: 8 },
 *   { name: "Neha", team: "Design", tasks: 4 },
 *   { name: "Riya", team: "Frontend", tasks: 6 }
 * ]
 * Output: [
 *   { team: "Frontend", totalTasks: 19, topPerformer: "Amit" },
 *   { team: "Backend", totalTasks: 3, topPerformer: "Rahul" },
 *   { team: "Design", totalTasks: 4, topPerformer: "Neha" }
 * ]
 * 
 * Constraints:
 * - Each employee object contains `name` (string), `team` (string), and `tasks` (number).
 */
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
