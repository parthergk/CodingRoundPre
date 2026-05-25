/**
 * 37. Longest Word in a Sentence
 * 
 * Problem Description:
 * Given a sentence string, find and return the longest word in it.
 * If there are multiple words with the same maximum length, return the first one encountered.
 * 
 * Example 1:
 * Input: sentence = "I love building scalable applications"
 * Output: "applications"
 * 
 * Constraints:
 * - Words are separated by a single space character.
 */
const sentence = "I love building scalable applications";

const sentenceArry = sentence.split(" ")
let longest = 0
let word;

for (const itm of sentenceArry) {
    const length = itm.length;
    if (length>longest) {
        longest = length
        word = itm
    }
}

console.log("Longest word", word);
