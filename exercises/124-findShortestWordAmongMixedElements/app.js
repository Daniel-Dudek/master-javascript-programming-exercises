function findShortestWordAmongMixedElements(arr) {
    // your code here
    let shortestWord = ''
    let shortestLength = Infinity

    arr.forEach(elm => {
        if(typeof elm === 'string' && elm.length < shortestLength) {
            shortestWord = elm
            shortestLength = elm.length
        }
    });

    return shortestWord
    
}

let output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'
