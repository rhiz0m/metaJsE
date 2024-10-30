// In functional programming, data and functions that operate on it are clearly separated, not combined inside objects

function doubleIt(val) {
  return val * 2
}

function objectMaker(val) {
  return { prop: val }
}

console.log(objectMaker(doubleIt(10)))

// Function calling and recursion

function example() {
  console.log("line one")
  console.log("line two")
  console.log("line three")
  // example() <- When a function calls itself its called recursion.
}

// A function that works as a loop until it reached 0
let counter = 3

function example2() {
  console.log(counter)
  counter = counter - 1
  if (counter === 0) return
  example2()
}

console.log(example2())
