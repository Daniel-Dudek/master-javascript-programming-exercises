// Write your function here
function getElementsLessThan100AtProperty(obj, key) {
    if(!obj.hasOwnProperty(key) || !Array.isArray(obj[key])) {
        return [];
    }
    return obj[key].filter(item => item < 100)
}

let obj = {
    key: [1000, 20, 50, 500]
  };
  let output = getElementsLessThan100AtProperty(obj, 'key');
  console.log(output); // --> [20, 50]