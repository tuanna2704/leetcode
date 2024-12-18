/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

const getAlphasMap = (string, start, end) => {
    const alphas = Array(26).fill(0);

    for (let i = start; i < end; i++) {
        alphas[string.charCodeAt(i) - 97]++
    }

    return alphas.join();
}

var findAnagrams = function(s, p) {
    const result = []
    const template = getAlphasMap(p, 0, p.length);
    for (let i = 0; i <= s.length - p.length; i++) {
        console.log(i)
        const map = getAlphasMap(s, i, i + p.length);
        if(map === template) {
            result.push(i)
        }
    }

    return result
};

console.log(findAnagrams("abab", "ab"))