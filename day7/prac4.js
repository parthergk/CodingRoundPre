const str = "aabbcdde";

const grp = {}

for (const itm of str) {
    grp[itm] = (grp[itm] || 0) + 1
}

for (const chr of str) {
    if (grp[chr] === 1) {
        console.log(chr);
        break;
    }
}