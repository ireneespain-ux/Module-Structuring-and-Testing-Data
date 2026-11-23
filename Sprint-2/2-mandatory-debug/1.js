// Predict and explain first...
//  =============> write your prediction here
// ==> Prediction: The output will show undefined instead of 42.

//function sum(a, b) {
//return;
//a + b;
//}

//console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
// Explanation: The semicolon ends the return statement before
// the calculation. The function returns undefined,
// and a + b is never executed.

// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);