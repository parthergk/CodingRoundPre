/**
 * 21. Completed Tasks Metrics by Team
 * 
 * Problem Description:
 * Given an array of task objects where each task has an `employee`, `team`, `completed` status, and `hours` spent.
 * Filter out incomplete tasks (`completed === false`).
 * Group the completed tasks by `team`. For each team, compute:
 * 1. `totalCompletedTasks`: Count of completed tasks.
 * 2. `totalHours`: Total hours spent on completed tasks.
 * 3. `mostProductiveEmployee`: The employee who spent the highest hours on a single completed task in the team.
 * Return an array of objects representing these aggregates for each team.
 * 
 * Example 1:
 * Input:
 * tasks = [
 *   { employee: "Gaurav", team: "Frontend", completed: true, hours: 5 },
 *   { employee: "Rahul", team: "Backend", completed: false, hours: 8 },
 *   { employee: "Amit", team: "Frontend", completed: true, hours: 7 },
 *   { employee: "Neha", team: "Design", completed: true, hours: 4 },
 *   { employee: "Riya", team: "Backend", completed: true, hours: 6 },
 *   { employee: "Karan", team: "Frontend", completed: true, hours: 3 }
 * ]
 * Output: [
 *   { team: "Frontend", totalCompletedTasks: 3, totalHours: 15, mostProductiveEmployee: "Amit" },
 *   { team: "Design", totalCompletedTasks: 1, totalHours: 4, mostProductiveEmployee: "Neha" },
 *   { team: "Backend", totalCompletedTasks: 1, totalHours: 6, mostProductiveEmployee: "Riya" }
 * ]
 * 
 * Constraints:
 * - Each task contains `employee` (string), `team` (string), `completed` (boolean), and `hours` (number).
 */
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
  