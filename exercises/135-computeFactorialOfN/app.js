function computeFactorialOfN(n) {
    // your code here
    if(n < 0) return;
    let result = 1

    for (let i = 2; i <= n; i++) {
        result *= i
    }

    return result
}

let output = computeFactorialOfN(4);
console.log(output); // --> 24
