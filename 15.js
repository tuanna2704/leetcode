/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let result;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+ 1; j < nums.length; j++) {
            if(nums[i] + num[j] === target) {
                result = [i, j]
                break;
            }
        }
        if(result) break;
    }

    return result;
};