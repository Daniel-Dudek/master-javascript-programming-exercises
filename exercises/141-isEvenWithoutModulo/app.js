function isEvenWithoutModulo(num) {
    // your code here
    let half = num / 2;

    return half === Math.floor(half);
}

let output = isEvenWithoutModulo(8);
console.log(output); // --> true
