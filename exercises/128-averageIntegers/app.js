function average(arr) {
  // your code here
  return sum(arr) / arr.length
}

function sum(arr) {
  // your code here
  let aux = 0
  arr.forEach(num => {
    aux += num
  });
  return aux
}

console.log(average([1, 2])); // --> 1.5
