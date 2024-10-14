function joinArrayOfArrays(arr) {
  // your code here
  let aux = []

  arr.forEach(elm => {
    aux = aux.concat(elm)
  });

  return aux
}

let output = joinArrayOfArrays([
  [1, 4],
  [true, false],
  ['x', 'y']
]);

console.log(output); // --> [1, 4, true, false, 'x', 'y']
