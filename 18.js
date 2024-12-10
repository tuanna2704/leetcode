/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let currentMax = 0;
    let globalMax = 0;

    for (let i = 0; i < nums.length; i++) {
        currentMax = Math.max(currentMax, currentMax + nums[i])
        globalMax = Math.max(globalMax, currentMax)
    }

    return globalMax
};