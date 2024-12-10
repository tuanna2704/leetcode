/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    }
    let sum = 0;

    for (let i = 0; i < s.length; i++) {
        const currentValue = map[s[i]];
        const nextValue = map[s[i + 1]]
        if(!nextValue) {
            sum += currentValue;
            continue;
        }

        if (currentValue >= nextValue) {
            sum += currentValue
        } else {
            sum -= currentValue
        }
    }

    return sum;
};

console.log(romanToInt('MCMXCIV'))