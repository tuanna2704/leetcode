var compareVersion = function(version1, version2) {
    const v1 = version1.split('.').map(Number)
    const v2 = version2.split('.').map(Number)

    let i = 0
    while (v1[i] !== undefined || v2[i] !== undefined) {
        const v1Elm = v1[i] || 0;
        const v2Elm = v2[i] || 0;
        if (v1Elm < v2Elm) {
            return -1
        }

        if(v1Elm > v2Elm) {
            return 1
        }
        i++
    }

    return 0
};

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
    if(s1.length !== s2.length) return false;
    if(s1 === s2) return true;

    let diff = 0;
    let diffIndex;
    for (let i = 0; i < s2.length; i++) {
        if(s1[i] !== s2[i]) {
            diff++
            if(diffIndex === undefined){
                diffIndex = i;
            } else {
                if(`${s1[diffIndex]}${s1[i]}` !== `${s2[i]}${s2[diffIndex]}`) return false;
            }
            
        }
        if(diff > 2) return false;
    }

    return diff === 2
};

console.log(areAlmostEqual("bank", "kanb"))