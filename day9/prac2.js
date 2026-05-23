const users = [
  { id: 1, name: "Gaurav" },
  { id: 2, name: "Rahul" },
  { id: 1, name: "Gaurav" },
  { id: 3, name: "Amit" }
];

const output = []
const idSet = new Set();

for (const usr of users) {
    if (!idSet.has(usr.id)) {
        output.push(usr);
        idSet.add(usr.id)
    }
}

console.log("Output", output);
