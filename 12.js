function largestNumber(nums) {
    const result = nums.sort((a, b) => {
        return `${b}${a}` - `${a}${b}` 
    }).join("")

    if(Number(result) === 0) return '0';
    return result
}

console.log(largestNumber([10, 2]))