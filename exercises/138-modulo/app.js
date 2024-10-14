function modulo(num1, num2) {
    // your code here
    if (num2 === 0 || isNaN(num1) || isNaN(num2)) return NaN;
    
    let isNegative = false;
    if (num1 < 0) {
        num1 = -num1;
        isNegative = true;
    }
    
    while (num1 >= num2) {
        num1 -= num2;
    }
    
    return isNegative ? -num1 : num1;
}

let output = modulo(25, 4);
console.log(output); // --> 1
