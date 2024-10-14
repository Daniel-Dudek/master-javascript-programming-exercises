function getLengthOfShortestElement(arr) {
    // your code here
    if(arr.length === 0) return 0;
    let shortest = 9999999
    
    arr.forEach(elm => {
        if(elm.length < shortest) {
            shortest = elm.length
        }
    });
    
    return shortest
}

let output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3
