function getLargestNumberAmongMixedElements(arr) {
    // your code here
    let largestNumber = -Infinity

    arr.forEach(elm => {
      if(typeof elm === 'number' && elm > largestNumber) {
          largestNumber = elm
      }
    });

    return largestNumber === -Infinity ? 0 : largestNumber
}

let output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5
