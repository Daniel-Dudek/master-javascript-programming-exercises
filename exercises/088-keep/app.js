// Write your function here
function keep(arr, num) {
    let result = arr.filter(elm => elm === num)
    return result
}

let output = keep([1, 2, 3, 2, 1], 2)
console.log(output); // --> [2, 2]