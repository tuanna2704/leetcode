function checkInclusion(s1, s2) {
    if (s1.length > s2.length) return false;

    const targetCount = Array(26).fill(0);
    const windowCount = Array(26).fill(0);
    const aCharCode = "a".charCodeAt(0);

    // Count frequencies of characters in s1
    for (let i = 0; i < s1.length; i++) {
        targetCount[s1.charCodeAt(i) - aCharCode]++;
        windowCount[s2.charCodeAt(i) - aCharCode]++;
    }

    // Compare the initial window
    if (arraysAreEqual(targetCount, windowCount)) return true;

    // Slide the window over s2
    for (let i = s1.length; i < s2.length; i++) {
        // Add the new character to the window
        windowCount[s2.charCodeAt(i) - aCharCode]++;
        // Remove the character that falls out of the window
        windowCount[s2.charCodeAt(i - s1.length) - aCharCode]--;

        // Compare the counts
        if (arraysAreEqual(targetCount, windowCount)) return true;
    }

    return false;
}

function arraysAreEqual(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}
