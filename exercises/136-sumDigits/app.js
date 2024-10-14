function sumDigits(num) {
    // your code here
    let str = num.toString()
    let sum = 0
    for (let i = 0; i < str.length; i++) {
        if(i === 0 && str[i] === '-') {
            sum -= Number(str[i+1])
            i++
        } else {
            sum += Number(str[i])
        }
    }

    return sum
}

let output = sumDigits(-316);
console.log(output); // --> 4
