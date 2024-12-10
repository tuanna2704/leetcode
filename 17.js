/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0) return false;
    let result = true
    const xString = `${x}`
    const xLength = xString.length;

    for (let i = 0; i < Math.floor(xLength / 2); i++) {
        if(xString[i] !== xString[xLength - 1 - i]) {
            result = false;
            break;
        }
    }

    return result;
};

console.log(isPalindrome(121))