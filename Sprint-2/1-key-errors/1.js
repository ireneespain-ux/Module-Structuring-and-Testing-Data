// Predict and explain first...

// Why will an error occur when this program runs?
// =============> My predict: the code will show a syntax error because 'decimalNumber' is already declared as a function parameter
// =============> It cannot be redeclared in the same scope using 'const'

// Try playing computer with the example to work out what is going on

//function convertToPercentage(decimalNumber) {
//  const decimalNumber = 0.5;
//  const percentage = `${decimalNumber * 100}%`;

//return percentage;
//}

//console.log(decimalNumber);

// =============> write your explanation here
// ==> the first error as the predicted above, a SyntaxError because 'decimalNumber' has already been declared
// ==> The second error is ReferenceError because 'decimalNumber' has only been declared inside the function
// ==> So when using 'decimalNumber' in console.log will show error because it has not been declared

// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

console.log(convertToPercentage("0.5"));

