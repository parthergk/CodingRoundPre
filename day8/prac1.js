/**
 * 39. Find Duplicates after Merging Arrays
 * 
 * Problem Description:
 * Given two arrays `arr1` and `arr2`, merge them using the spread operator.
 * Find and return all duplicate elements in the merged array using a `Set`.
 * 
 * Example 1:
 * Input: arr1 = [1, 2, 3, 4], arr2 = [3, 4, 5, 6]
 * Output (Duplicates): [3, 4]
 * 
 * Constraints:
 * - The input arrays contain elements.
 */
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


