/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    const minstr = str1.length < str2.length ? str1 : str2;
    let partern = minstr

    for (let i = 0; i < minstr.length; i++) {
        // console.log(partern)
        let result = true;
        for (let j = 0; j < str1.length; j+= partern.length) {
            if (str1.slice(j, j+ partern.length) !== partern) {
                result = false;
                break;
            }
        }

        for (let j = 0; j < str2.length; j+= partern.length) {
            if (str2.slice(j, j+ partern.length) !== partern) {
                result = false;
                break;
            }
        }

        if(result) return partern;

        partern = partern.slice(0, -1)
    }

    return "";
};


console.log(gcdOfStrings("ABABABAB", "ABAB"))