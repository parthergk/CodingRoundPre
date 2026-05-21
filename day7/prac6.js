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
