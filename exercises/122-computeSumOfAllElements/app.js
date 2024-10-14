function computeSumOfAllElements(arr) {
  // your code here
  let sum = 0
  arr.forEach(num => {
    sum += num 
  });
  return sum
}

let output = computeSumOfAllElements([1, 2, 3])
console.log(output); // --> 6
