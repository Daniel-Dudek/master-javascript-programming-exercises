function filterOddLengthWords(words) {
    // your code here
    if(words.length === 0) return;
    let oddWords = words.filter(word => {
        if(word.length % 2 !== 0) {
            return word
        }
    });
    return oddWords
    
}

let output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', 'now']
