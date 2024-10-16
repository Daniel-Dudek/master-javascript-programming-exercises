// Write your function here
function select(arr, obj) {
    let result = {}

    arr.forEach(item => {
        if(obj[item]) {
            result[item] = obj[item]
        }
    });
    return result
}

let arr = ['a', 'c', 'e'];
let obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
let output = select(arr, obj);
console.log(output); // --> { a: 1, c: 3 }