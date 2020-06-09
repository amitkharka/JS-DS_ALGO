/*
@source: https://leetcode.com/problems/two-sum/

Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:
Given nums = [2, 7, 11, 15], target = 9,
Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1]
*/

// O(n) time | O(n) space

function twoNumberSum(array, target) {
    if (array && array.length) {
        const hashTable = {};
        for (let i = 0; i < array.length; i++) {
            const diff = target - array[i];
            if (diff in hashTable) {
                return [hashTable[diff], array[i]];
            }
            hashTable[array[i]] = array[i];
        }
    }
    return [];
}

console.log(twoNumberSum([2, 7, 11, 15], 9)); // [2, 7];