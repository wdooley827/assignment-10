
/**
 * Ex-09 : reverseString()
 *
 * Write a function called reverseString that takes a string as input
 * and returns a string with the characters in reverse order.
 * (note: can't use .reverse() method )
 *
*/

//taken from freecodecamp
// function reverseString(str) {
//     var newString = "";
//     for (var i = str.length - 1; i >= 0; i--) {
//         newString += str[i];
//     }
//     return newString;

var reverseString = function(inputStr){
  var revString = "";
//starting at str.length - 1, go till i is greater than or equal to zero by descending 1 everytime.
  for (var i = inputStr.length - 1; i >= 0; i = i - 1){
//create new string by adding new indexes in reverse order
    revString = revString + inputStr[i];
  }
  return revString;
}





//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
console.assert( reverseString('books') === 'skoob')
console.assert( reverseString('coolness') === 'ssenlooc')
console.assert( reverseString('bedtime') === 'emitdeb')
console.assert( reverseString('yah sure') === 'erus hay')
