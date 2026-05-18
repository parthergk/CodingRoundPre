const nums = [1, 2, 2, 3, 1, 4, 2];

const obj = {}
for (const i of nums) {
    obj[i] = (obj[i] || 0) + 1 
}

console.log("object", obj);