/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let result = [];
    let end;
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] <= end) continue;

        for (let j = 1; j < nums.length; j++) {
            if(nums[i] + j === nums[i + j]) {
                end = nums[i + j]
            } else {
                break;
            }
        }
        result.push((end == undefined || nums[i] > end ) ? `${nums[i]}` :`${nums[i]}->${end}`)
    }

    return result;
};