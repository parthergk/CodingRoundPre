const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];

const arr3 = [...arr1, ...arr2]

const setArr = new Set()
const dub = []

for (const itm of arr3) {
    if (setArr.has(itm)) {
        dub.push(itm)
    }else{
        setArr.add(itm)
    }
}
console.log("Dublicate", dub);


