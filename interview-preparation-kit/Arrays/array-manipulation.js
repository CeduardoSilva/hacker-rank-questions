function arrayManipulation(n, queries) {
    console.log(`n: ${n}`);
    console.log(`queries: ${queries}`);
    let nArray = new Array(n).fill(0);
    let result = 0;
    let finalResult = 0;
    console.log(`nArray: ${nArray}`);
    for(let i = 0; i < queries.length; i++) {
        let querie = queries[i];
        console.log(`Current Query: ${querie}`);
        let a = querie[0]-1;
        let b = querie[1]-1;
        let k = querie[2];
        console.log(`a: ${a}`);
        console.log(`b: ${b}`);
        console.log(`k: ${k}`);
        nArray[a] += k;
        console.log(`Adding ${k} to n position ${a}: ${nArray[a]}`)
        nArray[b] -= k;
        console.log(`Subtracting ${k} from n position ${b}: ${nArray[b]}`)
        console.log(`current nArray: ${nArray}`);
    }
    for(let i = 0; i < nArray.length; i++) {
        if(nArray[0] != 0) {
            result += nArray[i];
            if(result > finalResult) finalResult = result;
        }
    }
    console.log(`final nArray: ${nArray}`);
    return finalResult;
}

console.log(arrayManipulation(10, [ [2,6,8], [3,5,7], [1,8,1], [5, 9, 15]]))
