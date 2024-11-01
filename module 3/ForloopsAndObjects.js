//*** Forloops and Objects
// it's important to know that a for of loop cannot work on an
// object directly, since an object is not iterable.

const car = {
  speed: 200,
  color: "blue",
}

// TypeError: car is not iterable at Object
// for (prop of car) {
//     console.log(prop)
// }

// Contrary to objects, arrays are iterable
// for (var color in colors) output: 0, 1, 2
// for (var color of colors) output: red, green, blue

const colors = ["red", "green", "blue"]

for (var color of colors) {
  console.log(color)
}

// Three built-in methods: Object.keys(), Object.values(), and Object.entries().
// A for of loop can be run on arrays to loop over object

const car2 = {
  speed: 200,
  color: "blue",
}

console.log(Object.keys(car2))
// the returned value is an array of strings
// returns the keys
// [ 'speed', 'color' ]

console.log(Object.values(car2))
// returns the objects values
// [ 200, 'blue' ]

console.log(Object.entries(car2))
// returns an array listing both the keys and the values.
/* [ 
    [ 'speed', 200 ], [ 'color', 'blue' ] 
    ]
*/
// This time, the values that get returned are 2-member arrays nested inside an array

var clothingItems = {
  price: 50,
  color: "beige",
  material: "cotton",
  season: "autumn",
}

// "in" Used to iterate over a specific object AND its prototype properties
for (const key of Object.keys(clothingItems)) {
    console.log(key, ":", clothingItems[key])
}

// "in" Used to iterate over a specific object
for (const key in clothingItems) {
    console.log(key, ":", clothingItems[key])
}