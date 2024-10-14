function findShortestOfThreeWords(word1, word2, word3) {
    // your code here
    let words = [word1, word2, word3]
    let shortest = words[0];

    words.forEach(word => {
        if(word.length < shortest.length) {
            shortest = word
        }
    })
    return shortest
}

let output = findShortestOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'
