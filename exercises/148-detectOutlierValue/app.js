function detectOutlierValue(string) {
    // your code here
    let result = string.split(' ');
    let oddNumber = 0
    let evenNumber = 0;
    for(let num of result) {
       if(Number.parseInt(num) % 2 !== 0) oddNumber += 1
       if(Number.parseInt(num) % 2 === 0) evenNumber += 1
    }

    if(oddNumber > evenNumber) {
        for (let i = 0; i < result.length; i++) {
            if(Number.parseInt(result[i]) % 2 === 0) return i + 1
        }
    } else {
        for (let i = 0; i < result.length; i++) {
            if(Number.parseInt(result[i]) % 2 !== 0) return i + 1
        }
    }
}

// Third number is odd, while the rest of the numbers are even
console.log(detectOutlierValue("2 4 7 8 10")); // --> 3 

// Second number is even, while the rest of the numbers are odd
console.log(detectOutlierValue("1 10 1 1"))  // --> 2
