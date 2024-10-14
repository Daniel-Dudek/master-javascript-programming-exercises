function findSmallestNumberAmongMixedElements(arr) {
  // your code here
  let smallestNumber = Infinity

  arr.forEach(elm => {
      if(typeof elm === 'number' && elm < smallestNumber) {
          smallestNumber = elm
      }
  });

  return smallestNumber === Infinity ? 0 : smallestNumber
}

let output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4
