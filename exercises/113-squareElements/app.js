function squareElements(arr) {
  // your code here
  let result = arr.map(elm => elm * elm)
  return result
}

let output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9]
