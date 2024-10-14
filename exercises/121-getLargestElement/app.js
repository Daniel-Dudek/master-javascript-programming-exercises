function getLargestElement(arr) {
  // your code here
  if(arr.length === 0) return 0;

    let aux = arr[0]
    arr.forEach(item => {
        if(item > aux) {
            aux = item
        }
    })

    return aux
}

let output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;