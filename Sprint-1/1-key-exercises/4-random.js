const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

// My explanation:
// Math.random() generates a random number between 0 (included) and 1 (excluded).
// Math.floor() rounds a number down to the nearest integer.
// The expression (maximum - minimum + 1) in this case is 100 - 1+ 1 = 100
// Adding minimum make the result + 1
// Therefore, num stores a random integer between 1 and 100 (inclusive).
console.log(num);