// Graded: Writing a Unit Test

const timesTwo = require("./timesTwo")

test("Adds the input number times two", () => {
  expect(timesTwo(4)).toBe(8)
})
