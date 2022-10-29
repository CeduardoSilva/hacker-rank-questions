function jumpingOnClouds(c) {
    let result = 0
    let i = 0
    while(i < c.length - 1){
        if(c[i+2] === 0) {
            i = i + 2
            result++
        } else if(c[i+1] === 0) {
            i = i + 1
            result++
        }
    }
    return result
}

const result = jumpingOnClouds([0,1,0,0,0,1,0])
console.log(result)