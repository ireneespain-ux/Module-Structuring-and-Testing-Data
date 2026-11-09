//const cardNumber = 4533787178994213;
//const last4Digits = cardNumber.slice(-4);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value


// My answer:
// My predicton is that the code won't work because "slice" is a method that is used on strings, 
// but cardNumber is missing the quotation marks, so it works as a number but not a string. 
// convert cardNumber to a string before using the slice method.

const cardNumber ="4533787178994213";
const last4Digits = cardNumber.slice(-4);
console.log(last4Digits);
