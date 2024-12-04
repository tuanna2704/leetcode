function findMinDifference(timePoints) {
  const data = {};
  let minDiff = 1439;
  //caculate minute and sort
  for (const time of timePoints) {
      const [hh, mm] = time.split(':').map(Number);
      const minutes = hh * 60 + mm;

      if(data[minutes] === minutes) return 0;
      data[minutes] = minutes;
  }
  const mapValues = Object.values(data);

  // Caculate min diff
  for (let index = 0; index < mapValues.length; index++) {
      const first = (mapValues[index + 1] ? mapValues[index] : mapValues[0])
      const second = (mapValues[index + 1] || mapValues[index])

      const distance1 = second - first;
      const distance2 = 1440 - distance1;

      minDiff = Math.min(minDiff, distance1, distance2);
  }

  return minDiff;
}

let timePoints
timePoints = ["23:59", "00:00", "12:34"];
console.log(`Input: ${timePoints}`)
console.log(`Output: ${findMinDifference(timePoints)}`)

timePoints = ["00:00","23:59","00:00"]
console.log(`Input: ${timePoints}`)
console.log(`Output: ${findMinDifference(timePoints)}`)
