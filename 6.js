/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;

    characterCodes = new Array(26).fill(0)

    for (let i = 0; i < s.length; i++) {
        characterCodes[s.charCodeAt(i) - 'a'.charCodeAt(0)]++
        characterCodes[t.charCodeAt(i) - 'a'.charCodeAt(0)]--
    }

    return characterCodes.filter(item => item !== 0).length === 0
};