
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
// My prediction: A SyntaxError will occur because
// the function uses the number 3 as a parameter.
// A parameter must be a valid name, not a number.

// function square(3) {
//    return num * num;
// }

// =============> write the error message here
// SyntaxError: Unexpected number

// =============> explain this error message here
// Explanation: The function should use a parameter
// such as num. When we call square(3), the argument
// 3 is assigned to num.

// Finally, correct the code to fix the problem

// =============> write your new code here
function square(num){
    return num * num;
}
console.log(square("15"));



