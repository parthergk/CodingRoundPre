/**
 * 38. Valid Palindrome
 * 
 * Problem Description:
 * Given a string `str`, return `true` if it is a palindrome, and `false` otherwise.
 * A string is a palindrome if it reads the same backward as forward.
 * 
 * Example 1:
 * Input: str = "madam"
 * Output: true
 * 
 * Constraints:
 * - Handle case-sensitivity and standard characters based on index comparison.
 */
const str = "madam";
let end = str.length - 1;
let isPalindrome = true;

for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[end]) {
            pad = false;
        break;
        }
        end --;
}
console.log(isPalindrome);