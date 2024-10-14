function findShortestElement(arr) {
    // your code here
    if(arr.length === 0) return '';

    let aux = 'abcdefghijklmnopqrstuvwxyz'
    arr.forEach(item => {
        if(item.length < aux.length) {
            aux = item
        }
    })

    return aux
}

let output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'