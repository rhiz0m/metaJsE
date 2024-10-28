// module 2/ArraysAreObjects

var fruits = []

fruits.push("apple")
fruits.push("banana")
fruits.push("pear")

console.log(fruits)

fruits.pop()

console.log(fruits)

function populateEmptyArr(one, two, three) {
  var arr = []
  arr.push(one)
  arr.push(two)
  arr.push(three)
  // console.log(arr)
  return arr
}

var transformers = populateEmptyArr("Optimus", "Megatron", "Bumblebee")
console.log(transformers)
