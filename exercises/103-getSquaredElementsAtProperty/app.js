function getSquaredElementsAtProperty(obj, key) {
    // your code here
    if(!obj.hasOwnProperty(key) || !Array.isArray(obj[key])) {
      return [];
  }
  return obj[key].map(item => item * item)
}

let obj = {
  key: [2, 1, 5]
};
let output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]
