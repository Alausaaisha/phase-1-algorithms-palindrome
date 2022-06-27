function isPalindrome(word) {
  // Write your algorithm here
  // get word length
  //divide string into half
  //compare first half of string with second half of string
  // if same, return true, else return false.

  const len = word.length;
for (let i = 0; i < len/2; i++){
  if (word[i] !== word[len - 1 -i]){
    return(false);
  }
}

return(true);

}

/* 
  Add your pseudocode here
  store string length in a variable
  itierate over string and divide the word into 2 halves using for loop
  compare the 2 halves using if statement
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
