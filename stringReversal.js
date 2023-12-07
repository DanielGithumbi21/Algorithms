// Print words in reverse order

// Solution 1: Split, reverse, join

// Time Complexity: O(n) - n is the length of the string
// Space Complexity: O(n) - n is the length of the string

var reversedWords = function (string) {
  return string.split(" ").reverse().join(" ");
};

const string = "Hello World";
console.log(reversedWords(string));
