function countingValleys(steps, path) {
    const pathArray = path.split('');
    let level = 0
    let valleys = 0
    let onValley = false
    pathArray.forEach(step => {
        if(step === 'D' && level === 0 && !onValley) {
            valleys++
            level--
            onValley = true
        } else if(step === 'U' && level === -1 && onValley) {
            level++
            onValley = false
        } else if(step === 'D') {
            level--
        } else if(step === 'U') {
            level++
        }
    });
    return valleys
}

const result = countingValleys(8, 'UDDDUDUU');
console.log(result);