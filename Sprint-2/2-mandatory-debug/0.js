// Predict and explain first...

// =============> write your prediction here
// Prediction: The function will print 320, but the final
// message will show undefined because the function
// does not return a value.

// Original code:
// function multiply(a, b) {
//   console.log(a * b);
// }
// console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
// Explanation:
// console.log() prints the result but does not return it.
// Without a return statement, the function returns undefined.

// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);