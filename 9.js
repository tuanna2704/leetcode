/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    let result = 0;
    const characterMap = Array(26).fill(0);

    for (let index = 0; index < chars.length; index++) {
        characterMap[chars.charCodeAt(index) - 97]++
    }

    for (const word of words) {
        const length = word.length;
        const wordMap = Array(26).fill(0);
        let isMatch = true;

        for (let index = 0; index < length; index++) {
            const code = word.charCodeAt(index) - 97;
            wordMap[code]++;
            if(wordMap[code] > characterMap[code]) {
                isMatch = false;
                break;
            }
        }
        
        if(isMatch) result += length;
    }

    return result;
};

console.log(countCharacters(["cat","bt","hat","tree"], "atach"))