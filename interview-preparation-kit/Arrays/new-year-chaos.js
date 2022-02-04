function minimumBribes(q) {
  let swapCount = 0;
  for (let i = q.length - 1; i >= 0; i--) {
    if (q[i] != i + 1) {
      if (q[i - 1] == i + 1) {
        swapCount++;
        swap(q, i, i - 1);
      } else if (q[i - 2] == i + 1) {
        swapCount += 2;
        swap(q, i - 2, i - 1);
        swap(q, i - 1, i);
      } else {
        console.log("Too chaotic");
        return;
      }
    }
  }
  console.log(swapCount)
}

function swap(q, pos1, pos2) {
  let temp = q[pos1];
  q[pos1] = q[pos2];
  q[pos2] = temp;
}

minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]);

// Try simpler approaches first and be sure to execute
// the whole algorithm on paper, making sure you know from where each value is coming.
