function getLengthOfLongestElement(arr) {
    // Your code here
    if(arr.length === 0) return 0;

    let longestLength = 0;
    arr.forEach(item => {
        if(item.length > longestLength) {
            longestLength = item.length
        }
    })
    return longestLength
}

let output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5
