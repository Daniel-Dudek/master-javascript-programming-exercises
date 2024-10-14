// Write your function here
function countAllCharacters(str) {
    if(str === '') return {};
    let obj = {}
    
    for (let index = 0; index < str.length; index++) {
        if(obj[str[index]]) {
            obj[str[index]] = obj[str[index]] + 1
        }  else {
            obj[str[index]] = 1
        }
    }
    return obj
}

let output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}