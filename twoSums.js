// Given a an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.
// You can return the answer in any order.
// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]

// Solution 1: Brute Force
// Time Complexity: O(n^2) - nested for loop
// Space Complexity: O(1) - constant space

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let firstNum = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      let secondNum = nums[j];
      if (firstNum + secondNum === target) {
        return [i, j];
      }
    }
  }
};

const nums = [2, 7, 11, 15];
const target = 9;

console.log(twoSum(nums, target));

// Solution 2: Hash Table
// Time Complexity: O(n) - for loop
// Space Complexity: O(n) - hash table

var twoSum = function (nums, target) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let complement = target - num;
    if (complement in hash) {
      return [hash[complement], i];
    }
    hash[num] = i;
  }
};

const nums1 = [6, 8, 11, 15];
const target1 = 17;

console.log(twoSum(nums1, target1));
