function isRotated(str1, str2) {
    // your code here
    if(str1.length != str2.length) return false;

    // Solution 1:
    // let concatenaded = str1 + str1
    // return concatenaded.includes(str2)

    // Solution 2:
    let rotated = str1;
    for (let i = 0; i < str1.length; i++) {
      if(rotated == str2) {
        return true
      }
      rotated = rotated.slice(1) + rotated[0]

    }
    return false
  }
  
  console.log(isRotated('hello world', 'orldhello w')); // --> true
  console.log(isRotated('hello world', 'omrel wp')); // --> false
  
