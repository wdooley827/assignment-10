
/**
 * Ex : isPalindrome()
 *
 * Write a function called `isPalindrome` that sees if the word
 * is equal when spelled same backward as it is forward
 *
 * Hint: you may want to invoke the `reverseString` function you wrote earlier
 * from the previous queestion
*/
function isPalindrome(inputStr){
  var match = false;
  var backString = "";
  for (var i = inputStr.length - 1; i >= 0; i = i - 1){
    backString = backString + inputStr[i];
    if (backString === inputStr){
      match = true;
    }
  }
  return match;
}





//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
console.assert( isPalindrome('wow') === true)
console.assert( isPalindrome('milk') === false)
console.assert( isPalindrome('howdy') === false)
console.assert( isPalindrome('kayak') === true)
console.assert( isPalindrome('tacocat') === true)
console.assert( isPalindrome('1201411') === false)
console.assert( isPalindrome('13100131') === true)
