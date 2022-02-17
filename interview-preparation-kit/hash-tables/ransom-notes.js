function checkMagazine(magazine, note) {
    let magazineTally = {};
    let noteTally = {};
    let result = 'Yes';
    magazine.forEach(word => {
        if(!magazineTally[word]) {
            magazineTally[word] = 1;
        } else {
            magazineTally[word] += 1;
        }
    });
    note.forEach(word => {
        if(!noteTally[word]) {
            noteTally[word] = 1;
        } else {
            noteTally[word] += 1;
        }
    });
    note.forEach(word => {
        if(magazineTally[word] < noteTally[word] || !magazineTally[word]) {
            result = 'No';
        }
    });
    console.log(result);
}

checkMagazine(['a','b', 'a', 'd'],['a','b','b'])