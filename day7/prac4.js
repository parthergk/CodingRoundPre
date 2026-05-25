/**
 * 35. First Unique Character in a String
 * 
 * Problem Description:
 * Given a string `str`, find the first non-repeating character in it and print it.
 * If all characters repeat, print nothing or handle it.
 * 
 * Example 1:
 * Input: str = "aabbcdde"
 * Output: "c"
 * Explanation: "a", "b", "d", and "e" are repeating characters. "c" is the first character that appears only once.
 * 
 * Constraints:
 * - The input string consists of lowercase English letters.
 */
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