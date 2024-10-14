function getSmallestElementAtProperty(obj, key) {
    // your code here
    if(!Array.isArray(obj[key]) || obj[key].length === 0) {
      return [];
    }
    let smallest = obj[key][0]
  
    obj[key].forEach(item => {
      if(item < smallest) {
        smallest = item
      }
    })
    return smallest
}

let obj = {
  key: [2, 1, 5]
};
let output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1
