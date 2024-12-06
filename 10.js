const BELOW_20 = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", 
        "seventeen", "eighteen", "nineteen"]
const BELOW_99=[ "", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]
var numberToWords = function(num) {
    if (num < 1 || num > 9999) {
        throw new Error("Input must be between 1 and 9999");
    }

    if(num < 20) return `${BELOW_20[num]} only`;

    if(num < 99) {
        const [first, second] = `${num}`.split('').map(Number);
        return `${BELOW_99[first]} ${BELOW_20[second]} only`;
    }

    if(num < 999) {
        const [first, second, third] = `${num}`.split('').map(Number);
        return `${BELOW_20[first]} hundred and ${ second*10 + third < 20 ? BELOW_20[second*10 + third] : `${BELOW_99[second]} ${BELOW_20[third]}`} only`;
    }

    const [first, second, third, four] = `${num}`.split('').map(Number);

    return [
        `${BELOW_20[first]} thousand${second ? `, ${BELOW_20[second]} hundred` : ''}`,
        third*10 + four < 20 ? `${BELOW_20[third*10 + four]}` : `${BELOW_99[third]} ${BELOW_20[four]}`
    ].join(' and ') + ' only'
};

console.log(numberToWords(5))
console.log(numberToWords(73))
console.log(numberToWords(413))
console.log(numberToWords(2345))