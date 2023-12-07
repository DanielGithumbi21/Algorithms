// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.
// Example 1:
// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

// Solution 1: Backtracking
// Time Complexity: O(n*n!) - n! permutations, each permutation takes O(n) time to build
// Space Complexity: O(n*n!) - n! permutations, each permutation takes O(n) space to build

// var permute = function (nums) {
//   let result = [];
//   backtrack(nums, result);
//   return result;
// };

// function backtrack(nums, result, n = nums.length) {
//   if (n === 1) {
//     result.push(nums.slice());
//     return;
//   }
//   for (let i = 0; i < n; i++) {
//     backtrack(nums, result, n - 1);
//     if (n % 2 === 0) {
//       swap(nums, i, n - 1);
//     } else {
//       swap(nums, 0, n - 1);
//     }
//   }
// }

// function swap(nums, i, j) {
//   [nums[i], nums[j]] = [nums[j], nums[i]];
// }

// Solution 2: Backtracking
// Time Complexity: O(n*n!) - n! permutations, each permutation takes O(n) time to build
// Space Complexity: O(n*n!) - n! permutations, each permutation takes O(n) space to build

var permute = function (nums) {
  let result = [];
  backtrack(nums, result);
  return result;
};

function backtrack(nums, result, n = nums.length) {
  if (n === 1) {
    result.push(nums.slice());
    return;
  }
  for (let i = 0; i < n; i++) {
    swap(nums, i, n - 1);
    backtrack(nums, result, n - 1);
    swap(nums, i, n - 1);
  }
}

function swap(nums, i, j) {
  [nums[i], nums[j]] = [nums[j], nums[i]];
}

const nums = [1, 2, 3];
console.log(permute(nums));
