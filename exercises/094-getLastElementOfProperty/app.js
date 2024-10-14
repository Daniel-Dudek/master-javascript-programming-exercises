// Write your function here
function getLastElementOfProperty(obj, key) {
    if(!obj.hasOwnProperty(key) || !Array.isArray(obj[key])) {
        return undefined;
    }
    let lastElem = obj[key].pop()
    return lastElem
}


let obj = {
    key: [1, 2, 5]
  };
let output = getLastElementOfProperty(obj, 'key');
console.log(output); // --> 5