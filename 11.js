function generatePermutations(primarySet, secondarySet) {
    const result = [];

    // Add primary set items on their own
    for (const primary of primarySet) {
        result.push(primary);
    }

    // Generate permutations with primary items always coming first
    for (const primary of primarySet) {
        for (const secondary of secondarySet) {
            if (primary !== secondary) {
                result.push(primary + secondary); // Primary comes first
            }
        }
    }

    return result; // Convert the Set to an array for the result
}

// Example Usage
const primarySet = ["A", "B", "C"];
const secondarySet = ["A", "B", "D"];
const result = generatePermutations(primarySet, secondarySet);
console.log(result);