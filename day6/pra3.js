/**
 * 31. Active Player Performance and Top Scorers by Team
 * 
 * Problem Description:
 * Given an array of player objects where each player has a `name`, `team`, `score`, and `active` status.
 * Filter out inactive players (`active === false`).
 * Group the active players by `team`. For each team, compute:
 * 1. `activePlayers`: Count of active players.
 * 2. `totalScore`: The sum of scores of all active players in that team.
 * 3. `topScorers`: An array of names of active players who achieved the maximum score in that team.
 *    (Handle ties: if multiple active players share the maximum score, include all of them).
 * Return an array of objects representing these aggregated metrics per team.
 * 
 * Example 1:
 * Input:
 * players = [
 *   { name: "Gaurav", team: "A", score: 50, active: true },
 *   { name: "Rahul", team: "B", score: 30, active: false },
 *   { name: "Amit", team: "A", score: 80, active: true },
 *   { name: "Neha", team: "C", score: 40, active: true },
 *   { name: "Riya", team: "A", score: 80, active: true },
 *   { name: "Karan", team: "B", score: 60, active: true }
 * ]
 * Output: [
 *   { team: "A", activePlayers: 3, totalScore: 210, topScorers: ["Amit", "Riya"] },
 *   { team: "C", activePlayers: 1, totalScore: 40, topScorers: ["Neha"] },
 *   { team: "B", activePlayers: 1, totalScore: 60, topScorers: ["Karan"] }
 * ]
 * 
 * Constraints:
 * - Each player contains `name` (string), `team` (string), `score` (number), and `active` (boolean).
 */
const players = [
  { name: "Gaurav", team: "A", score: 50, active: true },
  { name: "Rahul", team: "B", score: 30, active: false },
  { name: "Amit", team: "A", score: 80, active: true },
  { name: "Neha", team: "C", score: 40, active: true },
  { name: "Riya", team: "A", score: 80, active: true },
  { name: "Karan", team: "B", score: 60, active: true },
];

const grpd = players
  .filter((item) => item.active === true)
  .reduce((acc, item) => {
    const key = item.team;
    if (!acc[key]) {
      acc[key] = {
        topScr: 0,
        activePlayers: 0,
        totalScore: 0,
        topScorers: [],
      };
    }

    acc[key].activePlayers += 1;
    acc[key].totalScore = acc[key].totalScore + item.score

    if (item.score > acc[key].topScr) {
        acc[key].topScr = item.score
        acc[key].topScorers = [item.name]
    }else if(item.score === acc[key].topScr){
        acc[key].topScorers.push(item.name);
    }
    return acc;
  }, {});

const output = Object.keys(grpd).map(item => ({
     team: item,
    activePlayers: grpd[item].activePlayers,
    totalScore: grpd[item].totalScore,
    topScorers: grpd[item].topScorers
}))

console.log("Output", output);
