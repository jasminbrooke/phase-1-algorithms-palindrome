function isPalindrome(word) {
  // Write your algorithm here
  const wordArray = word.split('')
  const reverseArray = wordArray.reverse()
  const joinArray = reverseArray.join('')
  if (joinArray === word) {
    return true}
  else {
    return false}
}

/* 
  Add your pseudocode here
  turn string into array 
  reverse array
  join array
  compare string to backwards string
  if it is equal, return confirmation of being a palindrome  
*/

/*
  Add written explanation of your solution here
  The function "IsPalindrome" takes in a word as an argument. It turns that word into an array.
  It reverses the array. It then compares the reverse array with the original word to determine
   if they are equal. It logs a true or false. 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here

  
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("cat"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("bob"));
}

module.exports = isPalindrome;
