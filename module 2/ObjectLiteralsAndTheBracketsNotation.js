// Object Literals and the Brackets Notation

// First approach. Create an object
var myBike = {
  type: "bmx",
  wheels: 2,
  price: 5000,
}

myBike["special features"] = "limpsadel"
console.group(myBike)

myBike["wheels"] = 3

console.log(`Updated to ${myBike.wheels} wheels...`)

// Second approach. Start with empty object and then add properties
var myCar = {}

myCar.type = "volvo"
myCar.wheels = 4
myCar.engine = "V8"
myCar.price = 200000

console.log(myCar)

// Update price
myCar.price = 25
console.log(`Updated car price: ${myCar.price}`)

// Objects and arrays

var robotProperties = ["speed", "strength", "stamina"]

var robot = {
  speed: "200",
  strength: "500",
  stamina: "1",
}

for (i = 0; i < robotProperties.length; i++) {
  console.log(robot[robotProperties[i]])
}

/**
 * explenation: in the first iteration
 * robotAbilities[i] is "speed"
 * this results in: robot["speed"]
 * then the value gets printed connected to speed: 200
 */
