/** THE SPREAD OPERATOR */

const topThree = ["Valdemarsvik", "The Colosseum", "Tibet"]

function showItenary(place1, place2, place3) {
  console.log(`first visit ${place1}`)
  console.log(`then ${place2}`)
  console.log(`finally ${place3}`)
}

showItenary(topThree[0], topThree[1], topThree[2])

// To simplify, use the spread operator
showItenary(...topThree)

/** THE REST OPERATOR */

const topSeven = [
  "Tallin",
  "USA",
  "North Pole",
  "South Pole",
  "Iceland",
  "Madagaskar",
  "Helsinki",
]

const [] = topSeven

const [first, second, third, ...secondVisit] = topSeven

console.log(secondVisit) // [ 'South Pole', 'Iceland', 'Madagaskar', 'Helsinki' ]
console.log(third) // North Pole

function addTaxToPrices(taxRate, ...itemsBought) {
  return itemsBought.map((item) => taxRate * item)
}

let shoppingCart = addTaxToPrices(1.1, 46, 89, 35, 79)
console.log(shoppingCart) // [ 50.6, 97.9, 38.5, 86.9 ]

// 1.1 is assigned to the first parameter: taxrate,
// Then a new array is created where taxrate is multiplied with each item

/**** Join arrays, objects using the rest operator */

const fruits = ["apple", "pear", "plum"]
const berries = ["blueberry", "strawberry"]

const fruitsAndBerries = [...fruits, ...berries]
console.log(fruitsAndBerries) // [ 'apple', 'pear', 'plum', 'blueberry', 'strawberry' ]

const flying = { wings: 2 }
const car = { wheels: 4 }

const joinFlyingCar = { ...flying, ...car }
console.log(joinFlyingCar) // { wings: 2, wheels: 4 }

/*** Add new members to arrays without using the push() method */

let veggies = ["onion", "parsley"]
veggies = [...veggies, "salad", "carrot"]
console.log(veggies) // [ 'onion', 'parsley', 'salad', 'carrot' ]

//or:

let veggies2 = ["onion", "parsley"]
veggies2 = ["salad2", "carrot2", ...veggies2]
console.log(veggies2) // [ 'salad2', 'carrot2', 'onion', 'parsley' ]

const greeting = "Hello"
const arrayOfChars = [...greeting]
console.log(arrayOfChars) //  ['H', 'e', 'l', 'l', 'o']

// Copy either an object or an array into a separate one
const car1 = {
  speed: 200,
  color: "yellow",
}
const car_2 = { ...car1 }

car1.speed = 201

console.log(car1.speed, car_2.speed) // 201 200

const fruits1 = ["apples", "pears"]
const fruits2 = [...fruits1]
fruits1.pop()
console.log(fruits1, "not", fruits2) // [ 'apples' ] not [ 'apples', 'pears' ]

 const meal = ["soup", "steak", "ice cream"]
 let [...starter] = meal
 console.log(starter)