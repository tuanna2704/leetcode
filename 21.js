var majorityElement = function(nums) {
    const map = {}
    let majorityElement = nums[0];
    let majorityCount = 1
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        map[element] = (map[element] || 0) + 1

        if(majorityCount < map[element]) {
            majorityElement = element;
            majorityCount = map[element]
        }
    }

    return majorityElement;
};

console.log(majorityElement([3,2,3]))