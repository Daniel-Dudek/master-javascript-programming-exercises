function findLongestPalindrome(sentence) {
  // your code here
  let longestPalindrome = '';
  
  for (let i = 0; i < sentence.length; i++) {
    for (let j = i + 1; j <= sentence.length; j++) {
      let substring = sentence.slice(i, j);
      
      if (isPalindrome(substring) && substring.length >= longestPalindrome.length) {
        longestPalindrome = substring;
      }
    }
  }
  
  return longestPalindrome;
}

function reverseString(string) {
  // your code here
  return string.split('').reverse().join('')
}

function isPalindrome(word) {
  // your code here
  return word.length > 1 && word.toLowerCase() === reverseString(word.toLowerCase())
}

let output = findLongestPalindrome("My dad is a racecar athlete");
console.log(output); // --> "a racecar a"
