function flipEveryNChars(input, n) {
    // your code here
    let flippedString = '';
    
    for (let i = 0; i < input.length; i += n) {
        let group = input.slice(i, i + n)
        flippedString += group.split('').reverse().join('')
    }
    
    return flippedString;
}

let input = 'a short example';
let output = flipEveryNChars(input, 5);
console.log(output); // --> ohs axe trelpma
