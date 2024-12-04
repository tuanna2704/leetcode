function majorityElement(nums) {
  let majorNumber = null;
  let count = 0;

  // Step 1: Find the candidate
  for (const num of nums) {
    if (count === 0) {
      majorNumber = num;
    }
    count += (num === majorNumber) ? 1 : -1;
    console.log({count, majorNumber})
  }

  // Step 2: Verify the candidate (optional in this problem as majority is guaranteed)
  return majorNumber;
}

// Example usage
console.log(majorityElement([3, 2])); // Output: 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Output: 2