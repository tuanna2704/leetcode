function frequencySort(nums) {
  // Step 1: Create a frequency map
  const frequencyMap = {};
  for (const num of nums) {
    frequencyMap[num] = (frequencyMap[num] || 0) + 1;
  }

  // Step 2: Group numbers by frequency
  const frequencyBuckets = [];
  for (const [num, freq] of Object.entries(frequencyMap)) {
    const key = parseInt(num, 10); // Ensure numeric keys
    if (!frequencyBuckets[freq]) {
      frequencyBuckets[freq] = [];
    }
    frequencyBuckets[freq].push(key);
  }
  console.log(frequencyBuckets)
  // Step 3: Build the result array
  // const result = [];
  // for (let freq = 1; freq < frequencyBuckets.length; freq++) {
  //   if (frequencyBuckets[freq]) {
  //     // Sort numbers within the same frequency in descending order
  //     frequencyBuckets[freq].sort((a, b) => b - a);
  //     for (const num of frequencyBuckets[freq]) {
  //       for (let i = 0; i < freq; i++) {
  //         result.push(num);
  //       }
  //     }
  //   }
  // }

  // return result;
}

// Example usage
console.log(frequencySort([1, 1, 2, 2, 2, 3, 6,6,6,6,6,6,6,6])); // Output: [3, 1, 1, 2, 2, 2]
// console.log(frequencySort([2, 3, 1, 3, 2]));    // Output: [1, 3, 3, 2, 2]
// console.log(frequencySort([-1, 1, -6, 4, 5, -6, 1, 4, 1])); // Output: [5, -1, 4, 4, -6, -6,  1, 1, 1]

