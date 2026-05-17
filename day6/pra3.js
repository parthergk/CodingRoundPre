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
