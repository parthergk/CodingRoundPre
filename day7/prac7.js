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