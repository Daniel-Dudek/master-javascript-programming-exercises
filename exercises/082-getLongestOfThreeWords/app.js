function getLongestOfThreeWords(word1, word2, word3) {
    // your code here
    let words = [word1, word2, word3]
    let longest = '';

    words.forEach(word => {
        if(word.length > longest.length) {
            longest = word
        }
    })
    return longest
}

let output = getLongestOfThreeWords('these', 'three', 'words');
console.log(output); // --> 'these'
