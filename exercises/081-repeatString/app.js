function repeatString(string, num) {
    // your code here
    let result = ''; // Inicializamos una cadena vacía
    for (let i = 0; i < num; i++) {
        result += string; // Concatenamos la cadena en cada iteración
    }
    return result;
}

let output = repeatString('code', 3);
console.log(output); // --> 'codecodecode'
