function rotLeft(a, d) {
    let result = new Array(a.length);
    for (let i = a.length - 1; i >= 0; i--) {
        let newPos = i - d;
        if(newPos < 0) newPos = a.length + newPos;
        result[newPos] = a[i];
    }
    return result;
}

console.log(rotLeft([1,2,3,4,5], 1))