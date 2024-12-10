function countSubstrings(s) {
    const length = s.length
    let result = length;

    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
            if (isPalindromic(s, i, j)) {
                result++
            } else {
                break;
            }
        }
    }
    return result;
};

const isPalindromic = (s, start, end) => {
    let result = true;
    for (let i = 0; i < (end -  start); i++) {
        if(s[start+ i] !== s[end - i]) {
            result = false;
            break;
        }
    }

    return result
}

console.log(countSubstrings("aaa"))