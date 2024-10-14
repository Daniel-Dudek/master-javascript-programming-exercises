function getLongestElement(arr) {
    // your code here
    if(arr.length === 0) return '';

    let longestElement = '';
    arr.forEach(item => {
        if(item.length > longestElement.length) {
            longestElement = item
        }
    })
    return longestElement
}

let output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'
