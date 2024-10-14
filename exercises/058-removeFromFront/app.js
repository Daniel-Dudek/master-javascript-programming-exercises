function removeFromFront(arr) {
    // your code here
    return arr.splice(1)
}

let output = removeFromFront([1, 2, 3]);
console.log(output); // --> [2, 3]
