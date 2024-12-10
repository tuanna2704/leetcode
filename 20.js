var containsDuplicate = function(nums) {
    const map = {}
    let isDuplicate = false;
    for (let i = 0; i < nums.length; i++) {
        if(map[nums[i]] === 1) {
            isDuplicate = true;
            break;
        }
        map[nums[i]] = 1;
        console.log(map, nums[i])
    }

    return isDuplicate;
};

console.log(containsDuplicate([1,2,3,1]))