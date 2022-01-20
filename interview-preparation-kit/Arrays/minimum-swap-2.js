function minimumSwaps(arr) {
    let result = 0
    for (let i = 0; i < arr.length-1; i++) {
        for (let j = i+1; j < arr.length-1; j++) {
            const currNum = arr[i]
            const nextNum = arr[j]
            if(currNum > nextNum) {
                console.log(`Swapping ${currNum} and ${nextNum}`)
                arr[i] = nextNum
                arr[j] = currNum
                result++
            }
        }
    }
    return result
}

const result = minimumSwaps([1,3,5,2,4,6,7])
console.log(`Result: ${result}`)