function getStringLength(string) {
    // your code here
    let result = 0
    for (let char of string) {
        result++
    }
    return result
}

let output = getStringLength('hello');
console.log(output); // --> 5
