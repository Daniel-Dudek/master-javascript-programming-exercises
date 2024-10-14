function transformFirstAndLast(array) {
  // your code here
  let obj = {}
  for (let i = 0; i < array.length; i++) {
    if(i === 0) {
      obj[array[i]] = array[array.length-1]
    }
  }

  return obj

  // second way
  // let aux = { [array[0]]: array[array.length - 1] };
  // return aux
}

let arr = ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'];
console.log(transformFirstAndLast(arr)); // --> { Queen: "Beyonce" }
