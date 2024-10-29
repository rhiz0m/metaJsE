// Syntax, logical and runtime errors

/**
 * Common errors in JavaScript: 

ReferenceError 

SyntaxError 

TypeError 

RangeError
 * 
 * Other Javascript errors
 
 AggregateError 

Error 

InternalError 

URIError
 */

console.log(username)
// Uncaught ReferenceError: username is not defined

// Uncaught SyntaxError: Unexpected string
var a "there's no assignment operator here";

// Strings don't have the array methods aviable to them
"hello".pop() // Uncaught TypeError: "hello".pop is not a function

// Range Error
/**
 * Example with 10
Divide 10 by 2. The quotient is 5, remainder 0.
Divide 5 by 2. The quotient is 2, remainder 1.
Divide 2 by 2. The quotient is 1, remainder 0.
Divide 1 by 2. The quotient is 0, remainder 1.
Now, read the remainders from bottom to top, giving 1010.
 */
(10).toString(2); // '1010'

// Example of out of Range
(10).toString(100); // Uncaught RangeError: toString() radix argument must be between 2 and 36