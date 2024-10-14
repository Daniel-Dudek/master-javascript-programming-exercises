function findSmallestElement(arr) {
    // your code here
    if(arr.length === 0) return 0;

    let aux = 99999999
    arr.forEach(item => {
        if(item < aux) {
            aux = item
        }
    })

    return aux
}

let output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1