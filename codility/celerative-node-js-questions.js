// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
// Given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

function solution(A) {
    let result = 1;
    let numsMap = {}
    for(let i = 0; i < A.length; i++) {
        if(!numsMap[A[i]]) {
            numsMap[A[i]] = 1;
        }
    }
    while(numsMap[result]) {
        result += 1;
    }
    return result;
}

console.log(solution([1,3,6,4,2,1]))