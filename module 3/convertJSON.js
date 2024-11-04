// Convert a JSON string to an object ->

const jsonStr = '{"greeting" : "hello"}'
JSON.parse(jsonStr)

//console.log(jsonStr) // {"greeting" : "hello"}

const aPlainObj = JSON.parse(jsonStr)
aPlainObj.greeting = "hi"

//console.log(aPlainObj) // { greeting: 'hi' }

// convert an object to a JSON string ->

const data = {
  firstName: "John",
  lastName: "Doe",
  greeting: "Hello!",
}

//console.log(data) // { firstName: 'John', lastName: 'Doe', greeting: 'Hello!' }

console.log(JSON.stringify(data)) // {"firstName":"John","lastName":"Doe","greeting":"Hello!"}

