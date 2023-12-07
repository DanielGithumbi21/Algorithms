// Given an integer array nums sorted in non-decreasing order,
// return an array of the squares of each number sorted in non-decreasing order.
// Example 1:
// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]

// Solution 1: Two pointers
// Time Complexity: O(n) - n is the length of the array
// Space Complexity: O(n) - n is the length of the array

var sortedSquares = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  let result = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      result[i] = nums[left] * nums[left];
      left++;
    } else {
      result[i] = nums[right] * nums[right];
      right--;
    }
  }
  return result;
};

const nums = [-4, -1, 0, 3, 10];

console.log(sortedSquares(nums));
