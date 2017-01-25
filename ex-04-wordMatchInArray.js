
/**
 * Ex-04 : wordMatchInArray()
 *
 * Write a function called `wordMatchInArray` that takes 2 inputs: a string, and an array.
 * The function should return a boolean value if that word is found in the array.
 *
*/
var wordMatchInArray = function(str, arrayOfStrings){
var match = false
  for (var i = 0; i < arrayOfStrings.length; i = i + 1){
    if (str === arrayOfStrings[i]){
      match = true
    }
  }
  return match
}










//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
var sampleWordsArray = ["because", "girls", "just", "want", "to", "have", "fun"]

console.assert(wordMatchInArray('girls', sampleWordsArray) === true)
console.assert(wordMatchInArray('fun', sampleWordsArray) === true)
console.assert(wordMatchInArray('boys', sampleWordsArray) === false)

var sampleWordsArray2 = ["boys", "there", "is", "no", "way", "out", "of", "here"]
console.assert(wordMatchInArray('boys', sampleWordsArray2) === true)
console.assert(wordMatchInArray('girls', sampleWordsArray2) === false)
