function isIsogram(text) {
  // your code here
  let lowerText = text.toLowerCase()
  let arr = []

  for (let i = 0; i < lowerText.length; i++) {
    let char = lowerText[i]
    if(arr.indexOf(char) !== -1) {
      return false
    }
    arr.push(char)
  }

  return true
}

console.log(isIsogram("Camile")); // --> true
console.log(isIsogram("Camille")); // --> false
