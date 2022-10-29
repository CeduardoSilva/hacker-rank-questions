function hourglassSum(arr) {
  let result = Number.NEGATIVE_INFINITY;
  for (let y = 1; y < arr.length - 1; y++) {
    for (let x = 1; x < arr[y].length - 1; x++) {
      let sum = getSum(arr, x, y);
      if (sum > result) {
        result = sum;
      }
    }
  }
  return result;
}

function getSum(arr, xCoord, yCoord) {
  const upperLeftValue = arr[yCoord - 1][xCoord - 1];
  const upperMiddleValue = arr[yCoord - 1][xCoord];
  const upperRightValue = arr[yCoord - 1][xCoord + 1];

  const bottomLeftValue = arr[yCoord + 1][xCoord - 1];
  const bottomMiddleValue = arr[yCoord + 1][xCoord];
  const bottomRightValue = arr[yCoord + 1][xCoord + 1];

  const upperValuesSum = upperLeftValue + upperMiddleValue + upperRightValue;
  const bottomValuesSum = bottomLeftValue + bottomMiddleValue + bottomRightValue;

  return arr[yCoord][xCoord] + upperValuesSum + bottomValuesSum;
}

let arr = [
  [-1, -1, 0, -9, -2, -2],
  [-2, -1, -6, -8, -2, -5],
  [-1, -1, -1, -2, -3, -4],
  [-1, -9, -2, -4, -4, -5],
  [-7, -3, -3, -2, -9, -9],
  [-1, -3, -1, -2, -4, -5]
];

const result = hourglassSum(arr)
console.log(`Result: ${result}`)