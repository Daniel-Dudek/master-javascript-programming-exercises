function getLargestElementAtProperty(obj, key) {
    // your code here
    if(!Array.isArray(obj[key]) || obj[key].length === 0) {
      return [];
    }
    let largest = obj[key][0]
  
    obj[key].forEach(item => {
      if(item > largest) {
        largest = item
      }
    })
    return largest
}

let obj = {
  key: [1, 2, 4]
};
let output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4
