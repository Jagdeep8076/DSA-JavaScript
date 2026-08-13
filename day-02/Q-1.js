// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

 

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.
 

// Constraints:

// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.

var isPalindrome = function(s) {
 s = s.toLowerCase();
    let clean = "";

    for (let i = 0; i < s.length; i++) {
        let ch = s[i];

        if (
            (ch >= "a" && ch <= "z") ||
            (ch >= "0" && ch <= "9")
        ) {
            clean += ch;
        }
    }
    let reverse = "";

    for (let i = clean.length - 1; i >= 0; i--) {
        reverse += clean[i];
    }
    return clean === reverse;
   
};