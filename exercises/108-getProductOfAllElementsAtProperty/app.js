function getProductOfAllElementsAtProperty(obj, key) {
    // your code here
    if(!obj[key] || !Array.isArray(obj[key]) || obj[key].length === 0) {
      return 0;
    }
    let result = 1;
    obj[key].forEach(item => result *= item)
    
    return result
}

let obj = {
  key: [1, 2, 3, 4]
};
let output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24
