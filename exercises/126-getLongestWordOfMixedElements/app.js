function getLongestWordOfMixedElements(arr) {
    // your code here
    let longestWord = ''

    arr.forEach(elm => {
        if(typeof elm === 'string' && elm.length > longestWord.length) {
            longestWord = elm
        }
    });

    return longestWord
}

let output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'
