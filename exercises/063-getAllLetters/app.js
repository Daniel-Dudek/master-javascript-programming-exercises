function getAllLetters(str) {
    // your code here
    let myArray = [];
    for (let letter of str) {
        str === '' ? myArray : myArray.push(letter)
    }
    return myArray
}

let output = getAllLetters('Radagast');
console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']
