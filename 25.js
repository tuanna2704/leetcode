/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
    const pointToNumbers = timePoints.map(point => {
        const [hour, minute] = point.split(':').map(Number)
        return hour*60 + minute
    }).sort((a, b) => (a - b))

    console.log(pointToNumbers)
    const length = pointToNumbers.length;

    let min = 1440;
    for (let i = 0; i < pointToNumbers.length; i++) {
        const time1 = pointToNumbers[i]
        const time2 = pointToNumbers[i + 1] || pointToNumbers[0]
        distance1 = Math.abs(time1 - time2)
        distance2 = 1440 - distance1;
        console.log(distance1, distance2)
        min = Math.min(distance1, distance2, min)
        if(min === 0) return 0;
    }

    return min
};

console.log(findMinDifference(["01:01","02:01","03:00"]))