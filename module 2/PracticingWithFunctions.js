//Exercise: Practicing with functions

function letterFinder(word, match) {
  for (i = 0; i < word.length; i++) {
    if (word[i] == match) {
      console.log(`Found the ${match} at index: ${i} in the word ${word}`)
    } else {
      console.log(`No match found at index ${i}`)
    }
  }
}

letterFinder("match", "t")
