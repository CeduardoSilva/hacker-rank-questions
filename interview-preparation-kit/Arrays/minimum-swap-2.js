function minimumSwaps(arr) {
  let count = 0;
  const entries = Object.entries(arr).map(([key,value]) => {
    return [`${parseInt(key)+1}`, value];
  });
  const indexMap = Object.fromEntries(new Map(entries));
  for(let i = 0; i < arr.length; i++) {
    while(indexMap[`${i+1}`] != i+1) {
      let temp = indexMap[`${indexMap[`${i+1}`]}`];
      indexMap[`${indexMap[`${i+1}`]}`] = indexMap[`${i+1}`];
      indexMap[`${i+1}`] = temp;
      count++;
    }
  }
  return count;
}

function swap() {

}

let arr = [3, 7, 6, 9, 1, 8, 10, 4, 2, 5];
let result = minimumSwaps(arr);
console.log(`Result: ${result}`);
