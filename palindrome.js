// Write a function that takes a non-empty string
// and that returns a boolean representing whether or not the string is a palindrome.
// A palindrome is defined as a string that is written the same forward and backward.
// Note that single-character strings are palindromes.

// Solution 1: Recursion
// Time Complexity: O(n) - n is the length of the string
// Space Complexity: O(n) - n is the length of the string

var isPalindrome = function (string) {
  if (string.length === 1) return true;
  if (string.length === 2) return string[0] === string[1];
  if (string[0] === string.slice(-1)) {
    return isPalindrome(string.slice(1, -1));
  }
  return false;
};

const string = "abcdcba";
console.log(isPalindrome(string));

// Solution 2: Iteration
// Time Complexity: O(n) - n is the length of the string
// Space Complexity: O(1) - constant space

var isPalindrome = function (string) {
  let left = 0;
  let right = string.length - 1;
  while (left < right) {
    if (string[left] !== string[right]) return false;
    left++;
    right--;
  }
  return true;
};

const string2 = "racecar";
console.log(isPalindrome(string));

// Solution 3: Recursion
// Time Complexity: O(n) - n is the length of the string
// Space Complexity: O(n) - n is the length of the string

var isPalindrome = function (string, i = 0) {
  let j = string.length - 1 - i;
  return i >= j ? true : string[i] === string[j] && isPalindrome(string, i + 1);
};

const string3 = "abcdcba";
console.log(isPalindrome(string));
