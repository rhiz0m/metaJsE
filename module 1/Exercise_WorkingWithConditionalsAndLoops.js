// Exercise: C

// Task 1: With For Loop and if/else conditiionals
console.log("---- For loop and result with if/else -----")

for (i = 1; i <= 10; i++) {
  if (i === 1) {
    console.log("Gold medal")
  } else if (i === 2) {
    console.log("Silver medal")
  } else if (i === 3) {
    console.log("Bronze medal")
  } else {
    console.log(i)
  }
}
console.log("---- For loop and result with Switch -----")
// Task 2: With for loop and Switch Statements

for (i = 1; i <= 10; i++) {
  switch (i) {
    case 1:
      console.log("Gold medal")
      break
    case 2:
      console.log("Silver medal")
      break
    case 3:
      console.log("Bronze medal")
      break
    default:
      console.log(i)
  }
}

// Outher loop: runs 2 times. Inner loop: runs 3 times.
// Result 2 x 3 = 6 times hello gets printed.

for (i = 0; i < 2; i++) {
  for (var j = 0; j < 3; j++) {
    console.log("Hello")
  }
}

/*
* hello
*/ 