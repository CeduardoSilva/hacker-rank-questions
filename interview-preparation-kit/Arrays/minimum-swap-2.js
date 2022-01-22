function minimumSwaps(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    while (arr[i] != i + 1) {
      swap(arr,i);
      count++;
    }
  }
  return count;
}

function swap(arr, index) {
  let temp = arr[arr[index] - 1];
  arr[arr[index] - 1] = arr[index];
  arr[index] = temp;
}

let arr = [3, 7, 6, 9, 1, 8, 10, 4, 2, 5];
let result = minimumSwaps(arr);
console.log(`Result: ${result}`);
