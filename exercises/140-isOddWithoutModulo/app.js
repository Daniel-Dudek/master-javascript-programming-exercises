function isOddWithoutModulo(num) {
    // your code here
    let half = num / 2;

    return half !== Math.floor(half);
}

let output = isOddWithoutModulo(18);
console.log(output); // --> true
