function sherlockAndAnagrams(string) {
  let record = {};
  let firstRecord = {};
  let loopCount = 0;
  let biggestLength = 0;
  for (let x = 1; x < string.length; x++) {
    loopCount++;
    for (let i = 0; i < string.length; i++) {
      loopCount++;
      //   console.log(i);
      //   console.log(i+x);
      //   console.log(string.substring(i,i+x));
      if (!record[string.substring(i, i + x)]) {
        record[string.substring(i, i + x)] = 0;
        firstRecord[string.substring(i, i + x)] = 0;
        for (let j = i + 1; j < string.length; j++) {
          loopCount++;
          //105084
          //275724
          if (string.length - j < string.substring(i, i + x).length) {
            //console.log('breaking')
            break;
          }
          console.log(`Checking if ${string.substring(i,i+x)} and ${string.substring(j,j+x)} are anagrams.`)
          // console.log(isAnagram(string.substring(i,i+x),string.substring(j,j+x)))
          if (
            isAnagram(string.substring(i, i + x), string.substring(j, j + x))
          ) {
            record[string.substring(i, i + x)] += 1;
            firstRecord[string.substring(i, i + x)] += 1;
          }
        }
      } else {
        if(string.substring(i, i + x).length >= biggestLength) {
            biggestLength = string.substring(i, i + x).length;
            record[string.substring(i, i + x)] = record[string.substring(i, i + x)] + (firstRecord[string.substring(i, i + x)] - 1);
            firstRecord[string.substring(i, i + x)] -= 1;
            console.log(`Subtracting from ${firstRecord[string.substring(i, i + x)]}`)
            console.log(string.substring(i, i + x))
            console.log(firstRecord);
        }
      }
    }
  }
  let anagrams = Object.keys(record);
  let result = 0;
  anagrams.forEach((anagram) => {
    result += record[anagram];
  });
  console.log(record);
  console.log(firstRecord);
  console.log(result);
  console.log(`string lenght: ${string.length}`);
  console.log(`Loop Count: ${loopCount}`);
}

function isAnagram(s1, s2) {
  if (s1.length != s2.length) {
    return false;
  } else {
    let s1Count = {};
    let s2Count = {};
    for (let i = 0; i < s1.length; i++) {
      if (s1Count[s1[i]]) {
        s1Count[s1[i]] += 1;
      } else {
        s1Count[s1[i]] = 1;
      }
    }
    for (let i = 0; i < s2.length; i++) {
      if (s2Count[s2[i]]) {
        s2Count[s2[i]] += 1;
      } else {
        s2Count[s2[i]] = 1;
      }
    }
    let letters = Object.keys(s1Count);
    for (let i = 0; i < letters.length; i++) {
      if (s1Count[letters[i]] != s2Count[letters[i]]) {
        return false;
      }
    }
    return true;
  }
}

//console.log("abbac".substring(1,2))
sherlockAndAnagrams("abba");
