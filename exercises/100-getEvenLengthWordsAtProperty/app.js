function getEvenLengthWordsAtProperty(obj, key) {
    // your code here
    if(!obj.hasOwnProperty(key) || !Array.isArray(obj[key])) {
      return [];
  }
  return obj[key].filter(item => item.length % 2 === 0)
}

let obj = {
  key: ['a', 'long', 'game']
};
let output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']
