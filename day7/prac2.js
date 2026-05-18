const nums = [1, 2, 3, 2, 4, 5, 1];

const obj = {};
const dublicate = [];

for (const itm of nums) {
    obj[itm] = (obj[itm] || 0) + 1
};


for (const key in obj) {
    if (obj[key] > 1) {
        dublicate.push(key)
    }
}

console.log("Dublicate", dublicate);


const newSet = new Set();
const setDub = []

for (const itm of nums) {
    if (newSet.has(itm)) {
        setDub.push(itm);
    }else{
        newSet.add(itm)
    }
}

console.log("SetDub", setDub);
