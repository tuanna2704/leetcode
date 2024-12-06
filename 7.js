/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    const data = {
        b: 0,
        a: 0,
        l: 0,
        o: 0,
        n: 0
    }

    for (let i = 0; i < text.length; i++) {
        data[text[i]] = (data[text[i]] || 0) + 1 
    }

    return Math.min(data.b, data.a, data.n, Math.floor(data.l / 2), Math.floor(data.o / 2))
};
