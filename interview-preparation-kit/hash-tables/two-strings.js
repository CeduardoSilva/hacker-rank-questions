function twoStrings(s1, s2) {
    let charMap = {};
    for(let i = 0; i < s1.length; i++)
        if(!charMap[s1[i]]) charMap[s1[i]] = 1
    for(let i = 0; i < s2.length; i++)
        if(charMap[s2[i]]) return 'YES'
    return 'NO'
}

console.log(twoStrings('wouldyoulikefries', 'abcabcabcabcabcabc'))