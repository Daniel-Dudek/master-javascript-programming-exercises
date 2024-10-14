// Write your function here
function getIndexOf(char, str) {
    let index = -1
    str.split('').forEach((letter, i) => {
        if(letter === char && index === -1) {
            index = i
        }
    })
    return index
}

let output = getIndexOf('a', 'I am a hacker');
console.log(output); // --> 2