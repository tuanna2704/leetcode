/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const permute = (nums) => {
    if (nums.length === 0) return [[]];
    let result = []
    for (let i = 0; i < nums.length; i++) {
        const current = nums[i];
        const remaining = nums.slice(0, i).concat(nums.slice(i + 1));
        const perms = permute(remaining)
        for (const perm of perms) {
            result.push([current, ...perm]);
        }
    }
    return result;
}

console.log(permute([1, 2, 3]))
