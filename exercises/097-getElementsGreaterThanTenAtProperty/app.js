// Write your function here
function getElementsGreaterThan10AtProperty(obj, key) {
    if(!obj.hasOwnProperty(key) || !Array.isArray(obj[key])) {
        return [];
    }
    return obj[key].filter(item => item > 10)
}

let obj = {
    key: [1, 20, 30]
  };
  let output = getElementsGreaterThan10AtProperty(obj, 'key');
  console.log(output); // --> [20, 30]