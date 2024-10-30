// Exercise: Defensive programming

/*
  Defensive programming is all about assuming 
  that all the arguments a function will receive are 
  of the wrong type,  the wrong value or both.
 */

function letterFinder(word, match) {
  var condition1 = typeof word === "string" && word.length >= 2
  var condition2 = typeof match === "string" && match.length === 1

  if (condition1 && condition2) {
    // Check conditions before looping

    for (var i = 0; i < word.length; i++) {
      if (word[i] == match) {
        //if the current character at position i in the word is equal to the match
        console.log("Found the", match, "at", i)
      } else {
        console.log("---No match found at", i)
      }
    }
  } else {
    console.log("Please pass correct arguments to the function.")
  }
}

console.log(letterFinder(4, 5)) // Failing test
//console.log(letterFinder("cat", "c")) // Passing test

console.log("hello")