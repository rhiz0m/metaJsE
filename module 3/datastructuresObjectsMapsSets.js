// Objects , Maps , Sets

// Maps doesn't have inheritance. No prototypes! This makes it useful as a data storage.

const result = []

const car = {
  speed: 200,
  color: "Black",
}

const carKeys = Object.keys(car)
carKeys.forEach((key) => {
  result.push(key, car[key])
})

console.log(result)

// Maps

let boxers = new Map()
boxers.set(1, "Champion!")
boxers.set(2, "Runner up!")
boxers.set(3, "Third place!")

console.log(boxers) // Output:  Map(3) { 1 => 'Champion', 2 => 'Runner up', 3 => 'Third place' }
console.log(boxers.get(1))

/** A SET is a collection of unique values. */

const repetitiveFruits = ["apple", "pear", "apple", "pear", "plum", "apple"]
const uniqueFriuts = new Set(repetitiveFruits)
console.log(uniqueFriuts) // Output: Set(3) { 'apple', 'pear', 'plum' }

/***
 * 
Besides the built-in data structures in JavaScript, it's possible to build 
non-native, custom data structures.
These data structures come built-in natively in some other programming languages  
or even those other programming languages don't support them natively.
Some more advanced data structures that have not been covered include:

Queues

Linked lists (singly-linked and doubly-linked)

Trees

Graphs
 * 
 */
