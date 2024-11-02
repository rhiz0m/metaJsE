// Datastructures - a way to organise data!

/**
 * Examples: Arrays, Objects, Maps & Sets
 * Coding task? first decide datastructure to use
 *
 * Built in methods: forEach(), filter(), map()
 *
 */
 
/**** FOREACH */

//the forEach() method accepts a function that will work on each array
//item. That function's first parameter is the current array item itself,
//and the second (optional) parameter is the index.

const fruits = ["apple", "banana", "pear", "mango", "kiwi"]

function appendIndex(fruit, index) {
  console.log(`${fruit}. ${index}`)
}

// When sending a function as callback, the element goes first, then the index
fruits.forEach((fruit, index) => appendIndex(index, fruit))

const veggies = ["onion", "garlic", "potato"]

// Very often, the function that the forEach() method needs to use is passed in
//directly into the method call, like this:

veggies.forEach(function (veggie, index) {
  console.log(`${index} ${veggie}`)
})

/**** FILTER */
// filters the arrays based on a specific test

const numbers = [2, 10, 25, 50, 200]

const sortNumbers = numbers.filter((num) => {
  return num > 20
})

console.log(sortNumbers) // output: [ 25, 50, 200 ]

/*** The map method */

//This method is used to map each array item over to another array's item,
//based on whatever work is performed inside the function that is passed-in
//to the map as a parameter.

var someNumbers = [5, 20, 300, 4, 67]

const divideNum = someNumbers.map((num) => {
  return num / 2
})

console.log(divideNum)
