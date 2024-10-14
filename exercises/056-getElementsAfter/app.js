function getElementsAfter(array, n) {
  // your code here
  let newArray = array.slice(n + 1)
  return newArray
}

let output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 0); 
console.log(output); // --> ['d', 'e']
