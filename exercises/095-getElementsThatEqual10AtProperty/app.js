// Write your function here
function getElementsThatEqual10AtProperty(obj, key) {
    if(!obj.hasOwnProperty(key) || !Array.isArray(obj[key])) {
        return [];
    }
    return obj[key].filter(item => item === 10)
}


let obj = {
    key: [1000, 10, 50, 10]
  };
  let output = getElementsThatEqual10AtProperty(obj, 'key');
  console.log(output); // --> [10, 10]