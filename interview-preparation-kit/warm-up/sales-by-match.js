function sockMerchant(n, ar) {
    let result = 0
    const socksColors = new Set(ar)
    socksColors.forEach(color => {
        const socks = ar.filter(sock => sock === color)
        const pairs = socks.length / 2
        result = result + Math.floor(pairs)
    })
    return result
}

const result = sockMerchant(9, [10,20,20,10,10,30,50,10,20])
console.log(result)