
 // Predict and explain first...
 // ==> Prediction: A SyntaxError will occur because 'str' is already declared as a function parameter.
 // ==> It cannot be redeclared using let in the same scope.

 // Original incorrect code:
 // function capitalise(str) {
 //   let str = `${str[0].toUpperCase()}${str.slice(1)}`;
 //   return str;
 // }

 // Explanation:
 // The parameter 'str' already exists inside the function.
 // Declaring another variable called 'str' with let causes a SyntaxError.

 // Corrected code:
 function capitalise(str) {
   let strCapital = `${str[0].toUpperCase()}${str.slice(1)}`;
   return strCapital;
 }

 // Call the function with a string input
 console.log(capitalise("irene"));
 console.log(capitalise("kimkim"));



