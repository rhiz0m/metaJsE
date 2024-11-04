const addFive = require("./addFive")

test("runs the number plus 5", () => {
  expect(addFive(1)).toBe(6)
})

// npm run test
