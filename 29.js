/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let current = 0;
    let highest = 0;

    for (let i = 0; i < gain.length; i++) {
        current += gain[i];
        highest = Math.max(highest, current)
    }

    return highest
};

// console.log(largestAltitude([-4,-3,-2,-1,4,3,2]))

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let result = -1;
    for (let i = 0; i < nums.length; i++) {
        let left = 0;
        let right = 0

        for (let j = 0; j < i; j++) {
            left += nums[j]
        }
        for (let j = i+1; j < nums.length; j++) {
            right += nums[j]
        }
        
        if (left === right) {
            result = i;
            break;
        }
    }

    return result
};

// console.log(pivotIndex([1,7,3,6,5,6]))

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const map = {}

    for (let i = 0; i < arr.length; i++) {
        map[arr[i]] = (map[arr[i]] || 0) + 1;
    }

    return (new Set(Object.values(map))).size === (new Set(Object.keys(map))).size
};

console.log(uniqueOccurrences([1,2,2,1,1,3]))