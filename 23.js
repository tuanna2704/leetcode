/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const maps = {}
    for (let i = 0; i < strs.length; i++) {
        const mapString = getMap(strs[i])
        if (maps[mapString] === undefined) {
            maps[mapString]= [strs[i]]
        } else {
            maps[mapString].push(strs[i])
        }
    }

    return Object.values(maps)
};

const getMap = (str) => {
    const map = Array(26).fill(0);
    for (let i = 0; i < str.length; i++) {
        const index = str.charCodeAt(i) - 97;
        map[index]++;
    }

    return map.toString();
}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))