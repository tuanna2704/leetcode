function countPalindromic(arrString) {
    let result = 0;

    for (let i = 0; i < arrString.length; i++) {
        for (let j = i + 1; j < arrString.length; j++) {
            if(arrString[i] + arrString[j] <= 2) continue;
            
        }
    }
    
    return result;
};