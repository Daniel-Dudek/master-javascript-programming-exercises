function getAverageOfElementsAtProperty(obj, key) {
  // your code here
  if(!obj.hasOwnProperty(key) || !Array.isArray(obj[key]) || obj[key].length === 0) {
    return 0;
  }
  
  let sum = 0
  obj[key].forEach(elm => {
    sum += elm
  })
  return sum / obj[key].length
}

let obj = {
  key: [1, 2, 3]
};
let output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // --> 2  