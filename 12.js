function largestNumber(nums) {
    const result = nums.sort()

    if(Number(result) === 0) return '0';
    return result
}

console.log(largestNumber([1,2,3,99,34,11]))