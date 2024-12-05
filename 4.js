/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
  const frequencyMap = {}
  for (let index = 0; index < nums.length; index++) {
    frequencyMap[nums[index]] = (frequencyMap[nums[index]] || 0) + 1;
  }

  const groupByFrequency = {}
  for (const num in frequencyMap) {
    const frequency = frequencyMap[num]
    groupByFrequency[frequency] = (groupByFrequency[frequency] || [])
    groupByFrequency[frequency].push(num)
  }

  let result = []
  for (const times in groupByFrequency) {
    const numbers = groupByFrequency[times].sort((a, b) => b - a)
    result.push(numbers.map(number => Array(Number(times)).fill(Number(number))).flat())
  }

  return result.flat();
};

console.log(frequencySort([1,1,2,2,2,3]))
console.log(frequencySort([2,3,1,3,2]))
console.log(frequencySort([-1,1,-6,4,5,-6,1,4,1]))